import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, TrendingUp, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import SessionCard from "@/components/SessionCard";
import TestimonialSlider from "@/components/TestimonialSlider";

const Home = () => {
  const sessions = [
    {
      icon: FileText,
      title: "CV Review & Optimization",
      description: "Detailed CV critique, keyword optimization for ATS, formatting tips, and a polished summary that gets you noticed.",
      deliverables: [
        "1 optimized CV version",
        "ATS keyword list",
        "Improvement checklist",
        "PDF summary with action items"
      ],
      sessionNumber: 1
    },
    {
      icon: Users,
      title: "Networking & Referral Strategy",
      description: "Learn how to network effectively, request referrals, craft compelling messages, and optimize your LinkedIn profile.",
      deliverables: [
        "Message templates",
        "LinkedIn profile audit",
        "Referral request framework",
        "Networking action plan"
      ],
      sessionNumber: 2
    },
    {
      icon: TrendingUp,
      title: "Future Skills & Interview Prep",
      description: "Personal skill-gap analysis, recommended learning plan, mock-interview tips, and behavioral answer frameworks.",
      deliverables: [
        "Skills assessment report",
        "Learning roadmap",
        "Interview answer templates",
        "Follow-up resources"
      ],
      sessionNumber: 3
    }
  ];

  const whyChoose = [
    "Industry experts with 10+ years experience",
    "1:1 personalized feedback sessions",
    "Practical, actionable guidance",
    "Post-session resources & templates",
    "Full refund up to 72 hours before first session"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-soft via-background to-accent-soft/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Limited slots available each week</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Master your career journey
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              3 live sessions, 1:1 expert guidance
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              CV review • Networking & referrals • Future skill strategy
              <br />
              <span className="font-semibold text-foreground">One simple package. $300</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/book">
                <Button size="lg" className="text-lg px-8 py-6 shadow-large">
                  Book Your Sessions ($300)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/sessions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>3 × 60 min sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Expert coaches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Actionable resources</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Package?</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to accelerate your career journey, delivered by industry experts
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {whyChoose.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card hover:bg-accent-soft transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your 3-Session Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each session builds on the last, creating a comprehensive career acceleration program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sessions.map((session, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <SessionCard {...session} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple, streamlined process from booking to results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Book", description: "Choose your package and complete payment securely" },
              { step: "2", title: "Schedule", description: "Sessions are automatically scheduled and calendar invites sent" },
              { step: "3", title: "Transform", description: "Attend your sessions and apply expert guidance to accelerate your career" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear from professionals who accelerated their careers with our guidance
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to unlock your career?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of professionals who have transformed their careers with expert guidance. 
            Book your 3-session package today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-large">
                Book Now - $300
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+14252097368">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
