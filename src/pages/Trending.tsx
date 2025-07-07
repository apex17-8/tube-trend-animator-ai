
import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, Eye, Plus, Sparkles } from "lucide-react"

const trendingData = [
  {
    topic: "AI Animation Tutorials",
    category: "Education",
    views: "2.4M",
    growth: "+45%",
    timeframe: "24h",
    difficulty: "Medium",
    potential: "Very High",
    keywords: ["AI", "Animation", "Tutorial", "Beginner"],
    description: "Step-by-step guides for creating AI-powered animations"
  },
  {
    topic: "Short Form Content Tips",
    category: "Tips & Tricks",
    views: "1.8M",
    growth: "+32%",
    timeframe: "12h",
    difficulty: "Easy",
    potential: "Very High",
    keywords: ["Shorts", "Content", "Tips", "Strategy"],
    description: "Proven strategies for viral short-form content"
  },
  {
    topic: "Drawing Techniques 2024",
    category: "Art",
    views: "1.2M",
    growth: "+28%",
    timeframe: "6h",
    difficulty: "Hard",
    potential: "Medium",
    keywords: ["Drawing", "Art", "Techniques", "2024"],
    description: "Latest drawing techniques and digital art trends"
  }
]

const Trending = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Trending Analysis</h1>
          <p className="text-muted-foreground">
            Real-time trending topics and content opportunities
          </p>
        </div>

        <div className="grid gap-6">
          {trendingData.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/40 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{item.topic}</CardTitle>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <Badge variant="outline" className="bg-purple-100 text-purple-800">
                    {item.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold">{item.views}</span>
                    <span className="text-green-600 text-sm">{item.growth}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Trending for {item.timeframe}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <Badge className={
                      item.potential === "Very High" ? "bg-green-100 text-green-800" :
                      item.potential === "High" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }>
                      {item.potential} Potential
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline">{item.difficulty}</Badge>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.keywords.map((keyword, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      #{keyword}
                    </Badge>
                  ))}
                </div>
                
                <Button className="bg-gradient-youtube hover:opacity-90">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Content for This Topic
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Trending
