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
      name: "АВАНТЮРИСТ",
      genre: "продюсер/музыкант/блогер",
      description: "Самое сложное в любой работе - СДЕЛАТЬ ДЛЯ СЕБЯ. Кейс «АВАНТЮРИСТА» показывает насколько далеко можно зайти, имея желание и нужные знания",
      achievements: ["2,44М YouTube", "2,4М TikTok", "5М+ прослушиваний"],
      duration: "5 месяцев",
      platforms: [
        { name: "YouTube", url: "https://www.youtube.com/@avanturisttt" },
        { name: "Instagram", url: "https://www.instagram.com/avan.turistt?igsh=ZG56d2M2M3ByOGNw" }
      ],
      image: "https://cdn.poehali.dev/files/2bd7684e-5ece-4e8d-b7c8-9cf964090753.jpg"
    },
    {
      name: "NETOXIC",
      genre: "Музыкант",
      work: "Создали уникальную визуальную концепцию, разработали серию роликов и помогли продвинуть трек через соц-сети.",
      achievements: ["300К+ просмотров", "70К в Instagram", "10000+ слушателей"],
      duration: "4 месяца",
      platforms: [
        { name: "ЯМ", url: "https://music.yandex.ru/artist/12356096?utm_medium=copy_link&ref_id=f0cb5a16-eda4-49f4-a18b-86de6b3acdd4" },
        { name: "Instagram", url: "https://www.instagram.com/natasha_milnichenko?igsh=MWZ5MXBxZWJ4OXM5Ng==" }
      ],
      image: "https://cdn.poehali.dev/files/a305af05-ec8b-4f4c-a9b6-fa88a015b308.jpg"
    },
    {
      name: "АНДРЕЙ КУКЛИН",
      genre: "Музыкант",
      work: "Сделали самым медийным слепым музыкантом в России. Научили продвигать музыку через вертикальный контент.",
      achievements: ["370К+ просмотров", "45К в Instagram", "330К+ слушателей"],
      duration: "6 месяцев",
      platforms: [
        { name: "ЯМ", url: "https://music.yandex.ru/artist/10817574" },
        { name: "Instagram", url: "https://www.instagram.com/andrey_kuklin__?igsh=MXB1Y2phZzYxZjFmYw==" }
      ],
      image: "https://cdn.poehali.dev/files/d37ad79a-c467-4998-8677-4fda38748a1e.jpg"
    },
    {
      name: "МотоТрейд",
      genre: "Компания",
      work: "Работаем не только с артистами, но и с бизнесом. Помогли найти свой формат роликов, благодаря чему увеличили узнаваемость компании.",
      achievements: ["3М+ просмотров", "14К+ YouTube"],
      duration: "3 месяца",
      platforms: [
        { name: "YouTube", url: "https://www.youtube.com/@mototradevl/shorts" },
        { name: "Instagram", url: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbGdodWVRQVVCWkgybXhZaTNueFNrU1EtSHUzd3xBQ3Jtc0ttZHIwenl4bmJjWWFjZGIzNDB0MjRrQlViWjl1SkM0T1BGTmNyNGprZWlDV1F0Z0V3ZDNFQlJJZUpGUW83TjZyaTZna1JGMFFtYXVzWVhRbEdKSW43TFp4MDcyT0M1aFlKYTJzcjhHcnR1LXhYRjh0MA&q=https%3A%2F%2Fwww.instagram.com%2Fjapantrade_moto" }
      ],
      image: "https://cdn.poehali.dev/files/dd99aac0-2ce0-4a73-a941-eb0ccdc25eb7.jpg"
    },
    {
      name: "Лиза Шульц",
      genre: "музыкант",
      work: "Совместная работа над образом и выбор никнейма. За 1 месяц работы с нами сделала +100к просмотров.",
      achievements: ["100К+ просмотров за месяц", "Новый образ и никнейм", "Рост узнаваемости"],
      platforms: [
        { name: "Instagram", url: "https://www.instagram.com/liza__schultz?igsh=MXBiM2l5M3NtZGZlOQ%3D%3D&utm_source=qr" },
        { name: "ЯМ", url: "https://music.yandex.ru/artist/23694559?utm_medium=copy_link" }
      ],
      image: "https://cdn.poehali.dev/files/ebd19f54-04de-45aa-b96c-21acc27a86c1.jpg"
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
      title: "Создание Хита",
      description: "Разработка трека с потенциалом стать хитом",
      icon: "Music"
    },
    {
      title: "Бренд-партнерства",
      description: "Монетизация и возможности коллабораций",
      icon: "Handshake"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 sound-wave opacity-10 animate-gradient"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
        
        <div className={`text-center max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">От скрытого таланта</span>
            <br />
            <span className="text-foreground">к хедлайнерам</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto px-2">
            Мы помогаем музыкантам увеличить аудиторию и популярность в TikTok, Instagram, YouTube, ВК и Яндекс Музыке
          </p>
          
          <a
            href="https://t.me/avan_muzprod_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
              Стать популярным
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </a>
          
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
      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Истории успеха</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-2">Реальные артисты, реальные результаты, реальный рост</p>
          </div>
          
          <div className="space-y-12">
            {artists.map((artist, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold">{artist.name}</h3>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                        {artist.genre}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {artist.description && (
                        <div>
                          <h4 className="font-semibold mb-2 text-primary">
                            {artist.name === "АВАНТЮРИСТ" ? "Обо Мне" : "О Артисте"}
                          </h4>
                          <p className="text-muted-foreground">{artist.description}</p>
                        </div>
                      )}
                      
                      {artist.work && artist.name !== "АВАНТЮРИСТ" && artist.name !== "Лиза Шульц" && (
                        <div>
                          <h4 className="font-semibold mb-2 text-primary">Наша Работа</h4>
                          <p className="text-muted-foreground">{artist.work}</p>
                        </div>
                      )}
                      
                      {artist.work && artist.name === "Лиза Шульц" && (
                        <div>
                          <h4 className="font-semibold mb-2 text-primary">Наша Работа</h4>
                          <p className="text-muted-foreground">{artist.work}</p>
                        </div>
                      )}
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
                    
                    <div className="flex gap-2 flex-wrap">
                      {artist.platforms.map((platform, idx) => (
                        typeof platform === 'string' ? (
                          <Badge key={idx} variant="outline" className="border-primary/30 text-xs">
                            {platform}
                          </Badge>
                        ) : (
                          <a
                            key={idx}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Badge variant="outline" className="border-primary/30 text-xs hover:bg-primary/10 transition-colors cursor-pointer">
                              {platform.name}
                            </Badge>
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative aspect-square rounded-lg overflow-hidden max-h-80 sm:max-h-none">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-2">Все необходимое для развития музыкальной карьеры</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 px-2">Нам доверяют артисты на всех крупных платформах</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-60">
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готовы к росту? Давайте поговорим.</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-2">Расскажите нам о своей музыке и давайте создадим вашу историю успеха</p>
          </div>

          <div className="text-center">
            <a
              href="https://web.telegram.org/a/#7072952092"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8">
                Начать сотрудничество
                <Icon name="Send" className="ml-2" size={16} />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;