import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Target, Users, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const About = () => {
  const coach = {
    name: "Saranya Roy",
    role: "Lead Career Coach & Founder",
    experience: "12+ years in talent acquisition and career coaching",
    expertise: "CV optimization, interview preparation, tech recruitment, networking strategy",
    bio: "Former senior hiring manager at leading tech companies with extensive experience in Fortune 500 recruitment. Specialized in helping professionals navigate career transitions and land roles at top-tier organizations. Passionate about empowering ambitious professionals through evidence-based coaching and actionable strategies.",
    credentials: [
      "12+ years experience in tech recruitment",
      "Coached 200+ professionals to career success",
      "Expert in ATS optimization and interview preparation",
      "Former hiring manager at Fortune 500 companies"
    ]
  };

  const outcomes = [
    { metric: "85%", description: "Interview rate increase" },
    { metric: "3-4x", description: "More CV responses" },
    { metric: "30%", description: "Average salary boost" },
    { metric: "2 weeks", description: "Avg. time to first interview" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-soft via-background to-accent-soft/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PrepMyInterview</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to help ambitious professionals move faster in their careers through 
              evidence-based coaching and practical, actionable guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every professional deserves expert guidance to unlock their career potential. We bridge 
                  the gap between where you are and where you want to be through personalized, 1:1 coaching 
                  sessions that deliver immediate, practical value.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach combines industry expertise with proven frameworks to help you optimize your 
                  CV, master networking, and prepare for the interviews that matter.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent-soft to-background p-8 rounded-2xl shadow-medium">
                <h3 className="text-2xl font-bold mb-4">Why We're Different</h3>
                <ul className="space-y-3">
                  {[
                    "Real hiring managers & recruiters as coaches",
                    "Practical templates & frameworks you can use immediately",
                    "Evidence-based strategies, not generic advice",
                    "Fixed pricing - no hidden fees or upsells",
                    "Post-session resources & follow-up support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Meet Your Coach</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Guidance from industry expert with proven track record
              </p>
            </div>

            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-medium hover:shadow-large transition-all">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Award className="h-12 w-12 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">{coach.name}</h3>
                  <p className="text-primary font-semibold text-lg mb-3">{coach.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{coach.experience}</p>
                  <p className="text-foreground leading-relaxed mb-6">{coach.bio}</p>
                  <div className="bg-accent-soft p-6 rounded-xl">
                    <h4 className="font-semibold text-accent-soft-foreground mb-3">Key Credentials</h4>
                    <ul className="space-y-2">
                      {coach.credentials.map((credential, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-accent-soft-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t pt-6">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-primary">Expertise Areas:</span> {coach.expertise}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Expected Outcomes</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Real results from professionals who've completed our 3-session package
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-accent-soft to-background hover:shadow-medium transition-all"
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{outcome.metric}</p>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-medium">
              <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">During the Program:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Detailed analysis of your current position</li>
                    <li>• Personalized action plans for each area</li>
                    <li>• Templates and frameworks to implement immediately</li>
                    <li>• Real-time feedback and guidance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">After Completion:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Optimized CV that passes ATS systems</li>
                    <li>• Networking strategy with proven templates</li>
                    <li>• Skills roadmap aligned with market demands</li>
                    <li>• Interview preparation frameworks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-accent-soft to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your 3-session career acceleration package today and take control of your professional future.
            </p>
            <Link to="/book">
              <Button size="lg" className="text-lg px-8 py-6 shadow-large">
                Book Your Sessions Now - $300
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
