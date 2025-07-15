import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#151515] font-montserrat">Xenus Development</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#4dfbde] transition-colors">Модули</a>
            <a href="#advantages" className="text-gray-600 hover:text-[#4dfbde] transition-colors">Преимущества</a>
            <a href="#industries" className="text-gray-600 hover:text-[#4dfbde] transition-colors">Применение</a>
            <a href="#contact" className="text-gray-600 hover:text-[#4dfbde] transition-colors">Контакты</a>
          </nav>
          <Button className="bg-[#4dfbde] hover:bg-[#3de6ca] text-[#151515] font-semibold">Демо</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-white to-[#f0fffd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#151515] mb-6 font-montserrat leading-tight">
                XENUS — Геоинформационная платформа нового поколения
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Отечественная модульная геоинформационная система для пространственной аналитики и управления инфраструктурой. 
                Объединяет инструменты пространственного анализа, элементы ИИ, цифровые двойники и средства управления инфраструктурой.
              </p>
              <div className="bg-[#4dfbde]/10 border border-[#4dfbde]/30 rounded-lg p-4 mb-8">
                <p className="text-[#151515] font-semibold">
                  ✓ Полная импортонезависимость
                  <br />
                  ✓ Модульная архитектура 
                  <br />
                  ✓ Гибкая адаптация под отрасли
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#4dfbde] hover:bg-[#3de6ca] text-[#151515] font-semibold px-8 py-3">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать работу
                </Button>
                <Button variant="outline" size="lg" className="border-[#4dfbde] text-[#4dfbde] hover:bg-[#4dfbde]/10 px-8 py-3">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Заказать демо
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/6ff70c80-08de-4511-b6a8-15c8b67f71ea.jpg" 
                alt="XENUS Platform Interface" 
                className="rounded-2xl shadow-2xl border border-gray-200"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#4dfbde] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">Пространственная аналитика в реальном времени</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#151515] mb-4 font-montserrat">Ключевые модули XENUS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный набор инструментов для геоинформационного анализа и управления инфраструктурой
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Map" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-[#151515] font-montserrat">Картографическое ядро</CardTitle>
                <CardDescription>
                  2D/3D визуализация на базе GeoServer и PostGIS. Многослойные карты с поддержкой векторных и растровых данных
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Box" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-[#151515] font-montserrat">Цифровые двойники</CardTitle>
                <CardDescription>
                  Создание виртуальных копий реальных объектов инфраструктуры для мониторинга и симуляции
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-[#151515] font-montserrat">BI-аналитика и отчётность</CardTitle>
                <CardDescription>
                  Комплексная бизнес-аналитика с интерактивными дашбордами и автоматизированной отчётностью
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-[#151515] font-montserrat">ИИ-аналитика</CardTitle>
                <CardDescription>
                  Предиктивный анализ и машинное обучение для прогнозирования состояния инфраструктуры
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wifi" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-[#151515] font-montserrat">IoT-интеграция</CardTitle>
                <CardDescription>
                  Подключение датчиков и телеметрия в реальном времени для мониторинга объектов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-[#151515] font-montserrat">Генерация отчётов с LLM</CardTitle>
                <CardDescription>
                  Автоматическое создание аналитических отчётов с использованием языковых моделей
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4 bg-[#151515]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 font-montserrat">Преимущества XENUS</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4dfbde] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Shield" size={16} className="text-[#151515]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Полная импортонезависимость</h3>
                    <p className="text-gray-400">Отечественное решение, соответствующее требованиям безопасности и независимости от зарубежных технологий</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4dfbde] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Layers" size={16} className="text-[#151515]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Модульная архитектура</h3>
                    <p className="text-gray-400">Гибкая система позволяет использовать только необходимые модули и легко масштабировать решение</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4dfbde] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Settings" size={16} className="text-[#151515]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Гибкая адаптация</h3>
                    <p className="text-gray-400">Возможность настройки под специфику любой отрасли и интеграция с существующими системами</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4dfbde] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Cloud" size={16} className="text-[#151515]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Гибкие варианты поставки</h3>
                    <p className="text-gray-400">Веб-интерфейс, on-premise решения, облачное развёртывание и API для интеграций</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/6ff70c80-08de-4511-b6a8-15c8b67f71ea.jpg" 
                alt="XENUS Analytics Dashboard" 
                className="rounded-2xl shadow-2xl border border-gray-200"
              />
              <div className="absolute top-4 left-4 bg-[#4dfbde] text-[#151515] px-3 py-1 rounded-full text-sm font-semibold">
                Сценарное моделирование
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">Области применения</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              XENUS успешно применяется в различных отраслях для поддержки управленческих решений и цифровой трансформации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-[#151515] rounded-xl hover:bg-[#4dfbde]/10 transition-all duration-300 hover-scale border border-gray-700">
              <div className="w-16 h-16 bg-[#4dfbde]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Building" size={32} className="text-[#4dfbde]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ЖКХ</h3>
              <p className="text-gray-400 text-sm">Управление жилищно-коммунальным хозяйством и инфраструктурой</p>
            </div>

            <div className="text-center p-6 bg-[#151515] rounded-xl hover:bg-[#4dfbde]/10 transition-all duration-300 hover-scale border border-gray-700">
              <div className="w-16 h-16 bg-[#4dfbde]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" size={32} className="text-[#4dfbde]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Промышленность</h3>
              <p className="text-gray-400 text-sm">Мониторинг промышленных объектов и оптимизация производства</p>
            </div>

            <div className="text-center p-6 bg-[#151515] rounded-xl hover:bg-[#4dfbde]/10 transition-all duration-300 hover-scale border border-gray-700">
              <div className="w-16 h-16 bg-[#4dfbde]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={32} className="text-[#4dfbde]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Экология</h3>
              <p className="text-gray-400 text-sm">Экологический мониторинг и анализ воздействия на окружающую среду</p>
            </div>

            <div className="text-center p-6 bg-[#151515] rounded-xl hover:bg-[#4dfbde]/10 transition-all duration-300 hover-scale border border-gray-700">
              <div className="w-16 h-16 bg-[#4dfbde]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-[#4dfbde]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Транспорт</h3>
              <p className="text-gray-400 text-sm">Управление транспортными потоками и логистическими системами</p>
            </div>

            <div className="text-center p-6 bg-[#151515] rounded-xl hover:bg-[#4dfbde]/10 transition-all duration-300 hover-scale border border-gray-700">
              <div className="w-16 h-16 bg-[#4dfbde]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-[#4dfbde]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Энергетика</h3>
              <p className="text-gray-400 text-sm">Мониторинг энергетической инфраструктуры и оптимизация сетей</p>
            </div>
          </div>

          {/* Development roadmap */}
          <div className="mt-16 bg-[#151515] border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-montserrat">Направления развития</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#4dfbde] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Building2" size={24} className="text-[#151515]" />
                </div>
                <h4 className="font-semibold text-white mb-2">BIM-интеграция</h4>
                <p className="text-sm text-gray-400">Работа с моделями зданий и сооружений</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#4dfbde] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Globe" size={24} className="text-[#151515]" />
                </div>
                <h4 className="font-semibold text-white mb-2">Умный город</h4>
                <p className="text-sm text-gray-400">Комплексные решения для городской среды</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#4dfbde] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Target" size={24} className="text-[#151515]" />
                </div>
                <h4 className="font-semibold text-white mb-2">ЦУР</h4>
                <p className="text-sm text-gray-400">Центры управления регионами</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#4dfbde] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Cpu" size={24} className="text-[#151515]" />
                </div>
                <h4 className="font-semibold text-white mb-2">Автонастройка</h4>
                <p className="text-sm text-gray-400">ИИ для автоматической настройки аналитики</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#151515]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">
              Готовы внедрить XENUS в вашей организации? Получите персональную консультацию и демонстрацию возможностей
            </p>
          </div>

          <Card className="bg-[#1e1e1e] border-gray-700 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Имя</label>
                    <Input placeholder="Введите ваше имя" className="bg-[#151515] border-gray-600 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-[#151515] border-gray-600 text-white" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Организация</label>
                  <Input placeholder="Название организации" className="bg-[#151515] border-gray-600 text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Отрасль</label>
                  <Input placeholder="ЖКХ, промышленность, транспорт..." className="bg-[#151515] border-gray-600 text-white" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших задачах и требованиях к геоинформационной системе..." 
                    className="bg-[#151515] border-gray-600 text-white min-h-[120px]"
                  />
                </div>
                
                <Button size="lg" className="w-full bg-[#4dfbde] hover:bg-[#3de6ca] text-[#151515] font-semibold">
                  <Icon name="Send" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151515] text-white py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Globe" size={28} className="text-[#4dfbde]" />
                <span className="text-xl font-bold font-montserrat">XENUS</span>
              </div>
              <p className="text-gray-400">
                Отечественная геоинформационная платформа нового поколения для цифровой трансформации
              </p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Форма поставки:</p>
                <p>• Веб-интерфейс • On-premise • Облако • API</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@xenus.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (8412) 46-48-58</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Пенза, Россия</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#4dfbde]">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#4dfbde]">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#4dfbde]">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 XENUS. Все права защищены. Отечественная разработка.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;