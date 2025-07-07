
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  change: string
  trend: "up" | "down" | "neutral"
  icon: LucideIcon
  gradient?: string
}

export function StatsCard({ title, value, change, trend, icon: Icon, gradient = "bg-gradient-purple-blue" }: StatsCardProps) {
  const trendColor = trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-yellow-500"
  const trendSymbol = trend === "up" ? "↑" : trend === "down" ? "↓" : "→"

  return (
    <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className={`absolute inset-0 opacity-5 ${gradient}`} />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${gradient}`}>
          <Icon className="h-4 w-4 text-white" />
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <p className={`text-xs ${trendColor} font-medium flex items-center gap-1`}>
          <span>{trendSymbol}</span>
          {change} from last period
        </p>
      </CardContent>
    </Card>
  )
}
