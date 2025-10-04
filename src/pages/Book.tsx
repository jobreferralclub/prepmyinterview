import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, CheckCircle2, CreditCard, Lock } from "lucide-react";
import { z } from "zod";

const bookingSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  timezone: z.string().min(1, "Please select a timezone"),
  notes: z.string().max(500, "Notes must be less than 500 characters").optional()
});

const Book = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<"booking" | "payment" | "confirmation">("booking");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    timezone: "UTC",
    notes: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookedSessions, setBookedSessions] = useState<any[]>([]);

  const timezones = [
    "UTC", "America/New_York", "America/Chicago", "America/Denver", 
    "America/Los_Angeles", "Europe/London", "Europe/Paris", "Asia/Tokyo"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      bookingSchema.parse(formData);
      setStep("payment");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const generateSessionDates = () => {
    const sessions = [];
    const baseDate = new Date();
    baseDate.setDate(baseDate.getDate() + 3); // Start 3 days from now

    // Fixed times: Monday 8-9 PM, Wednesday 8-9 PM, Friday 8-9 PM
    const sessionConfigs = [
      { day: 1, name: "CV Review & Optimization", time: "8:00 PM" }, // Monday
      { day: 3, name: "Networking & Referral Strategy", time: "8:00 PM" }, // Wednesday
      { day: 5, name: "Future Skills & Interview Prep", time: "8:00 PM" } // Friday
    ];

    for (let i = 0; i < 3; i++) {
      const sessionDate = new Date(baseDate);
      
      // Find next occurrence of the target day
      const currentDay = sessionDate.getDay();
      const targetDay = sessionConfigs[i].day;
      let daysUntilTarget = (targetDay - currentDay + 7) % 7;
      if (daysUntilTarget === 0 && i > 0) daysUntilTarget = 7; // If same day, go to next week
      
      sessionDate.setDate(sessionDate.getDate() + daysUntilTarget + (i * 7)); // Weekly schedule

      sessions.push({
        number: i + 1,
        name: sessionConfigs[i].name,
        date: sessionDate.toLocaleDateString('en-US', { 
          weekday: 'long', 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        }),
        time: sessionConfigs[i].time,
        timezone: formData.timezone
      });
    }

    return sessions;
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      const sessions = generateSessionDates();
      setBookedSessions(sessions);
      setStep("confirmation");
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      toast({
        title: "Booking confirmed!",
        description: "Check your email for calendar invites and session details.",
      });
    }, 1500);
  };

  const downloadCalendar = () => {
    // In production, this would generate actual ICS files
    toast({
      title: "Calendar invites sent!",
      description: "Check your email for .ics files to add to your calendar.",
    });
  };

  if (step === "confirmation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-soft via-background to-accent-soft/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-scale-in">
            <div className="bg-card rounded-2xl shadow-large p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Sessions Are Booked!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Confirmation email sent to <strong>{formData.email}</strong>
              </p>

              <div className="bg-accent-soft p-6 rounded-xl mb-8 text-left">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Your Scheduled Sessions
                </h2>
                <div className="space-y-4">
                  {bookedSessions.map((session) => (
                    <div key={session.number} className="p-4 bg-background rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-foreground">Session {session.number}: {session.name}</p>
                          <p className="text-sm text-muted-foreground mt-1">{session.date}</p>
                        </div>
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {session.time}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">Timezone: {session.timezone}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <Button size="lg" onClick={downloadCalendar} className="w-full">
                  <Calendar className="mr-2 h-5 w-5" />
                  Add to Calendar
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => navigate("/")}
                  className="w-full"
                >
                  Return to Home
                </Button>
              </div>

              <div className="text-left bg-secondary p-6 rounded-xl">
                <h3 className="font-semibold mb-3">What's Next?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Calendar invites sent with Zoom/Meet links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Preparation checklist emailed for each session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Reminder emails sent 24 hours before each session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Resources & templates provided after each session</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "payment") {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Complete Your Booking</h1>
              <p className="text-muted-foreground">Review your details and complete payment</p>
            </div>

            <div className="bg-card rounded-2xl shadow-large p-8 mb-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Package:</span>
                  <span className="font-medium">3-Session Career Coaching</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">3 × 60 minutes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Booking Name:</span>
                  <span className="font-medium">{formData.fullName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Timezone:</span>
                  <span className="font-medium">{formData.timezone}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">$300</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-large p-8 mb-6">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Payment Simulation</h2>
              </div>
              
              <div className="bg-accent-soft p-6 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-accent-soft-foreground mb-2">Demo Mode</p>
                    <p className="text-sm text-accent-soft-foreground">
                      This is a simulated payment. In production, this would integrate with Stripe for secure payment processing. 
                      Click "Complete Payment" to see the booking confirmation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" onClick={handlePayment} className="w-full text-lg">
                  <Lock className="mr-2 h-5 w-5" />
                  Complete Payment - $300
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setStep("booking")}
                  className="w-full"
                >
                  Back to Booking Form
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                <Lock className="inline h-3 w-3 mr-1" />
                Secure payment processing • Full refund up to 72 hours before first session
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your 3-Session Package</h1>
            <p className="text-lg text-muted-foreground">$300 for all three personalized coaching sessions</p>
          </div>

          <div className="bg-card rounded-2xl shadow-large p-8 mb-6">
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                <p className="text-xs text-muted-foreground mt-1">Calendar invites will be sent here</p>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
              </div>

              <div>
                <Label htmlFor="timezone">Preferred Timezone *</Label>
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>{tz}</option>
                  ))}
                </select>
                <p className="text-xs text-muted-foreground mt-1">Sessions will be scheduled in your timezone</p>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any specific areas you'd like to focus on?"
                  rows={4}
                  className={errors.notes ? "border-destructive" : ""}
                />
                {errors.notes && <p className="text-sm text-destructive mt-1">{errors.notes}</p>}
              </div>

              <div className="bg-accent-soft p-6 rounded-xl">
                <h3 className="font-semibold text-accent-soft-foreground mb-3">Booking Details</h3>
                <ul className="space-y-2 text-sm text-accent-soft-foreground">
                  <li>• Sessions will be automatically scheduled with at least 48 hours notice</li>
                  <li>• Calendar invites with video call links sent immediately</li>
                  <li>• Each session is 60 minutes of 1:1 coaching</li>
                  <li>• Full refund available up to 72 hours before first session</li>
                </ul>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg">
                Continue to Payment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
