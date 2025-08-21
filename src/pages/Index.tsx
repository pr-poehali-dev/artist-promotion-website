import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const artists = [
    {
      name: "АРИНА",
      genre: "Электронный поп",
      description: "Молодая артистка из Санкт-Петербурга с уникальным звучанием, сочетающим электронную музыку с поп-мелодиями. Начинала как независимый исполнитель с небольшой аудиторией.",
      work: "Мы разработали комплексную стратегию продвижения, включающую создание вирусного контента для TikTok, профессиональную съемку клипов и настройку таргетированной рекламы. Результат — взрывной рост аудитории и попадание в топ-плейлисты Spotify.",
      achievements: ["500K+ подписчиков в Instagram", "3 вирусных видео в TikTok", "Попадание в редакционные плейлисты Spotify"],
      duration: "5 месяцев",
      platforms: ["TikTok", "Instagram", "Spotify"],
      image: "img/2308deda-68a1-4fb4-8bde-9ac7cd017234.jpg"
    },
    {
      name: "НЕОН ВОЛНЫ",
      genre: "Синтвейв",
      description: "Продюсер из Москвы, создающий атмосферную синтвейв музыку в стиле 80-х. Его треки переносят слушателей в мир неоновых городов и ретро-футуризма.",
      work: "Создали уникальную визуальную концепцию, разработали серию ретро-клипов и настроили продвижение через специализированные синтвейв сообщества. Организовали коллаборации с популярными каналами YouTube.",
      achievements: ["280K+ месячных слушателей", "15 крупных плейлистов", "Сделка с лейблом"],
      duration: "4 месяца",
      platforms: ["Spotify", "Instagram", "TikTok"],
      image: "img/53f12ed6-6bf8-4c73-8af5-74aa8a33e94b.jpg"
    },
    {
      name: "ЛУНА БИТЫ",
      genre: "Лоу-фай хип-хоп",
      description: "Талантливый битмейкер, создающий расслабляющие лоу-фай биты для учебы и работы. Начинал как домашний продюсер с минимальным оборудованием.",
      work: "Помогли оформить узнаваемый визуальный стиль, создали серию лоу-фай плейлистов и организовали размещение треков в популярных study-каналах. Настроили автоматическое продвижение через алгоритмы Spotify.",
      achievements: ["200K+ прослушиваний в месяц", "Коллаборации с лейблами", "Постоянный доход от стримингов"],
      duration: "6 месяцев",
      platforms: ["Spotify", "TikTok", "Instagram"],
      image: "img/7af74448-01c6-4728-ad1f-68dbdd6ef41c.jpg"
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

      {/* Artist Case Studies */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Истории успеха</h2>
            <p className="text-xl text-muted-foreground">Реальные артисты, реальные результаты, реальный рост</p>
          </div>
          
          <div className="space-y-12">
            {artists.map((artist, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">{artist.name}</h3>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                        {artist.genre}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">О Артисте</h4>
                        <p className="text-muted-foreground">{artist.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Наша Работа</h4>
                        <p className="text-muted-foreground">{artist.work}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-primary">Достижения</h4>
                      {artist.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={16} />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {artist.platforms.map((platform, idx) => (
                          <Badge key={idx} variant="outline" className="border-primary/30 text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={14} />
                        <span>{artist.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white">
                          <div className="text-sm opacity-90">{artist.genre}</div>
                          <div className="font-bold text-lg">{artist.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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