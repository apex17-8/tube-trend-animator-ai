
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Youtube, Link, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ChannelConnector() {
  const [channelUrl, setChannelUrl] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleConnect = async () => {
    if (!channelUrl || !apiKey) {
      toast({
        title: "Missing Information",
        description: "Please provide both channel URL and API key",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    
    // Simulate API connection
    setTimeout(() => {
      setIsConnected(true)
      setIsLoading(false)
      toast({
        title: "Channel Connected!",
        description: "Your YouTube channel has been successfully connected.",
      })
    }, 2000)
  }

  if (isConnected) {
    return (
      <Card className="bg-gradient-success border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center gap-3 text-white">
            <CheckCircle className="h-8 w-8" />
            <div>
              <h3 className="text-lg font-semibold">Channel Connected!</h3>
              <p className="text-green-100">AI analysis is now active</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Youtube className="h-5 w-5 text-youtube-red" />
          Connect Your YouTube Channel
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="channel-url">YouTube Channel URL</Label>
          <Input
            id="channel-url"
            placeholder="https://youtube.com/@yourchannel"
            value={channelUrl}
            onChange={(e) => setChannelUrl(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="api-key">YouTube Data API Key</Label>
          <Input
            id="api-key"
            type="password"
            placeholder="Enter your YouTube Data API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Get your API key from Google Cloud Console
          </p>
        </div>

        <Button 
          onClick={handleConnect} 
          disabled={isLoading}
          className="w-full bg-gradient-youtube hover:opacity-90"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Connecting...
            </>
          ) : (
            <>
              <Link className="h-4 w-4 mr-2" />
              Connect Channel
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
