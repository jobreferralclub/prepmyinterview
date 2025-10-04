import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, LucideIcon } from "lucide-react";

interface SessionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
  sessionNumber: number;
}

const SessionCard = ({ icon: Icon, title, description, deliverables, sessionNumber }: SessionCardProps) => {
  return (
    <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-accent-soft group-hover:bg-primary/10 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
            Session {sessionNumber}
          </span>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          <p className="text-sm font-semibold text-foreground">Deliverables:</p>
          <ul className="space-y-2">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/book">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            Book This Session
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SessionCard;
