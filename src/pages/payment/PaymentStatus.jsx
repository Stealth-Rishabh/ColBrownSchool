import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const status = searchParams.get("status");
  const orderNo = searchParams.get("order_no");
  const email = searchParams.get("email");
  const message = searchParams.get("message");

  const getStatusContent = () => {
    switch (status) {
      case "Success":
        return {
          icon: <CheckCircle2 className="w-16 h-16 text-green-500" />,
          title: "Payment Successful!",
          message: `Your registration (Order #${orderNo}) has been confirmed. A confirmation email has been sent to ${email}.`,
          className: "bg-green-50 border-green-200",
        };
      case "Failure":
        return {
          icon: <XCircle className="w-16 h-16 text-red-500" />,
          title: "Payment Failed",
          message:
            message ||
            "We were unable to process your payment. Please try again.",
          className: "bg-red-50 border-red-200",
        };
      case "Aborted":
        return {
          icon: <AlertCircle className="w-16 h-16 text-yellow-500" />,
          title: "Payment Cancelled",
          message: "The payment process was cancelled. Please try again.",
          className: "bg-yellow-50 border-yellow-200",
        };
      default:
        return {
          icon: <AlertCircle className="w-16 h-16 text-yellow-500" />,
          title: "Payment Status Unknown",
          message: "We could not determine the status of your payment.",
          className: "bg-yellow-50 border-yellow-200",
        };
    }
  };

  const { icon, title, message: statusMessage, className } = getStatusContent();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className={`max-w-md w-full ${className} border rounded-lg p-8 text-center`}
      >
        <div className="flex justify-center mb-4">{icon}</div>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">{statusMessage}</p>

        <div className="space-y-3">
          {status === "Success" ? (
            <>
              <a
                href="/"
                className="block w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Return to Home
              </a>
            </>
          ) : (
            <>
              <a
                href="/admissions/registration"
                className="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Try Again
              </a>
              <button
                onClick={() => navigate("/contact-us")}
                className="block w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Contact Support
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
