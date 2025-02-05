import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Phone, Loader2, ArrowRight, Info } from "lucide-react";
import logo from "../../assets/landing/logo_col_brown.png";

import { motion } from "framer-motion";

export default function StudentPortal() {
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobile) {
      setError("Please enter your mobile number");
      return;
    }
    setIsLoading(true);
    setError("");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20"></div>
              <img
                src={logo}
                alt="School Crest"
                className="w-32 h-32 md:w-40 md:h-40 relative z-10 drop-shadow-xl"
              />
            </div>
          </motion.div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              Student Portal
            </h1>
            <p className="text-slate-600 text-lg">Result & Fee Management</p>
          </div>
        </div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="backdrop-blur-sm bg-white/90 shadow-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                Welcome Back
              </CardTitle>
              <p className="text-center text-slate-600">
                Sign in to access your account
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="mobile"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Mobile Number
                  </Label>
                  <div className="relative">
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="pl-12 py-6 text-lg"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      pattern="[0-9]*"
                      maxLength={10}
                      required
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">
                      +91
                    </span>
                  </div>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Alert variant="destructive" className="py-2">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                </div>

                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg relative overflow-hidden group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        Sign In
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>

                  <div className="bg-amber-50 p-4 rounded-lg flex gap-3">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <p className="text-sm text-amber-700">
                      Please ensure you're using the mobile number registered
                      with the school. Contact the administration if you need to
                      update your details.
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-4"
        >
          <p className="text-sm text-slate-600">
            © 2025 Col. Brown School, Dehradun, Uttarakhand, India
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
}
