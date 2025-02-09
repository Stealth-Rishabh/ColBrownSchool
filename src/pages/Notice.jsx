import React from "react";
import Heading from "../components/Heading";

const Notice = () => {
  return (
    <>
      <Heading title="Notices" className="mt-16 !pb-8" />
      <EntranceTestGuidelines />
    </>
  );
};

export default Notice;

function EntranceTestGuidelines() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4 pb-20">
      <h1 className="text-xl font-medium text-gray-900">
        Guidelines for the Entrance Test for Classes IV to IX to be conducted
        for the session 2025-26.

      </h1>

      <p className="text-gray-800">
        The Test will be conducted online on Zoom App therefore it is imperative
        for the students to download the Zoom App.
      </p>

      <p className="text-gray-800">
        The students must join the Online Meeting as scheduled.
      </p>

      <div className="w-full border border-gray-200">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-1/3 bg-[#2B5741] text-white py-2 px-4 text-center border-r border-white">
                DATE
              </th>
              <th className="w-1/3 bg-[#2B5741] text-white py-2 px-4 text-center border-r border-white">
                TIME
              </th>
              <th className="w-1/3 bg-[#2B5741] text-white py-2 px-4 text-center">
                DURATION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-center border-r border-gray-200">
                07 December 2024
              </td>
              <td className="py-2 px-4 text-center border-r border-gray-200">
                3:00 PM – 4:30 PM
              </td>
              <td className="py-2 px-4 text-center">1 hour 30 min.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-800">
        Students appearing for Classes IV to VIII will be attempting English,
        Hindi and Mathematics Question Papers.
      </p>

      <p className="text-gray-800">
        Students appearing for Class IX will be attempting English, Hindi,
        Science (Physics, Chemistry and Biology -combined) and Mathematics
        Question Papers.
      </p>

      <p className="text-gray-800">
        <span className="font-semibold">Note:</span> As the zoom meeting/session
        has duration of 40 minutes. Kindly re-join the bridge when the
        meeting/session ends.
      </p>
    </div>
  );
}
