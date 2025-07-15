import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      {/* Header */}
      <header className="bg-[#151515] border-b border-gray-800 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#4dfbde] rounded-lg flex items-center justify-center">
              <Icon name="Database" size={20} className="text-[#151515]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white font-montserrat">Xenus</span>
              <span className="text-xs text-gray-400">Development</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button className="bg-[#4dfbde]/10 text-[#4dfbde] px-4 py-2 rounded-lg text-sm hover:bg-[#4dfbde]/20 transition-colors border border-[#4dfbde]/30">
              Сервисы
            </button>
          </nav>
          <div className="flex items-center space-x-3">
            <Button size="sm" className="bg-[#4dfbde] hover:bg-[#3de6ca] text-[#151515] font-semibold rounded-lg">
              Скачать
            </Button>
            <div className="w-8 h-8 bg-[#4dfbde] rounded-lg flex items-center justify-center">
              <Icon name="User" size={16} className="text-[#151515]" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with GIS Map */}
      <section className="relative h-screen flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Left Sidebar */}
          <div className="w-80 bg-[#151515] p-6 border-r border-gray-800">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Input 
                  placeholder="Поисковый запрос..." 
                  className="bg-[#1e1e1e] border-gray-700 text-white pl-10 rounded-lg"
                />
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="mt-3">
                <Button className="bg-[#4dfbde] hover:bg-[#3de6ca] text-[#151515] w-full text-sm rounded-lg">
                  Свернуть
                </Button>
              </div>
            </div>

            {/* Thematic Layers */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Тематические слои</h3>
                <Icon name="ChevronDown" size={16} className="text-gray-400" />
              </div>
              
              <div className="mb-4">
                <h4 className="text-gray-300 text-sm mb-3 flex items-center justify-between">
                  Слои
                  <Icon name="ChevronDown" size={14} className="text-gray-400" />
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <Button variant="ghost" size="sm" className="text-[#4dfbde] hover:bg-[#4dfbde]/10 p-0 h-auto">
                      Выбрать все
                    </Button>
                    <Button variant="ghost" size="sm" className="text-[#4dfbde] hover:bg-[#4dfbde]/10 p-0 h-auto">
                      Очистить
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { name: "Места сборки снега", checked: true },
                      { name: "Паспорта", checked: true },
                      { name: "Закрепление границ", checked: false },
                      { name: "Участки", checked: false },
                      { name: "Кадастровые участки", checked: false },
                      { name: "Кадастровые здания", checked: false }
                    ].map((layer, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded border ${layer.checked ? 'bg-[#4dfbde] border-[#4dfbde]' : 'border-gray-600'}`}></div>
                        <span className="text-white text-sm">{layer.name}</span>
                        <Icon name="MoreHorizontal" size={14} className="text-gray-400 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg">
                Очистить
              </Button>
              <Button className="w-full bg-[#4dfbde] hover:bg-[#3de6ca] text-[#151515] rounded-lg">
                Найти
              </Button>
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 relative">
            <img 
              src="https://cdn.poehali.dev/files/22933df0-3d39-4c87-a24c-155765bd6d6c.png" 
              alt="Геоинформационная карта Химки" 
              className="w-full h-full object-cover"
            />
            
            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <Button size="sm" className="bg-[#151515]/80 text-white border border-gray-600 rounded-lg w-10 h-10 p-0">
                <Icon name="Download" size={16} />
              </Button>
              <Button size="sm" className="bg-[#151515]/80 text-white border border-gray-600 rounded-lg w-10 h-10 p-0">
                <Icon name="Filter" size={16} />
              </Button>
              <Button size="sm" className="bg-[#151515]/80 text-white border border-gray-600 rounded-lg w-10 h-10 p-0">
                <Icon name="Grid3X3" size={16} />
              </Button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-[#151515]/90 p-3 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-2 text-white text-sm">
                <Icon name="Info" size={16} className="text-[#4dfbde]" />
                <span>Легенда</span>
                <Icon name="HelpCircle" size={14} className="text-gray-400" />
              </div>
            </div>

            {/* Scale */}
            <div className="absolute bottom-4 right-4 text-white text-sm bg-[#151515]/80 px-3 py-1 rounded">
              2.5 км
            </div>

            {/* Coordinates */}
            <div className="absolute bottom-4 right-32 text-white text-sm bg-[#151515]/80 px-3 py-1 rounded">
              55.89280, 37.38893
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">Ключевые модули XENUS</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Полный набор инструментов для геоинформационного анализа и управления инфраструктурой
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#151515] border-gray-700 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Map" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-white font-montserrat">Картографическое ядро</CardTitle>
                <CardDescription className="text-gray-400">
                  2D/3D визуализация на базе GeoServer и PostGIS. Многослойные карты с поддержкой векторных и растровых данных
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#151515] border-gray-700 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Box" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-white font-montserrat">Цифровые двойники</CardTitle>
                <CardDescription className="text-gray-400">
                  Создание виртуальных копий реальных объектов инфраструктуры для мониторинга и симуляции
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#151515] border-gray-700 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-white font-montserrat">BI-аналитика и отчётность</CardTitle>
                <CardDescription className="text-gray-400">
                  Комплексная бизнес-аналитика с интерактивными дашбордами и автоматизированной отчётностью
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#151515] border-gray-700 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-white font-montserrat">ИИ-аналитика</CardTitle>
                <CardDescription className="text-gray-400">
                  Предиктивный анализ и машинное обучение для прогнозирования состояния инфраструктуры
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#151515] border-gray-700 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wifi" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-white font-montserrat">IoT-интеграция</CardTitle>
                <CardDescription className="text-gray-400">
                  Подключение датчиков и телеметрия в реальном времени для мониторинга объектов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#151515] border-gray-700 hover:shadow-lg transition-all duration-300 hover-scale hover:border-[#4dfbde]/30">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4dfbde]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-[#4dfbde]" />
                </div>
                <CardTitle className="text-white font-montserrat">Генерация отчётов с LLM</CardTitle>
                <CardDescription className="text-gray-400">
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