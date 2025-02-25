import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Automatically redirect to home page after 5 seconds
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-tr from-green-900 via-green-950 to-green-900">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md mx-4">
        <CheckCircle2 className="mx-auto text-green-500 h-16 w-16 mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Thank You for Your Enquiry!
        </h1>
        <p className="text-gray-600 mb-6">
          We have received your message and will get back to you shortly.
        </p>
        <div className="text-sm text-gray-500">
          You will be redirected to the homepage in {countdown} seconds...
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
