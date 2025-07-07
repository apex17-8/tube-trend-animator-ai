
import { Layout } from "@/components/Layout"
import { StatsCard } from "@/components/StatsCard"
import { TrendingTopics } from "@/components/TrendingTopics"
import { RecentVideos } from "@/components/RecentVideos"
import { ChannelConnector } from "@/components/ChannelConnector"
import { 
  Users, 
  Eye, 
  TrendingUp, 
  Clock,
  Target,
  PlayCircle
} from "lucide-react"

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            AI-powered YouTube channel management and content optimization
          </p>
        </div>

        {/* Channel Connection */}
        <ChannelConnector />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Subscribers"
            value="12.4K"
            change="+12.5%"
            trend="up"
            icon={Users}
            gradient="bg-gradient-success"
          />
          <StatsCard
            title="Monthly Views"
            value="1.2M"
            change="+8.3%"
            trend="up"
            icon={Eye}
            gradient="bg-gradient-purple-blue"
          />
          <StatsCard
            title="Engagement Rate"
            value="4.8%"
            change="+2.1%"
            trend="up"
            icon={TrendingUp}
            gradient="bg-gradient-youtube"
          />
          <StatsCard
            title="Avg. Watch Time"
            value="3:42"
            change="-5.2%"
            trend="down"
            icon={Clock}
            gradient="bg-gradient-warning"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TrendingTopics />
          <RecentVideos />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-purple-blue p-3 rounded-lg group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Content Ideas</h3>
                <p className="text-sm text-muted-foreground">AI-generated video concepts</p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-youtube p-3 rounded-lg group-hover:scale-110 transition-transform">
                <PlayCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Create Short</h3>
                <p className="text-sm text-muted-foreground">Generate animated shorts</p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-success p-3 rounded-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Optimize SEO</h3>
                <p className="text-sm text-muted-foreground">Improve discoverability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
