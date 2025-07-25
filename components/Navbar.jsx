"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {
  const { isSeller, router } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <h1 className="font-bold text-2xl">
        Devils<span className="font-semibold text-orange-600">Wine</span>
      </h1>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Inicio
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Tienda
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Sobre Nosotros
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contacto
        </Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Panel del Vendedor
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4">
        <Image
          className="w-4 h-4"
          src={assets.search_icon}
          alt="ícono de búsqueda"
        />
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="ícono de usuario" />
          Cuenta
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Panel del Vendedor
          </button>
        )}
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="ícono de usuario" />
          Cuenta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
