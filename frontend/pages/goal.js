import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Goal() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/home");
  };
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    // Enable the button after 10 seconds (10000ms)
    const timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 10000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center text-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Main Content */}
      <div className="relative z-10 p-6">
        <div className="bg-black/60 p-6 rounded-xl text-center text-white shadow-lg">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">เป้าหมายองค์กร</h1>
          <p className="text-lg sm:text-xl">เป้าหมายองค์กรคือ .....</p>
        </div>
      </div>


      {/* Continue Button */}
      <button
        className={`z-10 w-48 rounded-full transition-colors border border-solid border-white h-10 sm:h-12 px-4 sm:px-5${isButtonEnabled
            ? "cursor-pointer bg-white text-black"
            : "cursor-not-allowed opacity-50"
          }`}
        disabled={!isButtonEnabled}
        onClick={navigateToHome}
      >
        Back
      </button>
    </div>
  );
}
