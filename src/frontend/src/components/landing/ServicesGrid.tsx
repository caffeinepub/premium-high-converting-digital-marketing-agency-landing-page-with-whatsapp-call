import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionDiv } from './Motion';
import { Megaphone, TrendingUp, Share2, Search, Video, Globe, Bot, Zap } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Meta & Google Ads',
    description: 'Targeted campaigns that convert browsers into buyers',
  },
  {
    icon: Zap,
    title: 'Lead Generation Funnels',
    description: 'Automated systems that capture and nurture quality leads',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing (SMM)',
    description: 'Build brand presence and engage your audience effectively',
  },
  {
    icon: Search,
    title: 'SEO (Local + Global)',
    description: 'Rank higher on Google and get discovered by customers',
  },
  {
    icon: Video,
    title: 'Video Editing & Reels',
    description: 'Scroll-stopping content that drives engagement',
  },
  {
    icon: Globe,
    title: 'Website & Landing Page Design',
    description: 'High-converting pages that turn visitors into customers',
  },
  {
    icon: Bot,
    title: 'Marketing Automation',
    description: 'Save time with smart workflows and automated follow-ups',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Custom roadmaps to scale your business profitably',
  },
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <MotionDiv key={index} delay={index * 0.05}>
          <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all group">
            <CardHeader>
              <service.icon className="w-12 h-12 mb-3 text-primary group-hover:scale-110 transition-transform" />
              <CardTitle className="text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        </MotionDiv>
      ))}
    </div>
  );
}
