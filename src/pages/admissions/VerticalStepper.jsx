import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Circle,
  ClipboardList,
} from "lucide-react";
import useStepperState from "./useStepperState";
import { Button } from "../../components/ui/button";
import AdmissionsCriteria from "./AdmissionsCriteria";
import AdmissionSidebar from "./AdmissionSidebar";
import { Link } from "react-router-dom";
const steps = [
  {
    title: "Fill Registration Form",
    content: (
      <>
        <p className="text-justify text-gray-600">
          Colonel Brown School a offers admission from grades IV to XII. The
          first stage of the admission process is to initiate the registration
          by filling the 'Registration Form' along with the prescribed
          registration fee (refer to the fee structure).
        </p>
        <br />
        <p className="text-justify text-gray-600">
          A child is admitted to the School purely on the basis of merit and
          recommendations of any kind debars him from admission. Once the child
          steps inside the gates of the School, the mental as well as the
          physical grooming of the child becomes the responsibility of the
          School. All aspects, like a nutritious healthy diet, hygiene,
          co-curricular activities and sports are all supervised by the
          experienced staff members. Every big and small step leading to the
          child's development is looked upon as an achievement by the School.
        </p>
        <Link to="/admissions/registration">
        <Button className="flex items-center px-4 py-2 mt-6 text-white transition-colors bg-gray-800 rounded hover:bg-gray-700">
          Register Now <ClipboardList className="w-4 h-4" />
        </Button>
        </Link>
      </>
    ),
  },
  {
    title: "Aims and Objectives",
    content: (
      <>
        <ol className="space-y-2 text-justify text-gray-600 list-decimal list-inside">
          <li>
            To match the objectives of the School with the goals and abilities
            of the student.
          </li>
          <li>
            Have a transparent process without discrimination to any student.
          </li>
          <li>
            Setting a high standard of core values that are also reflected in
            the families of the students.
          </li>
          <li>Adherence to local laws.</li>
          <li>Admission Procedure.</li>
        </ol>
        <p className="mt-4 text-justify text-gray-600">
          The School may carry out a formal/informal assessment of the students
          in order to decide on appropriate learning or behavioural support. The
          School may also require further educational or psychological
          evaluations if the need is felt for further detailed information to
          support individual students.
        </p>
        <p className="mt-2 text-justify text-gray-600">
          Admission is based on the ability of the applicants. This is evaluated
          through an assessment process which involves written evaluation,
          face-to-face interviews, reports and character certificate from the
          previous School.
        </p>
      </>
    ),
  },
  {
    title: "Post-admission Process",
    content: (
      <>
        <p className="text-justify text-gray-600">
          Once admission is granted, parents will need to deposit the fees and
          submit the following documents:
        </p>
        <ol className="mt-2 space-y-2 text-justify text-gray-600 list-decimal list-inside">
          <li>
            Transfer Certificate in original. (For foreign students the School
            will require a letter from the Principal of the last School attended
            stating the bonafide of the student along with the report of the
            last examination given).
          </li>
          <li>
            Photocopy of Passport if available. This is mandatory for foreign
            students.
          </li>
          <li>
            The admission documentation booklet must also be completed and duly
            signed by both parents. It contains information which will
            facilitate a smooth relationship between parents and the School.
          </li>
          <li>The School will inform the parent the date of joining.</li>
          <li>
            A new student will be allotted the section and house on the day of
            admission. The time table will be handed over to him by the Class
            Teacher.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Note",
    content: (
      <p className="text-justify text-gray-600">
        Above assessment results are based firmly on merit and are subject to
        stipulation mentioned by the Admission Committee, subsequent seats will
        be presented in order of merit.
      </p>
    ),
  },
];

const VerticalStepper = () => {
  const { activeStep, goToNextStep, goToPreviousStep } = useStepperState(
    steps.length
  );

  return (
    <div className="sm:p-0  mx-auto max-w-7xl">
      <div className="grid min-h-screen grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="sm:pl-10 pl-8 bg-white rounded-lg shadow-lg py-6 sm:py-8 pr-6 sm:pr-8">
            {steps.map((step, index) => (
              <StepperItem
                key={index}
                step={step}
                index={index}
                isActive={index === activeStep}
                isCompleted={index < activeStep}
                isLast={index === steps.length - 1}
                onNext={goToNextStep}
                onPrevious={goToPreviousStep}
              />
            ))}
          </div>
          <AdmissionsCriteria />
        </div>
        <div className="md:col-span-1 sm:self-start sm:sticky top-5">
          <AdmissionSidebar />
        </div>
      </div>
    </div>
  );
};

const StepperItem = ({
  step,
  index,
  isActive,
  isCompleted,
  isLast,
  onNext,
  onPrevious,
}) => {
  return (
    <div
      className={`${index === steps.length - 1 ? "border-l-0" : "border-l-2"} ${
        isCompleted ? "border-green-800" : "border-gray-300"
      } pl-4 ${index === steps.length - 1 ? "pb-0" : "pb-8"}`}
    >
      <div className="flex items-center -ml-[34px]  mb-3">
        <div
          className={`rounded-full  p-1 mr-2 ${
            isCompleted
              ? "bg-green-800 drop-shadow-lg sm:drop-shadow-xl"
              : "bg-white border-2 border-gray-300"
          }`}
        >
          {isCompleted ? (
            <CheckCircle className="w-6 h-6 text-white" />
          ) : (
            <div className="relative flex items-center w-6 h-6">
              <span className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-xs font-bold text-gray-500">
                {index + 1}
              </span>
              <Circle
                className={`w-6 absolute top-0 left-0 h-6 ${
                  isActive ? "text-green-800" : "text-gray-300"
                }`}
              />
            </div>
          )}
        </div>
        <h3
          className={`text-lg sm:text-xl font-semibold ${
            isActive || isCompleted ? "text-green-800" : "text-gray-500"
          }`}
        >
          {step.title}
        </h3>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pl-3 mb-4 text-gray-700">{step.content}</div>
            <div className="flex justify-between mt-6 ">
              {index > 0 && (
                <Button
                  onClick={onPrevious}
                  className="flex items-center px-4 py-2 ml-3 text-xs text-gray-700 transition-colors bg-gray-200 rounded hover:bg-gray-300 sm:text-sm"
                >
                  <ChevronUp className="w-4 h-4 mt-" /> Back
                </Button>
              )}
              {!isLast && (
                <Button
                  onClick={onNext}
                  className="flex items-center px-4 py-2 ml-auto text-xs text-white transition-colors bg-green-800 rounded sm:text-sm hover:bg-green-700"
                >
                  Continue <ChevronDown className="w-4 h-4 mt-1" />
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VerticalStepper;
