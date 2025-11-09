import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'

interface ModuleCardProps {
  title: string
  description: string
  icon: LucideIcon
  status: 'active' | 'warning' | 'critical' | 'optimal'
  metrics: { label: string; value: string }[]
  action?: () => void
  className?: string
}

export function ModuleCard({ title, description, icon: Icon, status, metrics, action, className }: ModuleCardProps) {
  const statusColors = {
    active: 'bg-primary text-primary-foreground',
    warning: 'bg-yellow-500 text-white',
    critical: 'bg-destructive text-destructive-foreground',
    optimal: 'bg-primary text-primary-foreground'
  }

  const statusLabels = {
    active: 'Active',
    warning: 'Warning',
    critical: 'Critical',
    optimal: 'Optimal'
  }

  return (
    <Card className={cn(
      'group hover:shadow-2xl transition-all duration-300 border-border/50 overflow-hidden relative',
      className
    )}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <div className={cn(
            'p-3 rounded-xl bg-primary/10 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all',
            'group-hover:scale-110 group-hover:rotate-3'
          )}>
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <Badge className={statusColors[status]}>
            {statusLabels[status]}
          </Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
              <div className="text-lg font-bold text-foreground">{metric.value}</div>
            </div>
          ))}
        </div>
        
        {action && (
          <Button 
            className="w-full" 
            variant="outline"
            onClick={action}
          >
            View Details
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
