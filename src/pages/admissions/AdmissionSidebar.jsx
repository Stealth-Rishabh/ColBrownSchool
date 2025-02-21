import { Calendar, Bell, AlertCircle } from "lucide-react";

const AdmissionSidebar = () => {
  const notices = [
    {
      title: "Admissions Joining Dates",
      date: "2024-04-01",
      description: `Juniors: 1st April (Join Before 4 pm)
       Class 11th: 10th April (Join Before 4 pm)`,
      isNew: true,
    },
    // {
    //   title: "Entrance Exam",
    //   date: "2023-09-15",
    //   description: "Entrance examination for all applicants from grade VI to XII.",
    //   isNew: false,
    // },
    // {
    //   title: "Interview Schedule",
    //   date: "2023-09-25",
    //   description: "Face-to-face interviews for shortlisted candidates.",
    //   isNew: true,
    // },
    // {
    //   title: "Results Declaration",
    //   date: "2023-10-10",
    //   description: "Final admission results will be announced on the school website.",
    //   isNew: false,
    // },
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-950 mb-4 flex items-center">
        <Bell className="w-6 h-6 mr-2" />
        Admission Notices
      </h2>
      <div className="grid gap-4">
        {notices.map((notice, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 relative">
            {notice.isNew && (
              <span className="absolute top-2 right-2 bg-green-800 text-white text-xs font-bold px-2 py-1 rounded-full">
                New
              </span>
            )}
            <h3 className="text-lg font-semibold text-green-950 mb-2">{notice.title}</h3>
            <p className="text-sm text-gray-600 mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {notice.date}
            </p>
            
            <p className="text-sm text-gray-700 whitespace-pre-line">{notice.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 flex items-start">
        <AlertCircle className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-yellow-700">
          Please note that all dates are subject to change. Check the school website regularly for any updates.
        </p>
      </div>
    </div>
  )
}

export default AdmissionSidebar

