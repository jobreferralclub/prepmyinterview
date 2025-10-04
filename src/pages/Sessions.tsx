import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, TrendingUp, Clock, CheckCircle2, ArrowRight, Calendar } from "lucide-react";

const Sessions = () => {
  const sessions = [
    {
      number: 1,
      icon: FileText,
      title: "CV Review & Optimization",
      duration: "60 minutes",
      objective: "Transform your CV into an interview-generating machine that passes ATS systems and impresses hiring managers.",
      description: "We conduct a comprehensive analysis of your CV, identifying gaps, optimizing formatting for ATS systems, and crafting compelling achievement statements. You'll learn industry-specific keyword strategies and get a complete CV rewrite that positions you as the ideal candidate.",
      deliverables: [
        "Detailed CV critique with specific improvement recommendations",
        "Optimized CV version with ATS-friendly formatting",
        "Industry-specific keyword list tailored to your target roles",
        "Achievement rewriting framework for ongoing use",
        "Improvement checklist with priority actions",
        "PDF summary with all action items"
      ],
      outcomes: [
        "85% higher response rate from applications",
        "Pass ATS screening filters consistently",
        "Stand out in competitive candidate pools",
        "Clear, quantified achievements that impress"
      ]
    },
    {
      number: 2,
      icon: Users,
      title: "Networking & Referral Strategy",
      duration: "60 minutes",
      objective: "Master the art of professional networking and unlock the hidden job market through strategic referrals.",
      description: "Most jobs are filled through referrals before they're even posted. We'll teach you proven networking techniques, provide ready-to-use message templates, and optimize your LinkedIn profile to attract opportunities. Learn how to request referrals confidently and build meaningful professional relationships.",
      deliverables: [
        "Personalized networking strategy for your industry",
        "Ready-to-use outreach message templates",
        "LinkedIn profile audit with optimization checklist",
        "Referral request framework and scripts",
        "Network mapping exercise and action plan",
        "Follow-up sequence templates"
      ],
      outcomes: [
        "3-4x more meaningful connections",
        "Higher response rates to outreach messages",
        "Regular referral opportunities",
        "Stronger LinkedIn presence and visibility"
      ]
    },
    {
      number: 3,
      icon: TrendingUp,
      title: "Future Skills & Interview Preparation",
      duration: "60 minutes",
      objective: "Identify skill gaps, create a learning roadmap, and master behavioral interviews to land your target role.",
      description: "We analyze your current skillset against market demands for your target roles, creating a personalized learning plan. You'll receive proven frameworks for answering behavioral questions, mock interview practice, and strategies to showcase your skills effectively. Leave with confidence and a clear path forward.",
      deliverables: [
        "Personal skill-gap analysis report",
        "Recommended learning roadmap with resources",
        "Mock interview with detailed feedback",
        "Behavioral answer templates (STAR method)",
        "Common interview questions for your field",
        "Salary negotiation tips and frameworks"
      ],
      outcomes: [
        "Confidence in interviews",
        "Clear learning path aligned with market needs",
        "Compelling behavioral answer examples",
        "30% average salary increase through negotiation"
      ]
    }
  ];

  // Generate sample available slots (next 21 business days)
  const generateSampleSlots = () => {
    const slots = [];
    const times = ["10:00 AM", "2:30 PM", "4:00 PM", "6:00 PM"];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 2); // Start 2 days from now

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      const randomTime = times[Math.floor(Math.random() * times.length)];
      slots.push({
        date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
        time: randomTime
      });
      
      if (slots.length >= 5) break;
    }
    return slots;
  };

  const sampleSlots = generateSampleSlots();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-soft via-background to-accent-soft/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your 3-Session Career Package</h1>
            <p className="text-xl text-muted-foreground mb-6">
              A comprehensive program designed to accelerate your career journey
            </p>
            <div className="inline-flex items-center gap-6 text-sm bg-card px-6 py-3 rounded-full shadow-medium">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-semibold">3 × 60 min sessions</span>
              </span>
              <span className="text-border">|</span>
              <span className="font-bold text-primary text-lg">$300</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sessions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card rounded-2xl shadow-large overflow-hidden hover:shadow-xl transition-all">
                  {/* Session Header */}
                  <div className="bg-gradient-to-r from-primary to-primary-hover p-8 text-primary-foreground">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 rounded-xl bg-primary-foreground/20">
                        <session.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold opacity-90">Session {session.number}</p>
                        <h2 className="text-3xl font-bold">{session.title}</h2>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Clock className="h-4 w-4" />
                      <span>{session.duration}</span>
                    </div>
                  </div>

                  {/* Session Content */}
                  <div className="p-8">
                    {/* Objective */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-3 text-primary">Objective</h3>
                      <p className="text-lg text-foreground leading-relaxed">{session.objective}</p>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-3">What We Cover</h3>
                      <p className="text-muted-foreground leading-relaxed">{session.description}</p>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">What You'll Receive</h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {session.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="bg-accent-soft p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-accent-soft-foreground">Expected Outcomes</h3>
                      <ul className="space-y-2">
                        {session.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-accent-soft-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Availability */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Sample Available Slots</h2>
              <p className="text-lg text-muted-foreground">
                Example availability for next week (UTC timezone). Actual slots assigned after booking.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-medium p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                {sampleSlots.map((slot, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-accent-soft/50 hover:bg-accent-soft transition-colors"
                  >
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{slot.date}</p>
                      <p className="text-sm text-muted-foreground">{slot.time} UTC</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6">
                After booking, your 3 sessions will be automatically scheduled with at least 48 hours between booking and first session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your complete 3-session package now. Sessions scheduled automatically with calendar invites.
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-large">
              Book All 3 Sessions - $300
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm mt-4 opacity-75">
            Full refund available up to 72 hours before your first session
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sessions;
