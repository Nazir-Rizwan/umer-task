import { Clock } from 'lucide-react';

export function WorkingHours() {
  const schedule = [
    { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM", isOpen: true },
    { days: "Saturday", hours: "10:00 AM – 2:00 PM", isOpen: true },
    { days: "Sunday", hours: "Closed", isOpen: false }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Working Hours</h2>
          <p className="text-xl text-gray-600">
            We're here to help during business hours
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-100"
              >
                <span className="text-lg font-semibold text-gray-900">{item.days}</span>
                <span className={`text-lg font-medium ${item.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-200">
            <p className="text-center text-gray-700">
              📧 For urgent inquiries outside business hours, email us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
