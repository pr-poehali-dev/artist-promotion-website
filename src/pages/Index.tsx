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
      name: "АРИНА",
      genre: "Электронный поп",
      story: "Мы помогли АРИНЕ вырасти с 10K до 500K подписчиков в Instagram за 5 месяцев",
      metrics: ["↑ 800% вовлеченности", "3 вирусных видео в TikTok (10М+ просмотров)", "Попадание в редакционные плейлисты Spotify"],
      beforeFollowers: "10.2K",
      afterFollowers: "502.8K",
      beforeLikes: "2.1K средний",
      afterLikes: "45.7K средний",
      duration: "5 месяцев",
      platforms: ["TikTok", "Instagram", "Spotify"]
    },
    {
      name: "НЕОН ВОЛНЫ",
      genre: "Синтвейв",
      story: "Превратили НЕОН ВОЛНЫ в вирусную сенсацию на всех платформах",
      metrics: ["↑ 1200% месячных слушателей", "Попадание в 15 крупных плейлистов", "Сделка с крупной электронной компанией"],
      beforeFollowers: "5.8K",
      afterFollowers: "284.6K",
      beforeLikes: "890 средний",
      afterLikes: "32.4K средний",
      duration: "4 месяца",
      platforms: ["Spotify", "Instagram", "TikTok"]
    },
    {
      name: "ЛУНА БИТЫ",
      genre: "Лоу-фай хип-хоп",
      story: "Превратили ЛУНА БИТЫ из домашнего продюсера в стриминговую сенсацию",
      metrics: ["↑ 950% прослушиваний Spotify", "2М+ просмотров видео TikTok", "Коллаборации с крупными артистами"],
      beforeFollowers: "3.2K",
      afterFollowers: "197.5K",
      beforeLikes: "450 средний",
      afterLikes: "28.9K средний",
      duration: "6 месяцев",
      platforms: ["Spotify", "TikTok", "Instagram"]
    }
  ];

  const services = [
    {
      title: "Рост в соцсетях",
      description: "Стратегический контент и развитие аудитории",
      icon: "TrendingUp"
    },
    {
      title: "Контент-стратегия",
      description: "Создание вирусного контента и планирование",
      icon: "Zap"
    },
    {
      title: "Продвижение в плейлистах",
      description: "Связи с редакторами и кураторами",
      icon: "Music"
    },
    {
      title: "Бренд-партнерства",
      description: "Монетизация и возможности коллабораций",
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
            <span className="gradient-text">От скрытого таланта</span>
            <br />
            <span className="text-foreground">к хедлайнерам</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы помогаем музыкантам увеличить аудиторию и популярность в TikTok, Instagram и Spotify
          </p>
          
          <Button size="lg" className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
            Стать популярным
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Истории успеха</h2>
            <p className="text-xl text-muted-foreground">Реальные артисты, реальные результаты, реальный рост</p>
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
                        <span className="text-sm text-muted-foreground">Длительность кампании</span>
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
                        <h4 className="text-center font-semibold text-destructive">До</h4>
                        <div className="bg-muted/20 rounded-2xl p-4 border border-muted/50">
                          <div className="bg-background rounded-xl p-4 space-y-2">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 bg-muted rounded-full"></div>
                              <div className="text-sm font-medium">{currentArtist.name.toLowerCase()}</div>
                            </div>
                            <div className="text-lg font-bold">{currentArtist.beforeFollowers}</div>
                            <div className="text-xs text-muted-foreground">подписчиков</div>
                            <div className="text-sm">{currentArtist.beforeLikes}</div>
                            <div className="text-xs text-muted-foreground">сред. лайки</div>
                          </div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="space-y-3">
                        <h4 className="text-center font-semibold text-primary">После</h4>
                        <div className="bg-primary/10 rounded-2xl p-4 border border-primary/30">
                          <div className="bg-background rounded-xl p-4 space-y-2">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 bg-primary rounded-full"></div>
                              <div className="text-sm font-medium">{currentArtist.name.toLowerCase()}</div>
                              <Icon name="BadgeCheck" className="text-primary" size={16} />
                            </div>
                            <div className="text-lg font-bold text-primary">{currentArtist.afterFollowers}</div>
                            <div className="text-xs text-muted-foreground">подписчиков</div>
                            <div className="text-sm text-primary">{currentArtist.afterLikes}</div>
                            <div className="text-xs text-muted-foreground">сред. лайки</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                      <Icon name="ExternalLink" className="mr-2" size={16} />
                      Смотреть полный кейс
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
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Все необходимое для развития музыкальной карьеры</p>
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
          <h3 className="text-2xl font-semibold mb-8">Нам доверяют артисты на всех крупных платформах</h3>
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
            <h2 className="text-4xl font-bold mb-4">Готовы к росту? Давайте поговорим.</h2>
            <p className="text-xl text-muted-foreground">Расскажите нам о своей музыке и давайте создадим вашу историю успеха</p>
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше творческое имя" className="bg-background/50 border-border/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Жанр</label>
                    <Input placeholder="Ваш музыкальный жанр" className="bg-background/50 border-border/50" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Ссылка на соцсети</label>
                  <Input placeholder="Ссылка на Instagram, TikTok или Spotify" className="bg-background/50 border-border/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших целях и текущей аудитории..."
                    rows={4}
                    className="bg-background/50 border-border/50"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                  Начать сотрудничество
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