import { FileText, Users, TrendingUp } from "lucide-react";

const BundledSessionCards = () => {
  const sessions = [
    {
      number: 1,
      icon: FileText,
      title: "CV Review & Optimization",
      description: "Detailed CV critique, keyword optimization for ATS, formatting tips, and a polished summary that gets you noticed.",
      color: "from-primary/90 to-primary"
    },
    {
      number: 2,
      icon: Users,
      title: "Networking & Referral Strategy",
      description: "Learn how to network effectively, request referrals, craft compelling messages, and optimize your LinkedIn profile.",
      color: "from-primary/80 to-primary/90"
    },
    {
      number: 3,
      icon: TrendingUp,
      title: "Future Skills & Interview Prep",
      description: "Personal skill-gap analysis, recommended learning plan, mock-interview tips, and behavioral answer frameworks.",
      color: "from-primary/70 to-primary/80"
    }
  ];

  return (
    <div className="relative max-w-2xl mx-auto px-4">
      {/* Ribbon bow at top */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30">
        <div className="relative w-32 h-20">
          {/* Ribbon tails */}
          <div className="absolute top-8 left-0 w-14 h-20 bg-destructive origin-top-right rotate-12 shadow-lg" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
          <div className="absolute top-8 right-0 w-14 h-20 bg-destructive origin-top-left -rotate-12 shadow-lg" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
          {/* Ribbon knot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-12 bg-gradient-to-b from-destructive to-destructive/90 rounded-full shadow-large border-2 border-background"></div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-destructive/80 to-destructive/70 rounded-full"></div>
        </div>
      </div>

      {/* Vertical ribbon connecting the cards */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-3 bg-gradient-to-b from-destructive via-destructive to-destructive/80 shadow-lg z-0"></div>

      {/* Session cards stacked with 3D effect */}
      <div className="relative pt-12">
        {sessions.map((session, index) => (
          <div
            key={session.number}
            className="relative mb-8 last:mb-0 animate-fade-in-up"
            style={{ 
              animationDelay: `${index * 150}ms`,
              transform: `translateY(${index * -20}px) translateX(${index % 2 === 0 ? -5 : 5}px) rotate(${index % 2 === 0 ? -1 : 1}deg)`,
              zIndex: 10 + index
            }}
          >
            {/* Card shadow layers for depth */}
            <div 
              className="absolute inset-0 bg-card rounded-2xl transform translate-y-2 translate-x-2 opacity-20 blur-sm"
              style={{ transform: `translateY(${8 + index * 2}px) translateX(${8 + index * 2}px)` }}
            ></div>
            <div 
              className="absolute inset-0 bg-card rounded-2xl transform translate-y-1 translate-x-1 opacity-40"
              style={{ transform: `translateY(${4 + index}px) translateX(${4 + index}px)` }}
            ></div>

            {/* Main card */}
            <div className={`relative bg-gradient-to-br ${session.color} text-primary-foreground rounded-2xl shadow-large hover:shadow-glow transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border-2 border-background overflow-hidden group`}>
              {/* Decorative corner fold */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-background/20 transform origin-top-right" 
                   style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
              
              {/* Card content */}
              <div className="relative p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-primary-foreground/20 backdrop-blur-sm group-hover:bg-primary-foreground/30 transition-colors shadow-medium">
                    <session.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold bg-primary-foreground/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        Session {session.number}
                      </span>
                      <span className="text-xs bg-primary-foreground/10 px-2 py-1 rounded">60 min</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 leading-tight">
                      {session.title}
                    </h3>
                    <p className="text-primary-foreground/90 leading-relaxed">
                      {session.description}
                    </p>
                  </div>
                </div>

                {/* Decorative pattern */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                  <session.icon className="w-full h-full" />
                </div>
              </div>

              {/* Paper texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-foreground/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Price tag hanging from ribbon */}
      <div className="relative mt-12 flex justify-center">
        <div className="relative inline-block">
          {/* String connecting to ribbon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-muted-foreground/30"></div>
          
          {/* Price tag */}
          <div className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground px-8 py-4 rounded-lg shadow-large transform rotate-2 hover:rotate-0 transition-transform border-2 border-primary-foreground/20">
            <div className="text-center">
              <p className="text-sm font-semibold opacity-90 mb-1">Complete Package</p>
              <p className="text-4xl font-bold">$300</p>
              <p className="text-xs opacity-75 mt-1">All 3 sessions included</p>
            </div>
            
            {/* Hole punch effect */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background rounded-full border-2 border-primary-foreground/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundledSessionCards;
