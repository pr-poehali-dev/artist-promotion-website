import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const artists = [
    {
      name: "ARIA",
      genre: "Electronic Pop",
      story: "We helped ARIA grow from 10K to 500K Instagram followers in 5 months",
      metrics: ["↑ 800% engagement", "3 viral TikTok videos (10M+ views)", "Spotify editorial playlist placement"],
      beforeFollowers: "10.2K",
      afterFollowers: "502.8K",
      beforeLikes: "2.1K avg",
      afterLikes: "45.7K avg",
      duration: "5 months",
      platforms: ["TikTok", "Instagram", "Spotify"]
    },
    {
      name: "NEON WAVES",
      genre: "Synthwave",
      story: "Transformed NEON WAVES into a viral sensation across all platforms",
      metrics: ["↑ 1200% monthly listeners", "Featured on 15 major playlists", "Brand deal with major electronics company"],
      beforeFollowers: "5.8K",
      afterFollowers: "284.6K",
      beforeLikes: "890 avg",
      afterLikes: "32.4K avg",
      duration: "4 months",
      platforms: ["Spotify", "Instagram", "TikTok"]
    },
    {
      name: "LUNA BEATS",
      genre: "Lo-Fi Hip Hop",
      story: "Built LUNA BEATS from bedroom producer to streaming sensation",
      metrics: ["↑ 950% Spotify streams", "2M+ TikTok video views", "Collaboration with major artists"],
      beforeFollowers: "3.2K",
      afterFollowers: "197.5K",
      beforeLikes: "450 avg",
      afterLikes: "28.9K avg",
      duration: "6 months",
      platforms: ["Spotify", "TikTok", "Instagram"]
    }
  ];

  const services = [
    {
      title: "Social Media Growth",
      description: "Strategic content and audience building",
      icon: "TrendingUp"
    },
    {
      title: "Content Strategy",
      description: "Viral content creation and planning",
      icon: "Zap"
    },
    {
      title: "Playlist Promotion",
      description: "Editorial and curator connections",
      icon: "Music"
    },
    {
      title: "Brand Partnerships",
      description: "Monetization and collaboration opportunities",
      icon: "Handshake"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % artists.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + artists.length) % artists.length);
  };

  const currentArtist = artists[currentSlide];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 sound-wave opacity-10 animate-gradient"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
        
        <div className={`text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">From Hidden Talent</span>
            <br />
            <span className="text-foreground">to Headline Acts</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We help musicians grow their audience and visibility across TikTok, Instagram, and Spotify
          </p>
          
          <Button size="lg" className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
            Get Discovered
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          
          {/* Sound Wave Visualization */}
          <div className="mt-16 flex items-center justify-center space-x-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-primary/60 rounded-full animate-pulse-slow"
                style={{
                  width: '4px',
                  height: `${Math.random() * 40 + 10}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Case Study Carousel */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real artists, real results, real growth</p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Card className="bg-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Artist Info */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold">{currentArtist.name}</h3>
                        <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                          {currentArtist.genre}
                        </Badge>
                      </div>
                      <p className="text-lg text-muted-foreground">{currentArtist.story}</p>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-3">
                      {currentArtist.metrics.map((metric, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Icon name="TrendingUp" className="text-primary" size={16} />
                          <span className="text-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Platform Badges */}
                    <div className="flex gap-3">
                      {currentArtist.platforms.map((platform) => (
                        <Badge key={platform} variant="outline" className="border-primary/50 text-primary">
                          {platform}
                        </Badge>
                      ))}
                    </div>

                    {/* Timeline */}
                    <div className="bg-muted/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Clock" className="text-accent" size={16} />
                        <span className="text-sm text-muted-foreground">Campaign Duration</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-full"></div>
                      </div>
                      <p className="text-right text-sm mt-1 text-primary font-medium">{currentArtist.duration}</p>
                    </div>
                  </div>

                  {/* Before/After Screenshots */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Before */}
                      <div className="space-y-3">
                        <h4 className="text-center font-semibold text-destructive">Before</h4>
                        <div className="bg-muted/20 rounded-2xl p-4 border border-muted/50">
                          <div className="bg-background rounded-xl p-4 space-y-2">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 bg-muted rounded-full"></div>
                              <div className="text-sm font-medium">{currentArtist.name.toLowerCase()}</div>
                            </div>
                            <div className="text-lg font-bold">{currentArtist.beforeFollowers}</div>
                            <div className="text-xs text-muted-foreground">followers</div>
                            <div className="text-sm">{currentArtist.beforeLikes}</div>
                            <div className="text-xs text-muted-foreground">avg likes</div>
                          </div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="space-y-3">
                        <h4 className="text-center font-semibold text-primary">After</h4>
                        <div className="bg-primary/10 rounded-2xl p-4 border border-primary/30">
                          <div className="bg-background rounded-xl p-4 space-y-2">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 bg-primary rounded-full"></div>
                              <div className="text-sm font-medium">{currentArtist.name.toLowerCase()}</div>
                              <Icon name="BadgeCheck" className="text-primary" size={16} />
                            </div>
                            <div className="text-lg font-bold text-primary">{currentArtist.afterFollowers}</div>
                            <div className="text-xs text-muted-foreground">followers</div>
                            <div className="text-sm text-primary">{currentArtist.afterLikes}</div>
                            <div className="text-xs text-muted-foreground">avg likes</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                      <Icon name="ExternalLink" className="mr-2" size={16} />
                      View Full Case Study
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevSlide} className="border-primary/50 hover:bg-primary/10">
                <Icon name="ChevronLeft" size={20} />
              </Button>
              
              <div className="flex items-center gap-2">
                {artists.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-primary' : 'bg-muted'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              
              <Button variant="outline" size="icon" onClick={nextSlide} className="border-primary/50 hover:bg-primary/10">
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Everything you need to grow your music career</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon} className="text-primary" size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-8">Trusted by artists on all major platforms</h3>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1DB954] rounded-full"></div>
              <span className="font-medium">Spotify</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="font-medium">Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <span className="font-medium">TikTok</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to grow? Let's talk.</h2>
            <p className="text-xl text-muted-foreground">Tell us about your music and let's create your success story</p>
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your artist name" className="bg-background/50 border-border/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Genre</label>
                    <Input placeholder="Your music genre" className="bg-background/50 border-border/50" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Social Link</label>
                  <Input placeholder="Instagram, TikTok, or Spotify link" className="bg-background/50 border-border/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your goals and current following..."
                    rows={4}
                    className="bg-background/50 border-border/50"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                  Get Started
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;