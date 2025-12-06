import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const allServices = [
  {
    icon: 'Scale',
    title: 'Гражданское право',
    description: 'Защита прав граждан, договорное право',
    details: [
      'Взыскание задолженностей',
      'Споры о собственности',
      'Защита чести и достоинства',
      'Договорное право',
      'Наследственные споры'
    ]
  },
  {
    icon: 'Building2',
    title: 'Корпоративное право',
    description: 'Регистрация бизнеса, корпоративные споры',
    details: [
      'Регистрация ООО и АО',
      'Корпоративные споры',
      'M&A сделки',
      'Реорганизация и ликвидация',
      'Защита прав акционеров'
    ]
  },
  {
    icon: 'FileText',
    title: 'Налоговое право',
    description: 'Налоговое планирование, споры с ФНС',
    details: [
      'Налоговое планирование',
      'Споры с ФНС',
      'Обжалование налоговых проверок',
      'Возврат незаконных доначислений',
      'Налоговый аудит'
    ]
  },
  {
    icon: 'Users',
    title: 'Трудовое право',
    description: 'Трудовые споры, защита прав',
    details: [
      'Восстановление на работе',
      'Взыскание зарплаты',
      'Оспаривание увольнения',
      'Защита от дискриминации',
      'Трудовые договоры'
    ]
  },
  {
    icon: 'Home',
    title: 'Недвижимость',
    description: 'Сделки с недвижимостью, жилищные споры',
    details: [
      'Купля-продажа недвижимости',
      'Оформление прав собственности',
      'Жилищные споры',
      'Признание сделок недействительными',
      'Выселение и вселение'
    ]
  },
  {
    icon: 'Shield',
    title: 'Уголовное право',
    description: 'Защита по уголовным делам',
    details: [
      'Защита в суде',
      'Обжалование приговоров',
      'Представительство на следствии',
      'Защита прав потерпевших',
      'Амнистия и помилование'
    ]
  },
  {
    icon: 'Heart',
    title: 'Семейное право',
    description: 'Разводы, алименты, раздел имущества',
    details: [
      'Расторжение брака',
      'Раздел совместного имущества',
      'Взыскание алиментов',
      'Определение места жительства ребенка',
      'Брачные договоры'
    ]
  },
  {
    icon: 'Lightbulb',
    title: 'Интеллектуальная собственность',
    description: 'Защита авторских прав, товарные знаки',
    details: [
      'Регистрация товарных знаков',
      'Защита авторских прав',
      'Патентное право',
      'Споры о нарушении ИС',
      'Лицензионные договоры'
    ]
  },
  {
    icon: 'ShoppingCart',
    title: 'Защита прав потребителей',
    description: 'Возврат товаров, компенсации',
    details: [
      'Возврат некачественного товара',
      'Взыскание компенсаций',
      'Обжалование отказов в ремонте',
      'Защита от недобросовестных продавцов',
      'Споры с услугами (туры, ремонт)'
    ]
  },
  {
    icon: 'Landmark',
    title: 'Административное право',
    description: 'Обжалование штрафов, действий властей',
    details: [
      'Обжалование штрафов ГИБДД',
      'Споры с госорганами',
      'Лишение водительских прав',
      'Миграционное право',
      'Лицензирование и разрешения'
    ]
  },
  {
    icon: 'Briefcase',
    title: 'Арбитражные споры',
    description: 'Хозяйственные споры между компаниями',
    details: [
      'Взыскание долгов с контрагентов',
      'Расторжение договоров',
      'Защита деловой репутации',
      'Взыскание убытков',
      'Исполнительное производство'
    ]
  },
  {
    icon: 'PiggyBank',
    title: 'Банкротство',
    description: 'Банкротство физлиц и юрлиц',
    details: [
      'Банкротство физических лиц',
      'Банкротство компаний',
      'Оспаривание сделок должника',
      'Включение в реестр кредиторов',
      'Защита от банкротства'
    ]
  },
  {
    icon: 'CreditCard',
    title: 'Кредитные споры',
    description: 'Споры с банками и коллекторами',
    details: [
      'Оспаривание кредитных договоров',
      'Защита от коллекторов',
      'Списание кредитных долгов',
      'Реструктуризация задолженности',
      'Обжалование действий банков'
    ]
  },
  {
    icon: 'Car',
    title: 'Автоюрист',
    description: 'ДТП, страховые споры',
    details: [
      'Взыскание ущерба после ДТП',
      'Споры со страховыми компаниями',
      'Оспаривание вины в ДТП',
      'Защита прав пешеходов',
      'Возмещение морального вреда'
    ]
  },
  {
    icon: 'Hospital',
    title: 'Медицинское право',
    description: 'Врачебные ошибки, страховые споры',
    details: [
      'Возмещение вреда от врачебных ошибок',
      'Споры с медучреждениями',
      'Обжалование отказов в лечении',
      'Защита прав пациентов',
      'Медицинское страхование'
    ]
  },
  {
    icon: 'GraduationCap',
    title: 'Образовательное право',
    description: 'Споры с учебными заведениями',
    details: [
      'Обжалование отчисления',
      'Возврат оплаты за обучение',
      'Защита прав учащихся',
      'Споры о качестве образования',
      'Лицензирование образовательных учреждений'
    ]
  },
  {
    icon: 'Globe',
    title: 'Внешнеэкономическая деятельность',
    description: 'Международные контракты, таможня',
    details: [
      'Внешнеторговые контракты',
      'Таможенные споры',
      'Международный арбитраж',
      'Валютное регулирование',
      'Защита интересов за рубежом'
    ]
  },
  {
    icon: 'Leaf',
    title: 'Экологическое право',
    description: 'Защита экологии, природопользование',
    details: [
      'Экологические правонарушения',
      'Возмещение экологического ущерба',
      'Природопользование',
      'Лицензирование экодеятельности',
      'Обжалование экоэкспертиз'
    ]
  },
  {
    icon: 'Wifi',
    title: 'Информационное право',
    description: 'Защита персональных данных, киберправо',
    details: [
      'Защита персональных данных',
      'Киберпреступления',
      'Удаление информации из интернета',
      'Защита репутации в сети',
      'Споры о доменных именах'
    ]
  },
  {
    icon: 'Award',
    title: 'Спортивное право',
    description: 'Контракты спортсменов, дисциплинарные дела',
    details: [
      'Контракты спортсменов',
      'Дисциплинарные дела',
      'Допинговые споры',
      'Трансферы и агентские договоры',
      'Споры со спортивными федерациями'
    ]
  },
  {
    icon: 'Package',
    title: 'Таможенное право',
    description: 'Таможенное оформление, споры',
    details: [
      'Таможенное оформление',
      'Обжалование решений таможни',
      'Возврат таможенных платежей',
      'Защита от контрабанды',
      'ВЭД и таможенные режимы'
    ]
  },
  {
    icon: 'Hammer',
    title: 'Строительное право',
    description: 'Договоры подряда, строительные споры',
    details: [
      'Договоры подряда',
      'Споры о качестве строительства',
      'Долевое строительство',
      'Градостроительное право',
      'Самовольное строительство'
    ]
  },
  {
    icon: 'Truck',
    title: 'Транспортное право',
    description: 'Перевозки, логистика',
    details: [
      'Договоры перевозки',
      'Утеря и повреждение груза',
      'Транспортные лицензии',
      'Логистические споры',
      'Защита прав перевозчиков'
    ]
  }
];

