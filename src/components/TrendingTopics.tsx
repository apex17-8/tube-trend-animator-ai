
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, Eye } from "lucide-react"

const trendingData = [
  {
    topic: "AI Animation Tutorials",
    views: "2.4M",
    timeframe: "24h",
    difficulty: "Medium",
    potential: "High"
  },
  {
    topic: "Short Form Content Tips",
    views: "1.8M",
    timeframe: "12h",
    difficulty: "Easy",
    potential: "Very High"
  },
  {
    topic: "Drawing Techniques 2024",
    views: "1.2M",
    timeframe: "6h",
    difficulty: "Hard",
    potential: "Medium"
  },
  {
    topic: "YouTube Shorts Strategy",
    views: "950K",
    timeframe: "18h",
    difficulty: "Easy",
    potential: "High"
  },
  {
    topic: "Digital Art Trends",
    views: "750K",
    timeframe: "3h",
    difficulty: "Medium",
    potential: "High"
  }
]

export function TrendingTopics() {
  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case "Very High": return "bg-green-100 text-green-800 border-green-200"
      case "High": return "bg-blue-100 text-blue-800 border-blue-200"
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800"
      case "Medium": return "bg-yellow-100 text-yellow-800"
      case "Hard": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-youtube-red" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingData.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{item.topic}</h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {item.views} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {item.timeframe}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Badge className={getPotentialColor(item.potential)}>
                  {item.potential} Potential
                </Badge>
                <Badge variant="outline" className={getDifficultyColor(item.difficulty)}>
                  {item.difficulty}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
