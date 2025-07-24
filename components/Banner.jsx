import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
      <Image className="max-w-56" src={assets.copa_vino} alt="Imagen de vino" />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
          Eleva tu experiencia con nuestros vinos premium
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          Desde vinos tintos intensos hasta blancos refrescantes — descubre la
          selección perfecta para cada ocasión.
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white">
          Comprar ahora
          <Image
            className="group-hover:translate-x-1 transition"
            src={assets.arrow_icon_white}
            alt="Ícono de flecha"
          />
        </button>
      </div>
      <Image
        className="hidden md:block max-w-90"
        src={assets.campo_uvas}
        alt="Imagen de copa de vino"
      />
      <Image
        className="md:hidden"
        src={assets.sm_controller_image}
        alt="Imagen de copa de vino móvil"
      />
    </div>
  );
};

export default Banner;
