import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Scale',
    title: 'Гражданское право',
    description: 'Защита прав граждан, договорное право, споры о собственности'
  },
  {
    icon: 'Building2',
    title: 'Корпоративное право',
    description: 'Регистрация бизнеса, корпоративные споры, M&A сделки'
  },
  {
    icon: 'FileText',
    title: 'Налоговое право',
    description: 'Налоговое планирование, споры с ФНС, налоговые проверки'
  },
  {
    icon: 'Users',
    title: 'Трудовое право',
    description: 'Трудовые споры, защита прав работников и работодателей'
  },
  {
    icon: 'Home',
    title: 'Недвижимость',
    description: 'Сделки с недвижимостью, оформление прав, жилищные споры'
  },
  {
    icon: 'Shield',
    title: 'Уголовное право',
    description: 'Защита по уголовным делам, представительство в суде'
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
              {['Главная', 'Услуги', 'О компании', 'Портфолио', 'Контакты'].map((item) => (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
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

      <section id="портфолио" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
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