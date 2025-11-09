import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
  trend: number[]
  className?: string
}

export function MetricCard({ title, value, change, changeType, icon: Icon, trend, className }: MetricCardProps) {
  const changeColor = {
    positive: 'text-primary',
    negative: 'text-destructive',
    neutral: 'text-muted-foreground'
  }[changeType]

  const bgColor = {
    positive: 'bg-primary/10',
    negative: 'bg-destructive/10',
    neutral: 'bg-muted'
  }[changeType]

  return (
    <Card className={cn('hover:shadow-lg transition-all duration-300 border-border/50', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn('p-2 rounded-lg', bgColor)}>
          <Icon className="w-4 h-4 text-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
        <div className="flex items-center justify-between">
          <p className={cn('text-sm font-medium', changeColor)}>
            {change}
          </p>
          <div className="flex items-end gap-0.5 h-8">
            {trend.map((height, i) => (
              <div
                key={i}
                className={cn('w-1 rounded-full transition-all', bgColor)}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
