import React, { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [dragging, setDragging] = useState(null);

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
      <div className="flex flex-col items-center mt-20 relative">
        {/* Yellow Rectangle */}
        <motion.div
          drag="y"
          dragConstraints={{ top: -90, bottom: 20 }}
          onDragStart={() => setDragging(1)}
          onDragEnd={() => setDragging(null)}
          whileTap={{ scale: 1.05 }}
          className="w-[450px] h-[400px] bg-basic-yellow rounded-[20%] absolute"
          style={{ zIndex: dragging === 1 ? 10 : 1 }}
        >
          {/* Oval */}
          <div className="w-[150px] h-[50px] bg-black rounded-[70%] top-[-25px] left-1/2 -translate-x-1/2 absolute">
            <div className="w-[90px] h-[10px] bg-basic-yellow rounded-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-0.7" />
          </div>
        </motion.div>

        {/* Red Rectangle */}
        <motion.div
          drag="y"
          dragConstraints={{ top: -60, bottom: 70 }}
          onDragStart={() => setDragging(2)}
          onDragEnd={() => setDragging(null)}
          whileTap={{ scale: 1.05 }}
          className="w-[450px] h-[350px] bg-basic-red rounded-[20%] absolute translate-y-20"
          style={{ zIndex: dragging === 2 ? 10 : 2 }}
        >
          {/* Oval */}
          <div className="w-[150px] h-[50px] bg-basic-yellow rounded-[70%] top-[-25px] left-1/2 -translate-x-1/2 absolute">
            <div className="w-[90px] h-[10px] bg-basic-red rounded-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-0.7" />
          </div>
        </motion.div>

        {/* Blue Rectangle */}
        <motion.div
          drag="y"
          dragConstraints={{ top: -10, bottom: 140 }}
          onDragStart={() => setDragging(3)}
          onDragEnd={() => setDragging(null)}
          whileTap={{ scale: 1.05 }}
          className="w-[450px] h-[300px] bg-basic-blue rounded-[20%] absolute translate-y-40"
          style={{ zIndex: dragging === 3 ? 10 : 3 }}
        >
          {/* Oval */}
          <div className="w-[150px] h-[50px] bg-basic-red rounded-[70%] top-[-25px] left-1/2 -translate-x-1/2 absolute">
            <div className="w-[90px] h-[10px] bg-basic-blue rounded-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-0.7" />
          </div>

          {/* White Rectangle */}
          <div className="w-[350px] h-[90px] bg-white rounded-xl absolute bottom-9 left-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
