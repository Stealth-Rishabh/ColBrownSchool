import Container from "../../components/wrappers/Container";
import hostel from "../../assets/landing/hostel.png";
import atheletics from "../../assets/landing/atheletics.png";
import student from "../../assets/landing/students.png";
import student2 from "../../assets/landing/students2.png";
import logo from "../../assets/landing/360-view.gif";
const VirtualTour = () => {
  return (
    <Container>
      <div className="grid sm:grid-cols-4 ">
        <div className="overflow-hidden  h-60 hover:scale-95 duration-200 transition-all">
          <img
            src={hostel}
            alt=""
            className="object-cover w-full h-full scale-105"
          />
        </div>

        <div className="overflow-hidden bg-green-900  h-60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-light font-mono">Hostel</h1>
        </div>

        <div className="overflow-hidden  h-60 hover:scale-95 duration-200 transition-all">
          <img
            src={atheletics}
            alt=""
            className="object-cover w-full h-full scale-105"
          />
        </div>

        <div className="overflow-hidden bg-red-900  h-60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-light font-mono">
            Atheletics
          </h1>
        </div>

        <div className="overflow-hidden bg-gray-800  h-60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-light font-mono">
            Facilities
          </h1>
        </div>

        <div className="sm:col-span-2   overflow-hidden grid justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={logo} alt="" className="h-32" />
            <p className="sm:text-2xl font-semibold font-mono p-6">
              Take a Virtual Tour 360deg view
            </p>
          </div>
        </div>
        <div className="overflow-hidden  h-60 hover:scale-95 duration-200 transition-all">
          <img
            src={student}
            alt=""
            className="object-cover w-full h-full scale-105"
          />
        </div>

        <div className="overflow-hidden  h-60 hover:scale-95 duration-200 transition-all">
          <img
            src={student2}
            alt=""
            className="object-cover w-full h-full scale-105"
          />
        </div>

        <div className="overflow-hidden bg-red-900  h-60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-light font-mono">Alumni</h1>
        </div>

        <div className="overflow-hidden  h-60 hover:scale-95 duration-200 transition-all">
          <img
            src={student}
            alt=""
            className="object-cover w-full h-full scale-105"
          />
        </div>

        <div className="overflow-hidden bg-green-800  h-60 flex items-center text-center justify-center">
          <h1 className="text-white text-4xl font-light font-mono">
            School <br></br> News & Updates
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default VirtualTour;