const portfolio = [
  {
    title: 'Корпоративный спор',
    amount: '50 млн ₽',
    description: 'Успешно защитили интересы клиента в споре о корпоративном контроле'
  },
  {
    title: 'Налоговый спор',
    amount: '120 млн ₽',
    description: 'Оспорили доначисления налоговой инспекции'
  },
  {
    title: 'Трудовой спор',
    amount: '8 млн ₽',
    description: 'Восстановили работника на работе и взыскали компенсацию'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [activeSection, setActiveSection] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof allServices[0] | null>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const getRandomServices = () => {
      const indices = Array.from({ length: allServices.length }, (_, i) => i);
      const shuffled = indices.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 8);
    };

    setVisibleServices(getRandomServices());

    const interval = setInterval(() => {
      setVisibleServices(getRandomServices());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-[3px] border-primary bg-white">
                <img 
                  src="https://cdn.poehali.dev/files/a174de34-e656-4c81-8e5d-280a3325bba2.jpg" 
                  alt="Pro Документы" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-primary">Pro Документы</span>
                <span className="text-[10px] text-muted-foreground font-medium tracking-wider">ЮРИДИЧЕСКИЕ УСЛУГИ</span>
              </div>
            </div>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Услуги', 'О компании', 'Результаты', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase().replace(' ', '-') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => setIsDialogOpen(true)}>
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Юридические услуги<br />по всей России
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Профессиональная правовая помощь дистанционно. Защитим ваши интересы в любой точке страны.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8" onClick={() => setIsDialogOpen(true)}>
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('услуги')}>
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Комплексная правовая поддержка для бизнеса и граждан</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleServices.map((serviceIndex, index) => {
              const service = allServices[serviceIndex];
              return (
                <Card 
                  key={serviceIndex} 
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedService(service)}
                >
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={service.icon} className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">О компании</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — команда опытных юристов с практикой более 15 лет. Специализируемся на комплексной правовой поддержке бизнеса и граждан по всей России.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Работаем дистанционно, что позволяет нам оказывать качественные услуги клиентам из любого региона страны. Используем современные технологии для коммуникации и ведения дел.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">выигранных дел</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">89</div>
                  <div className="text-sm text-muted-foreground">регионов РФ</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="p-6 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Профессионализм</h3>
                    <p className="text-sm text-muted-foreground">Высококвалифицированные специалисты с подтвержденной экспертизой</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Оперативность</h3>
                    <p className="text-sm text-muted-foreground">Быстрое реагирование на запросы и решение задач в срок</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Target" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Результат</h3>
                    <p className="text-sm text-muted-foreground">Ориентация на достижение максимального результата для клиента</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="результаты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Результаты нашей работы и судебная практика</h2>
            <p className="text-lg text-muted-foreground">Примеры успешно завершенных дел</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="text-3xl font-bold text-primary">{item.amount}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="консультация" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Получить консультацию</h2>
            <p className="text-lg text-muted-foreground">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
          </div>
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Имя <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Опишите вашу ситуацию <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Расскажите о вашей проблеме или вопросе..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[150px] resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-primary" size={28} />
              </div>
              <h3 className="font-bold mb-2">Телефон</h3>
              <a href="tel:+79773037030" className="text-muted-foreground hover:text-primary transition-colors">+7 (977) 303-70-30</a>
              <p className="text-sm text-muted-foreground mt-1">Ежедневно 9:00 - 21:00</p>
            </Card>
            <Card className="p-8 text-center border-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-primary" size={28} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:pro-doc24@yandex.ru" className="text-muted-foreground hover:text-primary transition-colors break-all">pro-doc24@yandex.ru</a>
              <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
            </Card>
            <Card className="p-8 text-center border-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="text-primary" size={28} />
              </div>
              <h3 className="font-bold mb-2">Мессенджеры</h3>
              <p className="text-muted-foreground">WhatsApp, Telegram</p>
              <p className="text-sm text-muted-foreground mt-1">Онлайн-консультации</p>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Получить консультацию</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <label htmlFor="modal-name" className="text-sm font-medium">
                Имя <span className="text-destructive">*</span>
              </label>
              <Input
                id="modal-name"
                required
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-phone" className="text-sm font-medium">
                Телефон <span className="text-destructive">*</span>
              </label>
              <Input
                id="modal-phone"
                required
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="modal-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-message" className="text-sm font-medium">
                Опишите вашу ситуацию <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="modal-message"
                required
                placeholder="Расскажите о вашей проблеме или вопросе..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px] resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={selectedService.icon} className="text-primary" size={32} />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                    <DialogDescription className="mt-1">
                      {selectedService.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <h3 className="font-bold text-lg">Что мы делаем:</h3>
                <ul className="space-y-3">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Check" className="text-primary" size={16} />
                      </div>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <Button 
                    size="lg" 
                    className="w-full" 
                    onClick={() => {
                      setSelectedService(null);
                      setIsDialogOpen(true);
                    }}
                  >
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-white">
                <img 
                  src="https://cdn.poehali.dev/files/a174de34-e656-4c81-8e5d-280a3325bba2.jpg" 
                  alt="Pro Документы" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="font-bold text-primary">Pro Документы</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Pro Документы. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}