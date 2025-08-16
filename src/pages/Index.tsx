import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const Index = () => {
  const blockedCountries = [
    { name: "Италия", date: "Март 2024", reason: "Нарушение правил защиты персональных данных" },
    { name: "Франция", date: "Апрель 2024", reason: "Безопасность несовершеннолетних" },
    { name: "Германия", date: "Май 2024", reason: "Регулирование ИИ-контента" },
    { name: "Бразилия", date: "Июнь 2024", reason: "Контроль над ИИ-платформами" },
    { name: "Грузия", date: "Август 2024", reason: "Обеспечение цифровой безопасности" },
  ];

  const timeline = [
    { date: "Февраль 2024", event: "Первые жалобы на Character.AI от европейских регуляторов", type: "warning" },
    { date: "Март 2024", event: "Италия блокирует доступ к платформе", type: "block" },
    { date: "Апрель 2024", event: "Франция присоединяется к блокировке", type: "block" },
    { date: "Май 2024", event: "Character.AI выпускает заявление о соответствии GDPR", type: "response" },
    { date: "Июнь 2024", event: "Расширение блокировок на Германию и Бразилию", type: "block" },
    { date: "Июль 2024", event: "Компания подает апелляцию в европейский суд", type: "legal" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900" style={{fontFamily: 'Times New Roman, serif'}}>
                CHARACTER.AI BLOCKAGES
              </h1>
              <p className="text-sm text-gray-600 mt-1">Аналитический обзор блокировок ИИ-платформы</p>
            </div>
            <div className="text-sm text-gray-500">
              Обновлено: 16 августа 2025
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Times New Roman, serif'}}>
                Почему Character.AI заблокирован в нескольких странах
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Character.AI — популярная платформа для общения с ИИ-персонажами — столкнулась с 
                блокировками в нескольких европейских странах и Бразилии из-за нарушений в области 
                защиты данных и безопасности несовершеннолетних.
              </p>
              <div className="flex gap-4">
                <Badge variant="destructive" className="text-sm">
                  <Icon name="AlertTriangle" size={14} />
                  <span className="ml-1">5 стран заблокировали</span>
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Icon name="Users" size={14} />
                  <span className="ml-1">Миллионы пользователей затронуты</span>
                </Badge>
              </div>
            </div>
            <div>
              <img 
                src="/img/d795c022-142e-4e94-a982-e633afbdb384.jpg" 
                alt="Character.AI блокировка"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Main Reasons */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Times New Roman, serif'}}>
            Основные причины блокировки
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <Icon name="Shield" size={20} />
                  <span className="ml-2">Защита данных</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Нарушение требований GDPR по обработке персональных данных пользователей, 
                  особенно несовершеннолетних.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Icon name="Users" size={20} />
                  <span className="ml-2">Безопасность детей</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Отсутствие достаточных мер контроля контента для защиты 
                  несовершеннолетних пользователей.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <Icon name="Bot" size={20} />
                  <span className="ml-2">Регулирование ИИ</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Несоответствие новым требованиям ЕС по регулированию 
                  искусственного интеллекта.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Countries List */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Times New Roman, serif'}}>
            Список заблокировавших стран
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blockedCountries.map((country, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-900">{country.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {country.date}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{country.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Timeline */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Times New Roman, serif'}}>
            Хронология событий
          </h3>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <div className="flex-shrink-0">
                  {item.type === 'warning' && <Icon name="AlertTriangle" size={20} className="text-yellow-600" />}
                  {item.type === 'block' && <Icon name="XCircle" size={20} className="text-red-600" />}
                  {item.type === 'response' && <Icon name="MessageSquare" size={20} className="text-blue-600" />}
                  {item.type === 'legal' && <Icon name="Gavel" size={20} className="text-purple-600" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-gray-900 font-medium">{item.event}</p>
                    <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Archive Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Times New Roman, serif'}}>
            Архив событий
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="legal-docs">
              <AccordionTrigger className="text-lg font-semibold">
                Правовые документы
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900">Решение итальянского регулятора</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Официальное постановление о блокировке Character.AI на территории Италии 
                      от 15 марта 2024 года.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900">Заявление Character.AI</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Официальный ответ компании на блокировки и планы по устранению нарушений.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="media-coverage">
              <AccordionTrigger className="text-lg font-semibold">
                Освещение в СМИ
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900">TechCrunch</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      "Character.AI faces European regulatory storm over data protection"
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900">Reuters</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      "AI chatbot platform blocked in multiple countries over safety concerns"
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical-details">
              <AccordionTrigger className="text-lg font-semibold">
                Технические детали
              </AccordionTrigger>
              <AccordionContent>
                <Alert>
                  <Icon name="Info" size={16} />
                  <AlertDescription>
                    Блокировки осуществляются на уровне провайдеров интернет-услуг. 
                    Character.AI остается доступен через VPN-сервисы, однако компания 
                    не рекомендует обход блокировок.
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 mt-12">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Character.AI Blockages Report. Информация собрана из открытых источников.</p>
            <p className="mt-2">
              Источники: Reuters, TechCrunch, официальные заявления регуляторов
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;