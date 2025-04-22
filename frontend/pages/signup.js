import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      await signIn("email", { email, callbackUrl: "/home" });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/home" });
  };

  const handleFacebookSignIn = () => {
    signIn("facebook", { callbackUrl: "/home" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center text-center text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2 text-black">Sign Up</h1>
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Signin
          </a>
        </p>

        <form onSubmit={handleEmailSignIn} className="mt-6">
          <label htmlFor="email" className="block text-sm text-left">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-left mt-2">
            <a href="/forgot-email" className="text-blue-500 text-sm hover:underline">
              Forgot Email?
            </a>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600"
          >
            Continue with Email
          </button>
        </form>

        <div className="relative mt-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="mt-6 space-y-2">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-black"
          >
            <img
              src="/google.png"
              alt="Google"
              className="h-6 w-7 object-contain mr-2"
            />
            Continue with Google
          </button>
          <button
            onClick={handleFacebookSignIn}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-black"
          >
            <img
              src="/facebook.png"
              alt="Facebook"
              className="h-6 w-7 object-contain mr-2"
            />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}