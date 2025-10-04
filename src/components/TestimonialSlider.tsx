import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "The CV review session transformed my resume completely. I went from zero responses to three interviews in just two weeks!",
    author: "Sarah Chen",
    role: "Software Engineer",
    company: "Tech Startup"
  },
  {
    quote: "The networking strategy session gave me the confidence and templates I needed. I secured a referral that led to my dream job.",
    author: "Michael Torres",
    role: "Product Manager",
    company: "Fortune 500"
  },
  {
    quote: "Interview prep was invaluable. The behavioral answer framework helped me ace my interviews and negotiate a 30% salary increase.",
    author: "Emily Johnson",
    role: "Marketing Director",
    company: "Global Agency"
  },
  {
    quote: "Best investment in my career. The personalized guidance and action plan made all the difference in my job search.",
    author: "David Park",
    role: "Data Scientist",
    company: "AI Company"
  },
  {
    quote: "The skills gap analysis opened my eyes to exactly what I needed to learn. Six months later, I landed a senior role.",
    author: "Rachel Williams",
    role: "UX Designer",
    company: "Design Studio"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-accent-soft to-background p-8 md:p-12 rounded-2xl shadow-medium">
        <Quote className="h-10 w-10 text-primary/20 mb-6" />
        <div className="animate-fade-in">
          <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-semibold text-foreground">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
