import { AlertTriangle, TrendingDown, Database, Target } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export function ProblemStatement() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Traffic Congestion',
      description: 'Dynamic AI routing reduces gridlock and emissions'
    },
    {
      icon: TrendingDown,
      title: 'Air Pollution',
      description: 'Continuous monitoring improves air quality'
    },
    {
      icon: Database,
      title: 'Waste Management',
      description: 'Smart tracking optimizes collection efficiency'
    },
    {
      icon: Target,
      title: 'Urban Heat & Floods',
      description: 'Predictive modeling prevents environmental hazards'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Problem Overview */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              The Urban Challenge
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Rapid urbanization has created an urgent need for smarter, more sustainable city management. 
              Traditional systems lack the real-time, data-driven intelligence required to tackle evolving problems effectively.
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card 
                key={challenge.title}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-destructive/10 ring-2 ring-destructive/20 group-hover:ring-destructive/40 transition-all flex-shrink-0">
                      <challenge.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{challenge.title}</h3>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Solution Statement */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-3xl shadow-lg">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Our Solution</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                UrbanSphere bridges technology and sustainability to make cities smarter and greener. By uniting IoT sensors, real-time environmental data, and predictive AI, UrbanSphere empowers communities to manage waste efficiently, reduce traffic congestion, improve air quality, and optimize energy use — creating cities that are cleaner, connected, and resilient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
