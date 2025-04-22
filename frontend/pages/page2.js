import Link from "next/link";

export default function Page2() {
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
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">MRICH</h1>
        <p className="text-lg sm:text-xl">
          โรงเรียน "สร้างนิสัย" <br></br>ที่ทำให้คุณมีความสุขเเละความสำเร็จใน<br></br>ทุกด้านของชีวิต
        </p>
      </div>

      {/* Sign In and Sign Up Buttons with Separator */}
      <div className="relative z-10 mt-6 flex flex-col items-center gap-4">
        {/* Sign In Button */}
        <Link
          href="/signin"
          className="w-48 rounded-full transition-colors bg-[#FFCC3E] text-black hover:bg-yellow-500 text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 flex items-center justify-center"
        >
          Sign In
        </Link>

        {/* Separator */}
        <div className="text-sm sm:text-base text-gray-300">-----------OR------------</div>

        {/* Sign Up Button */}
        <Link
          href="/signup"
          className="w-48 rounded-full transition-colors border border-solid border-white bg-transparent text-white hover:bg-white hover:text-black text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 flex items-center justify-center"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
