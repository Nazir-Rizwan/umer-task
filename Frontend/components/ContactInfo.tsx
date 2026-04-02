import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Reach out directly for a quick response:",
      info: "+1 (123) 456-7890",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us your queries or project details:",
      info: "yourname@example.com",
      subInfo: "Replace this placeholder with your actual email.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: MapPin,
      title: "Office Address",
      description: "Visit or mail us at our office:",
      info: "123 Digital Lane, Your City, Country",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div 
                key={index}
                className={`${method.bgColor} rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-semibold text-gray-900">{method.info}</p>
                {method.subInfo && (
                  <p className="text-sm text-gray-500 mt-2 italic">{method.subInfo}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
