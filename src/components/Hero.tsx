import { Building2, Leaf, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import { TextureLoader } from 'three'

function Globe() {
  // Make sure you have the image saved as /public/earth-map.jpg
  const texture = useLoader(TextureLoader, '/earth-map.jpg')

  return (
    <Sphere args={[2, 64, 64]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* 3D Canvas (on the bottom layer, z-0) */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} />
          <Globe />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
          />
        </Canvas>
      </div>

      {/* FIXED GRADIENT OVERLAY (Layer z-10)
        Fades from transparent at the top to 80% black at the bottom.
        This provides contrast for the text in BOTH light and dark modes.
      */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Your content (on the top layer, z-20) */}
      <div className="container relative z-20 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight
                         drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
            <span className="bg-gradient-to-r from-primary via-primary to-accent
                             bg-clip-text text-transparent">
              UrbanSphere
            </span>
            <br />
            <span className="text-foreground">
              Making Cities Smarter, Cleaner, and More Alive
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed
                        drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            We turn city data into action. From managing waste and easing traffic to predicting air quality and optimizing energy use — UrbanSphere helps communities breathe easier and move smarter. Real-time insights. Real impact. A cleaner, more connected urban future.
          </p>

          <div className="flex flex-wrap gap-10 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all w-56"
              onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Dashboard
            </Button>

            {/* UPDATED BUTTON STYLE */}
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 w-56 hover:shadow-xl transition-all
                         hover:bg-background/20 hover:text-foreground backdrop-blur-sm"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator (on top layer, z-20) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}