import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <div className="flex items-center px-4 md:px-8 py-3 justify-between border-b">
      <h1 className="font-bold text-2xl">
        Devils<span className="font-semibold text-orange-600">Wine</span>
      </h1>
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Navbar;
