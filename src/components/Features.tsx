import { 
  Trash2, 
  Wind, 
  Car, 
  Activity,
  CloudRain,
  Thermometer,
  Sparkles 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export function Features() {
  const features = [
    {
      icon: Trash2,
      title: 'Smart Waste Management',
      description: 'Utilize AI to optimize waste collection routes, track recycling rates, and reduce landfill overflow, cutting operational costs.'
    },
    {
      icon: Wind,
      title: 'Predictive Air Quality',
      description: 'Monitor real-time AQI and predict pollution hotspots, providing timely warnings and actionable data to government agencies.'
    },
    {
      icon: Car,
      title: 'Smart Traffic & EV',
      description: 'Manage city-wide traffic flow with dynamic AI routing and an integrated EV slot booking system to reduce congestion.'
    },
    {
      icon: Activity,
      title: 'Personalized Energy Advisor',
      description: 'Analyze energy consumption patterns for residential or commercial areas to provide actionable insights for reduction and savings.'
    },
 
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              Our Core Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose GreenCity AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform urban management with cutting-edge technology designed for sustainable, data-driven cities
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 p-3 w-fit rounded-xl bg-primary/10 ring-2 ring-primary/20 group-hover:ring-primary/40 group-hover:scale-110 transition-all">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}