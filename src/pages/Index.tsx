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
            <Icon name="Globe" size={32} className="text-[#2563EB]" />
            <span className="text-xl font-bold text-[#1E40AF] font-montserrat">GeoInform</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#2563EB] transition-colors">Возможности</a>
            <a href="#advantages" className="text-gray-600 hover:text-[#2563EB] transition-colors">Преимущества</a>
            <a href="#industries" className="text-gray-600 hover:text-[#2563EB] transition-colors">Отрасли</a>
            <a href="#contact" className="text-gray-600 hover:text-[#2563EB] transition-colors">Контакты</a>
          </nav>
          <Button className="bg-[#2563EB] hover:bg-[#1E40AF]">Демо</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1E40AF] mb-6 font-montserrat leading-tight">
                Геоинформационная платформа нового поколения
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Анализируйте пространственные данные, создавайте интерактивные карты и принимайте обоснованные решения с помощью передовых технологий геоинформатики
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] px-8 py-3">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать работу
                </Button>
                <Button variant="outline" size="lg" className="border-[#2563EB] text-[#2563EB] hover:bg-blue-50 px-8 py-3">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Заказать демо
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/41ae57f2-d7c7-4c1a-b6a9-d2f611d4186e.jpg" 
                alt="GIS Platform Interface" 
                className="rounded-2xl shadow-2xl border border-gray-200"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">Обработка данных в реальном времени</span>
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
            <h2 className="text-4xl font-bold text-[#1E40AF] mb-4 font-montserrat">Возможности платформы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный набор инструментов для работы с геопространственными данными и создания интеллектуальных решений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Map" size={24} className="text-[#2563EB]" />
                </div>
                <CardTitle className="text-[#1E40AF] font-montserrat">Интерактивные карты</CardTitle>
                <CardDescription>
                  Создавайте динамические карты с поддержкой множества слоев данных и пользовательских элементов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={24} className="text-[#2563EB]" />
                </div>
                <CardTitle className="text-[#1E40AF] font-montserrat">Аналитика данных</CardTitle>
                <CardDescription>
                  Расширенные инструменты анализа пространственных данных с поддержкой машинного обучения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Satellite" size={24} className="text-[#2563EB]" />
                </div>
                <CardTitle className="text-[#1E40AF] font-montserrat">Спутниковая съёмка</CardTitle>
                <CardDescription>
                  Доступ к актуальным спутниковым снимкам и возможность их обработки в реальном времени
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Layers" size={24} className="text-[#2563EB]" />
                </div>
                <CardTitle className="text-[#1E40AF] font-montserrat">Многослойность</CardTitle>
                <CardDescription>
                  Работа с множественными слоями данных: векторные, растровые, 3D модели и временные ряды
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Share2" size={24} className="text-[#2563EB]" />
                </div>
                <CardTitle className="text-[#1E40AF] font-montserrat">Интеграция API</CardTitle>
                <CardDescription>
                  Простая интеграция с внешними системами через REST API и WebSocket соединения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-[#2563EB]" />
                </div>
                <CardTitle className="text-[#1E40AF] font-montserrat">Безопасность</CardTitle>
                <CardDescription>
                  Корпоративный уровень безопасности с шифрованием данных и контролем доступа
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1E40AF] mb-8 font-montserrat">Преимущества решения</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Zap" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E40AF] mb-2">Высокая производительность</h3>
                    <p className="text-gray-600">Обработка больших объёмов данных в реальном времени с использованием облачных технологий</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Users" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E40AF] mb-2">Командная работа</h3>
                    <p className="text-gray-600">Совместное редактирование проектов с системой версионности и комментариев</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Smartphone" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E40AF] mb-2">Мобильность</h3>
                    <p className="text-gray-600">Доступ к платформе с любых устройств через веб-интерфейс и мобильные приложения</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="TrendingUp" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E40AF] mb-2">Масштабируемость</h3>
                    <p className="text-gray-600">Гибкая архитектура позволяет легко масштабировать решение под потребности бизнеса</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/96540ea1-3583-4c05-a861-fc9e0b16ea9b.jpg" 
                alt="GIS Analytics Dashboard" 
                className="rounded-2xl shadow-2xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E40AF] mb-4 font-montserrat">Отрасли применения</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наше решение успешно применяется в различных сферах деятельности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover-scale">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Building" size={32} className="text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1E40AF] mb-2">Недвижимость</h3>
              <p className="text-gray-600 text-sm">Анализ рынка недвижимости и градостроительное планирование</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover-scale">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1E40AF] mb-2">Логистика</h3>
              <p className="text-gray-600 text-sm">Оптимизация маршрутов и управление транспортными потоками</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover-scale">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sprout" size={32} className="text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1E40AF] mb-2">Сельское хозяйство</h3>
              <p className="text-gray-600 text-sm">Мониторинг посевов и управление сельскохозяйственными угодьями</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover-scale">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Landmark" size={32} className="text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1E40AF] mb-2">Государство</h3>
              <p className="text-gray-600 text-sm">Территориальное планирование и управление ресурсами</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#1E40AF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">Свяжитесь с нами</h2>
            <p className="text-xl text-blue-100">
              Готовы начать работу с геоинформационной платформой? Оставьте заявку и наши эксперты свяжутся с вами
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                    <Input placeholder="Введите ваше имя" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Компания</label>
                  <Input placeholder="Название компании" className="border-gray-300" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших задачах и требованиях к платформе..." 
                    className="border-gray-300 min-h-[120px]"
                  />
                </div>
                
                <Button size="lg" className="w-full bg-[#2563EB] hover:bg-[#1E40AF]">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Globe" size={28} className="text-[#2563EB]" />
                <span className="text-xl font-bold font-montserrat">GeoInform</span>
              </div>
              <p className="text-gray-400">
                Передовая геоинформационная платформа для современного бизнеса
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@geoinform.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GeoInform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;