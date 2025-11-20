import React from "react";
import bannar from "@/src/assets/bannar.jpg";

export default function Hero() {
  return (
    <div
      className={`text-white min-h-[30vh] sm:min-h-[80vh] bg-cover bg-center flex items-center bg-[url('/bannar.jpg')]`}
    >
      <div className="max-w-[1200px] mx-auto text-center px-4">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          RecoverMe – Smart Lost & Found System
        </h1>

        <p className="text-lg w-[80%] mx-auto text-center sm:text-xl md:text-3xl font-medium leading-relaxed">
          An intelligent platform that uses community verification to help people
          recover lost belongings faster and more reliably.
        </p>

      </div>
    </div>
  );
}
