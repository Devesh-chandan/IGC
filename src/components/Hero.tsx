import { Building2, Leaf, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            AI-Powered Urban Sustainability
          </div> */}

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              UrbanSphere
            </span>
            <br />
            <span className="text-foreground">Making Cities Smarter, Cleaner, and More Alives</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We turn city data into action. From managing waste and easing traffic to predicting air quality and optimizing energy use — UrbanSphere helps communities breathe easier and move smarter. Real-time insights. Real impact. A cleaner, more connected urban future.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-10 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Building2 className="w-5 h-5 mr-2" />
              Explore Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Leaf className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div> */}
          <div className="flex flex-wrap gap-10 justify-center pt-4">
  <Button 
    size="lg" 
    className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all w-56"
    onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
  >
    Explore Dashboard
  </Button>

  <Button 
    size="lg" 
    variant="outline" 
    className="text-lg px-8 py-6 border-2 w-56"
    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
  >
    Learn More
  </Button>
</div>



          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            {[
              { label: 'CO₂ Reduced', value: '45%', icon: Leaf },
              { label: 'Energy Saved', value: '32%', icon: Sparkles },
              { label: 'Cities Using', value: '127', icon: Building2 },
              { label: 'Sensors Active', value: '50K+', icon: Sparkles }
            ].map((stat) => (
              <div key={stat.label} className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
