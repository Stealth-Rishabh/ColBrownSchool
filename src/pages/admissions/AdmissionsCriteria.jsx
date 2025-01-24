
import { Book, Users, GraduationCap, Bell } from "lucide-react"

const AdmissionsCriteria = () => {
  const criteria = [
    {
      level: "Primary (I-V)",
      icon: Book,
      requirements: ["Age 5-10 years", "Basic reading and writing skills", "Interview with parents"],
    },
    {
      level: "Secondary (VI-X)",
      icon: Users,
      requirements: ["Age 11-15 years", "Passing grades in previous class", "Entrance exam", "Interview"],
    },
    {
      level: "High School (XI-XII)",
      icon: GraduationCap,
      requirements: ["Age 16-18 years", "Minimum 60% in Class X", "Entrance exam", "Interview", "Subject selection"],
    },
  ]

  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-950 mb-4 flex items-center">
        <Bell className="w-6 h-6 mr-2" />
        Admissions Criteria
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-t-lg overflow-hidden">
          <thead className="bg-green-800 text-white " >
            <tr className="bg-green-800 text-white ">
              <th className="p-2 text-left">Level</th>
              <th className="p-2 text-left">Requirements</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-2 border-b border-gray-200">
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 mr-2 text-green-800" />
                    <span>{item.level}</span>
                  </div>
                </td>
                <td className="p-2 border-b border-gray-200">
                  <ul className="list-decimal list-inside text-gray-600">
                    {item.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdmissionsCriteria

