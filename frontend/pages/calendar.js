import React from "react";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-center py-4 space-x-4">
        <button className="bg-basic-yellow px-4 py-2 rounded-full text-black font-bold">HOME</button>
        <button className="bg-white px-4 py-2 rounded-full text-black font-bold">21 DAYS</button>
        <button className="bg-white px-4 py-2 rounded-full text-black font-bold">COACH</button>
        <button className="bg-white px-4 py-2 rounded-full text-black font-bold">4S</button>
      </nav>

      {/* Course Cards */}
      <div className="flex flex-col items-center mt-10 space-y-4">
        {/* Card 1 */}
        <div className="bg-basic-yellow w-80 p-4 rounded-lg text-black">
          <p className="text-sm">120 LECTURE</p>
          <h2 className="text-2xl font-bold">หลักการทำงานเป็นทีม</h2>
          <p className="text-right text-xl">05 COURSES</p>
        </div>

        {/* Card 2 */}
        <div className="bg-basic-red w-80 p-4 rounded-lg">
          <p className="text-sm">189 LECTURE</p>
          <h2 className="text-2xl font-bold">เริ่มต้นอย่างไร</h2>
          <p className="text-right text-xl">13 COURSES</p>
        </div>

        {/* Card 3 */}
        <div className="bg-basic-blue w-80 p-4 rounded-lg">
          <p className="text-sm">120 LECTURE</p>
          <h2 className="text-2xl font-bold">การตอบข้อโต้แย้ง</h2>
          <p className="text-right text-xl">21 COURSES</p>
        </div>

        {/* Video Button */}
        <div className="bg-white w-80 p-4 rounded-lg text-black flex items-center justify-center">
          <button className="flex items-center space-x-2">
            <span className="text-lg font-bold">คลิปให้กำลังใจ</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A2 2 0 009 10.132v3.736a2 2 0 002.555 1.867l3.197-2.132a2 2 0 000-3.334z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
