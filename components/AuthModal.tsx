"use client";

import { useState, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import Snackbar from "@/components/SnackBar";
import useSnackbar from "@/hooks/useSnackbar";

interface Props {
    open: boolean;
    onClose: () => void;
    onLoginSuccess: () => void
}

export default function AuthModal({
    open,
    onClose,
    onLoginSuccess
}: Props) {
    const [mode, setMode] =
        useState<"login" | "register" | "forgot">("register");

    const [step, setStep] = useState(1);
    const [forgotStep, setForgotStep] = useState(1);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const [forgotForm, setForgotForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [forgotOtp, setForgotOtp] = useState("");

    const [showForgotPassword, setShowForgotPassword] =
        useState(false);

    const [showForgotConfirmPassword, setShowForgotConfirmPassword] =
        useState(false);

    const [projects, setProjects] = useState([
        {
            name: "",
            description: "",
            techStack: ""
        },
    ]);
    const [otp, setOtp] = useState("")

    const [regsiterForm, setRegsiterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        techStack: "",
        codingLanguages: "",
        role: "",
        experience: "",
        referredBy: "",
    });
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {
        snackbar,
        showSnackbar,
    } = useSnackbar();

    useEffect(() => {
        const params = new URLSearchParams(
            window.location.search
        );

        const ref = params.get("ref");

        if (ref) {
            setRegsiterForm((prev) => ({
                ...prev,
                referredBy: ref,
            }));
            // console.log(ref,'email')

            // Automatically open registration
            setMode("register");
        }
    }, []);


    if (!open) return null;



    const validateStep1 = () => {
        if (!regsiterForm.firstName.trim()) {
            showSnackbar(
                "First name is required",
                "error"
            );
            return false;
        }

        if (!regsiterForm.lastName.trim()) {
            showSnackbar(
                "Last name is required",
                "error"
            );
            return false;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailRegex.test(
                regsiterForm.email
            )
        ) {
            showSnackbar(
                "Enter valid email",
                "error"
            );
            return false;
        }

        if (
            regsiterForm.phone.length !== 10
        ) {
            showSnackbar(
                "Enter valid phone number",
                "error"
            );
            return false;
        }

        if (
            regsiterForm.password.length < 8
        ) {
            showSnackbar(
                "Password must be at least 8 characters",
                "error"
            );
            return false;
        }

        if (
            regsiterForm.password !==
            regsiterForm.confirmPassword
        ) {
            showSnackbar(
                "Passwords do not match",
                "error"
            );
            return false;
        }

        return true;
    };

    const addProject = () => {
        setProjects([
            ...projects,
            {
                name: "",
                description: "",
                techStack: ""
            },
        ]);
    };
    const removeProject = (index: number) => {
        if (projects.length === 1) return;

        setProjects(
            projects.filter((_, i) => i !== index)
        );
    };
    const updateProjectName = (
        index: number,
        value: string
    ) => {
        const updated = [...projects];

        updated[index] = {
            ...updated[index],
            name: value,
        };

        setProjects(updated);
    };
    const updateProjectTechStack = (index: number,
        value: string) => {
        const updated = [...projects];

        updated[index] = {
            ...updated[index],
            techStack: value,
        };

        setProjects(updated);
    }
    const updateProjectDescription = (
        index: number,
        value: string
    ) => {
        const updated = [...projects];

        updated[index] = {
            ...updated[index],
            description: value,
        };

        setProjects(updated);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setRegsiterForm({
            ...regsiterForm,
            [e.target.name]: e.target.value,
        });
    };

    const sendOtp = async () => {
        if (!validateStep1()) return;

        try {
            const response = await fetch(
                "/api/send-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        email: regsiterForm.email,
                        name: regsiterForm.firstName,
                    }),
                }
            );

            const data =
                await response.json();

            if (!data.success) {
                showSnackbar(
                    data.message,
                    "error"
                );
                return;
            }

            showSnackbar("OTP Sent");

            setStep(2);
        } catch {
            showSnackbar(
                "Failed to send OTP",
                "error"
            );
        }
    };

    const verifyOtp = async () => {
        if (!otp.trim()) {
            showSnackbar(
                "Enter OTP",
                "error"
            );
            return;
        }

        try {
            const response = await fetch(
                "/api/verify-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        email: regsiterForm.email,
                        otp,
                    }),
                }
            );

            const data =
                await response.json();

            if (!data.success) {
                showSnackbar(
                    data.message,
                    "error"
                );
                return;
            }

            showSnackbar(
                "OTP Verified"
            );

            setStep(3);
        } catch {
            showSnackbar(
                "OTP Verification Failed",
                "error"
            );
        }
    };

    const validateStep3 = () => {
        if (
            !regsiterForm.techStack.trim()
        ) {
            showSnackbar(
                "Tech stack required",
                "error"
            );
            return false;
        }

        if (
            !regsiterForm.codingLanguages.trim()
        ) {
            showSnackbar(
                "Coding language required",
                "error"
            );
            return false;
        }

        if (
            !regsiterForm.experience.trim()
        ) {
            showSnackbar(
                "Experience required",
                "error"
            );
            return false;
        }

        const invalidProject =
            projects.find(
                (project) =>
                    !project.name.trim() ||
                    !project.description.trim()
            );

        if (invalidProject) {
            showSnackbar(
                "Complete all project details",
                "error"
            );
            return false;
        }

        return true;
    };

    const handleRegister = async () => {
        if (!validateStep3()) return;

        try {
            const payload = {
                ...regsiterForm,
                projects,
            };

            const response = await fetch(
                "/api/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                showSnackbar(
                    data.error,
                    "error"
                );
                return;
            }

            showSnackbar(
                "Registration Successful"
            );

            setMode("login");
            setStep(1);

        } catch {
            showSnackbar(
                "Registration Failed",
                "error"
            );
        }
    };

    const handleLoginForm = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        });
    };
    const handleLogin = async () => {
        if (!loginForm.email.trim()) {
            showSnackbar(
                "Email is required",
                "error"
            );
            return;
        }

        if (!loginForm.password.trim()) {
            showSnackbar(
                "Password is required",
                "error"
            );
            return;
        }

        try {
            const response = await fetch(
                "/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(
                        loginForm
                    ),
                }
            );

            const data =
                await response.json();

            if (data.error) {
                showSnackbar(
                    data.error ||
                    "Login failed",
                    "error"
                );
                return;
            }

            showSnackbar(
                "Login Successful"
            );


            if (data.user) {
                onLoginSuccess?.();
                onClose();
            }

            // //   Close modal
            //   setTimeout(() => {
            //     onClose();

            //     window.location.href =
            //       data.user?.isAdmin
            //         ? "/admin"
            //         : "/profile";
            //   }, 1000);

        } catch (error) {
            showSnackbar(
                "Something went wrong",
                "error"
            );
        }
    };

    const sendForgotPasswordOtp = async () => {
        if (!forgotForm.email.trim()) {
            showSnackbar("Email is required", "error");
            return;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(forgotForm.email)) {
            showSnackbar("Enter valid email", "error");
            return;
        }

        try {
            const response = await fetch(
                "/api/forgot-password/send-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: forgotForm.email,
                    }),
                }
            );

            const data = await response.json();

            if (!data.success) {
                showSnackbar(
                    data.message || "Failed to send OTP",
                    "error"
                );
                return;
            }

            showSnackbar("OTP Sent");

            setForgotStep(2);
        } catch {
            showSnackbar(
                "Failed to send OTP",
                "error"
            );
        }
    };

    const verifyForgotPasswordOtp = async () => {
        if (!forgotOtp.trim()) {
            showSnackbar("Enter OTP", "error");
            return;
        }

        try {
            const response = await fetch(
                "/api/forgot-password/verify-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: forgotForm.email,
                        otp: forgotOtp,
                    }),
                }
            );

            const data = await response.json();

            if (!data.success) {
                showSnackbar(
                    data.message || "Invalid OTP",
                    "error"
                );
                return;
            }

            showSnackbar("OTP Verified");

            setForgotStep(3);
        } catch {
            showSnackbar(
                "OTP Verification Failed",
                "error"
            );
        }
    };

    const resetPassword = async () => {
        if (!forgotForm.password.trim()) {
            showSnackbar(
                "New password is required",
                "error"
            );
            return;
        }

        if (forgotForm.password.length < 8) {
            showSnackbar(
                "Password must be at least 8 characters",
                "error"
            );
            return;
        }

        if (
            forgotForm.password !==
            forgotForm.confirmPassword
        ) {
            showSnackbar(
                "Passwords do not match",
                "error"
            );
            return;
        }

        try {
            const response = await fetch(
                "/api/forgot-password/reset",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: forgotForm.email,
                        otp: forgotOtp,
                        password: forgotForm.password,
                    }),
                }
            );

            const data = await response.json();

            if (!data.success) {
                showSnackbar(
                    data.message || "Failed to reset password",
                    "error"
                );
                return;
            }

            showSnackbar(
                "Password reset successfully"
            );

            // Clear forgot password data
            setForgotForm({
                email: "",
                password: "",
                confirmPassword: "",
            });

            setForgotOtp("");
            setForgotStep(1);

            // Go back to login
            setMode("login");
        } catch {
            showSnackbar(
                "Something went wrong",
                "error"
            );
        }
    };

    return (
// ================================
// MODAL CONTAINER
// ================================

<div className="fixed inset-0 z-[9999999] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">

  <div
    className="
      bg-white
      w-full
      max-w-2xl
      rounded-2xl
      shadow-2xl
      border
      border-slate-200
      max-h-[90vh]
      overflow-y-auto
    "
  >

    {/* ================================
        HEADER
    ================================= */}

    <div
      className="
        sticky
        top-0
        z-10
        bg-white
        text-slate-900
        border-b
        border-slate-200
        px-6
        py-4
        flex
        items-center
        justify-between
      "
    >

      <h2 className="text-2xl font-bold text-slate-900">
        {mode === "login"
          ? "Sign In"
          : mode === "register"
          ? "Create Account"
          : "Reset Password"}
      </h2>

      <button
        onClick={onClose}
        className="
          w-9
          h-9
          rounded-lg
          flex
          items-center
          justify-center
          text-slate-500
          hover:text-slate-900
          hover:bg-slate-100
          transition-colors
        "
      >
        <X size={20} />
      </button>

    </div>


    <div className="p-6">


      {/* ================================
          LOGIN
      ================================= */}

      {mode === "login" && (

        <div className="space-y-5 text-slate-900">

          <input
            name="email"
            value={loginForm.email}
            onChange={handleLoginForm}
            placeholder="Email"
            className="
              w-full
              border
              border-slate-200
              rounded-xl
              p-4
              text-slate-900
              placeholder:text-slate-400
              outline-none
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition
            "
          />


          <div className="relative">

            <input
              name="password"
              type={
                showLoginPassword
                  ? "text"
                  : "password"
              }
              value={loginForm.password}
              onChange={handleLoginForm}
              placeholder="Password"
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                p-4
                pr-14
                text-slate-900
                placeholder:text-slate-400
                outline-none
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10
                transition
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowLoginPassword(
                  !showLoginPassword
                )
              }
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-sm
                font-medium
                text-slate-500
                hover:text-blue-600
              "
            >
              {showLoginPassword
                ? "Hide"
                : "Show"}
            </button>

          </div>


          <div className="text-right">

            <button
              type="button"
              onClick={() => {
                setForgotForm({
                  email: loginForm.email,
                  password: "",
                  confirmPassword: "",
                });

                setForgotOtp("");
                setForgotStep(1);
                setMode("forgot");
              }}
              className="
                text-sm
                text-blue-600
                font-semibold
                hover:text-blue-700
                hover:underline
              "
            >
              Forgot Password?
            </button>

          </div>


          {/* LOGIN BUTTON */}

          <button
            onClick={handleLogin}
            className="
              w-full
              py-4
              rounded-xl
              text-white
              font-semibold
              bg-blue-600
              hover:bg-blue-700
              shadow-lg
              shadow-blue-600/20
              hover:-translate-y-0.5
              transition-all
            "
          >
            Login
          </button>


          <p className="text-center text-slate-500">

            Don't have an account?{" "}

            <button
              className="
                text-blue-600
                font-semibold
                hover:text-blue-700
                hover:underline
              "
              onClick={() => {
                setMode("register");
                setStep(1);
              }}
            >
              Register
            </button>

          </p>

        </div>

      )}


      {/* ================================
          FORGOT PASSWORD
      ================================= */}

      {mode === "forgot" && (

        <div className="space-y-5 text-slate-900">

          {/* Progress */}

          <div className="flex items-center gap-2 mb-8">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className={`
                  h-2
                  flex-1
                  rounded-full
                  transition-colors

                  ${
                    item <= forgotStep
                      ? "bg-blue-600"
                      : "bg-slate-200"
                  }
                `}
              />

            ))}

          </div>


          {/* STEP 1 */}

          {forgotStep === 1 && (

            <div className="space-y-5">

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  Forgot Password?
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Enter your registered email address
                  and we'll send you an OTP.
                </p>

              </div>


              <input
                type="email"
                value={forgotForm.email}
                onChange={(e) =>
                  setForgotForm({
                    ...forgotForm,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />


              <button
                onClick={sendForgotPasswordOtp}
                className="
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-blue-600
                  hover:bg-blue-700
                  shadow-lg
                  shadow-blue-600/20
                  transition
                "
              >
                Send OTP
              </button>

            </div>

          )}


          {/* STEP 2 */}

          {forgotStep === 2 && (

            <div className="space-y-5">

              <div>

                <h3 className="text-xl font-bold">
                  Verify OTP
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Enter the OTP sent to
                </p>

                <p className="font-semibold text-sm text-slate-800">
                  {forgotForm.email}
                </p>

              </div>


              <input
                value={forgotOtp}
                onChange={(e) =>
                  setForgotOtp(e.target.value)
                }
                placeholder="Enter OTP"
                maxLength={6}
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  tracking-widest
                  text-center
                  text-lg
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />


              <button
                onClick={verifyForgotPasswordOtp}
                className="
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-blue-600
                  hover:bg-blue-700
                  shadow-lg
                  shadow-blue-600/20
                  transition
                "
              >
                Verify OTP
              </button>


              <button
                type="button"
                onClick={() => setForgotStep(1)}
                className="
                  w-full
                  text-sm
                  text-slate-500
                  hover:text-blue-600
                "
              >
                Change Email
              </button>

            </div>

          )}


          {/* STEP 3 */}

          {forgotStep === 3 && (

            <div className="space-y-5">

              <div>

                <h3 className="text-xl font-bold">
                  Create New Password
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Enter your new password below.
                </p>

              </div>


              {/* New Password */}

              <div className="relative">

                <input
                  type={
                    showForgotPassword
                      ? "text"
                      : "password"
                  }
                  value={forgotForm.password}
                  onChange={(e) =>
                    setForgotForm({
                      ...forgotForm,
                      password: e.target.value,
                    })
                  }
                  placeholder="New Password"
                  className="
                    w-full
                    border
                    border-slate-200
                    rounded-xl
                    p-4
                    pr-16
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowForgotPassword(
                      !showForgotPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-slate-500
                    hover:text-blue-600
                  "
                >
                  {showForgotPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>


              {/* Confirm Password */}

              <div className="relative">

                <input
                  type={
                    showForgotConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={
                    forgotForm.confirmPassword
                  }
                  onChange={(e) =>
                    setForgotForm({
                      ...forgotForm,
                      confirmPassword:
                        e.target.value,
                    })
                  }
                  placeholder="Confirm New Password"
                  className="
                    w-full
                    border
                    border-slate-200
                    rounded-xl
                    p-4
                    pr-16
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowForgotConfirmPassword(
                      !showForgotConfirmPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-slate-500
                    hover:text-blue-600
                  "
                >
                  {showForgotConfirmPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>


              <button
                onClick={resetPassword}
                className="
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-blue-600
                  hover:bg-blue-700
                  shadow-lg
                  shadow-blue-600/20
                  transition
                "
              >
                Reset Password
              </button>

            </div>

          )}


          {/* Back To Login */}

          <p className="text-center mt-6 text-slate-500">

            Remember your password?{" "}

            <button
              className="
                text-blue-600
                font-semibold
                hover:text-blue-700
              "
              onClick={() => {
                setMode("login");
                setForgotStep(1);
              }}
            >
              Login
            </button>

          </p>

        </div>

      )}


      {/* ================================
          REGISTER
      ================================= */}

      {mode === "register" && (

        <>

          {/* Progress */}

          <div className="flex items-center gap-2 mb-8">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className={`
                  h-2
                  flex-1
                  rounded-full
                  transition-colors

                  ${
                    item <= step
                      ? "bg-blue-600"
                      : "bg-slate-200"
                  }
                `}
              />

            ))}

          </div>


          {/* STEP 1 */}

          {step === 1 && (

            <div className="space-y-4 text-slate-900">

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  name="firstName"
                  value={regsiterForm.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="
                    border
                    border-slate-200
                    rounded-xl
                    p-4
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

                <input
                  name="lastName"
                  value={regsiterForm.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="
                    border
                    border-slate-200
                    rounded-xl
                    p-4
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

              </div>


              <input
                name="email"
                value={regsiterForm.email}
                onChange={handleChange}
                placeholder="Email"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />


              <input
                name="phone"
                value={regsiterForm.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />


              {/* Password */}

              <div className="relative">

                <input
                  name="password"
                  value={regsiterForm.password}
                  onChange={handleChange}
                  type={
                    showRegisterPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Password"
                  className="
                    w-full
                    border
                    border-slate-200
                    rounded-xl
                    p-4
                    pr-14
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowRegisterPassword(
                      !showRegisterPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-slate-500
                    hover:text-blue-600
                  "
                >
                  {showRegisterPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>


              {/* Confirm Password */}

              <div className="relative">

                <input
                  name="confirmPassword"
                  value={
                    regsiterForm.confirmPassword
                  }
                  onChange={handleChange}
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm Password"
                  className="
                    w-full
                    border
                    border-slate-200
                    rounded-xl
                    p-4
                    pr-14
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-slate-500
                    hover:text-blue-600
                  "
                >
                  {showConfirmPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>


              <button
                onClick={() => sendOtp()}
                className="
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-blue-600
                  hover:bg-blue-700
                  shadow-lg
                  shadow-blue-600/20
                  transition
                "
              >
                Send OTP
              </button>

            </div>

          )}


          {/* STEP 2 */}

          {step === 2 && (

            <div className="space-y-5 text-slate-900">

              <h3 className="font-semibold">
                Verify OTP sent to your email:
              </h3>

              <input
                value={otp}
                name="otp"
                onChange={(e) =>
                  setOtp(e.target.value)
                }
                placeholder="Enter OTP"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  tracking-widest
                  text-center
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />


              <button
                onClick={() => verifyOtp()}
                className="
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-blue-600
                  hover:bg-blue-700
                  shadow-lg
                  shadow-blue-600/20
                  transition
                "
              >
                Verify OTP
              </button>

            </div>

          )}


          {/* STEP 3 */}

          {step === 3 && (

            <div className="space-y-5 text-slate-900">

              <input
                name="techStack"
                value={regsiterForm.techStack}
                onChange={handleChange}
                placeholder="Tech Stack"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />

              <input
                name="codingLanguages"
                value={
                  regsiterForm.codingLanguages
                }
                onChange={handleChange}
                placeholder="Coding Languages"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />

              <input
                name="role"
                value={regsiterForm.role}
                onChange={handleChange}
                placeholder="Role"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />

              <input
                name="experience"
                value={regsiterForm.experience}
                onChange={handleChange}
                placeholder="Experience"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />


              {/* Projects */}

              <div>

                <div className="flex items-center justify-between mb-4">

                  <h3 className="font-bold text-lg">
                    Projects
                  </h3>

                  <button
                    type="button"
                    onClick={addProject}
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-lg
                      bg-blue-50
                      text-blue-600
                      border
                      border-blue-100
                      hover:bg-blue-100
                      transition
                    "
                  >
                    <Plus size={18} />
                    Add Project
                  </button>

                </div>


                {projects.map(
                  (project, index) => (

                    <div
                      key={index}
                      className="
                        border
                        border-slate-200
                        rounded-2xl
                        p-4
                        mb-4
                        bg-slate-50
                      "
                    >

                      <div className="flex items-center justify-between mb-3">

                        <h4 className="font-semibold text-slate-800">
                          Project {index + 1}
                        </h4>

                        {projects.length > 1 && (

                          <button
                            type="button"
                            onClick={() =>
                              removeProject(index)
                            }
                            className="
                              flex
                              items-center
                              gap-1
                              text-red-500
                              hover:text-red-600
                            "
                          >
                            <Trash2 size={18} />
                            Remove
                          </button>

                        )}

                      </div>


                      <input
                        value={project.name}
                        onChange={(e) =>
                          updateProjectName(
                            index,
                            e.target.value
                          )
                        }
                        placeholder={`Project ${
                          index + 1
                        } Name`}
                        className="
                          w-full
                          border
                          border-slate-200
                          rounded-xl
                          p-4
                          mb-3
                          bg-white
                          outline-none
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      />


                      <textarea
                        value={project.description}
                        onChange={(e) =>
                          updateProjectDescription(
                            index,
                            e.target.value
                          )
                        }
                        placeholder="Project Description"
                        rows={4}
                        className="
                          w-full
                          border
                          border-slate-200
                          rounded-xl
                          p-4
                          bg-white
                          outline-none
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      />


                      <input
                        value={
                          project.techStack || ""
                        }
                        onChange={(e) =>
                          updateProjectTechStack(
                            index,
                            e.target.value
                          )
                        }
                        placeholder={`Project ${
                          index + 1
                        } Techstack`}
                        className="
                          w-full
                          border
                          border-slate-200
                          rounded-xl
                          p-4
                          mt-3
                          bg-white
                          outline-none
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      />

                    </div>

                  )
                )}

              </div>


              {/* Register */}

              <button
                onClick={handleRegister}
                className="
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-blue-600
                  hover:bg-blue-700
                  shadow-lg
                  shadow-blue-600/20
                  hover:-translate-y-0.5
                  transition-all
                "
              >
                Register
              </button>

            </div>

          )}


          <p className="text-center text-slate-500 mt-6">

            Already have an account?{" "}

            <button
              className="
                text-blue-600
                font-semibold
                hover:text-blue-700
              "
              onClick={() =>
                setMode("login")
              }
            >
              Login
            </button>

          </p>

        </>

      )}

    </div>

  </div>

</div>
    );
}