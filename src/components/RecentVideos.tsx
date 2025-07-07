
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Eye, ThumbsUp, MessageCircle } from "lucide-react"

const recentVideos = [
  {
    title: "How to Create Viral YouTube Shorts",
    thumbnail: "/placeholder.svg",
    views: "45.2K",
    likes: "2.1K",
    comments: "156",
    status: "Published",
    publishedAt: "2 days ago"
  },
  {
    title: "AI Animation Tutorial for Beginners",
    thumbnail: "/placeholder.svg",
    views: "28.7K",
    likes: "1.8K",
    comments: "89",
    status: "Published",
    publishedAt: "5 days ago"
  },
  {
    title: "Drawing Techniques That Get Views",
    thumbnail: "/placeholder.svg",
    views: "67.1K",
    likes: "3.2K",
    comments: "234",
    status: "Published",
    publishedAt: "1 week ago"
  }
]

export function RecentVideos() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="h-5 w-5 text-youtube-red" />
          Recent Videos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentVideos.map((video, index) => (
            <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
              <div className="w-24 h-16 bg-gradient-purple-blue rounded-lg flex items-center justify-center">
                <Play className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground line-clamp-2">{video.title}</h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {video.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-3 w-3" />
                    {video.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {video.comments}
                  </div>
                  <span>• {video.publishedAt}</span>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                {video.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
