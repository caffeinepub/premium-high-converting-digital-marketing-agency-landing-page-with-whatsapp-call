import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionDiv } from './Motion';
import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Understand Your Business',
    description: 'Deep dive into your goals, audience, and competition',
  },
  {
    number: '2',
    icon: Lightbulb,
    title: 'Build Strategy',
    description: 'Create a custom roadmap tailored to your growth targets',
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Launch Campaigns',
    description: 'Execute with precision across all chosen channels',
  },
  {
    number: '4',
    icon: BarChart,
    title: 'Scale Results',
    description: 'Optimize continuously and multiply your success',
  },
];

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {steps.map((step, index) => (
        <MotionDiv key={index} delay={index * 0.15}>
          <Card className="h-full relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
            <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
              {step.number}
            </div>
            <CardHeader className="relative z-10">
              <step.icon className="w-12 h-12 mb-3 text-primary" />
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        </MotionDiv>
      ))}
    </div>
  );
}
