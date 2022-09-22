import React from "react";
import Head from "next/head";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { ImEnter } from "react-icons/im";
import LoginImg from "../public/img/Login.png";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>NextJS_Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center  w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl sm:w-full">
          <div className="lg:w-3/5 md:w-full p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Femist</span> CRM
            </div>
            <div className="py-10">
              <div className="flex flex-row justify-center items-center">
                <ImEnter className="text-2xl mx-2" />
                <h2 className="text-3xl font-bold text-green-500 mb-2">
                  Tizimga kirish
                </h2>
              </div>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex flex-col items-center mt-7 sm:w-full">
                <div className="bg-gray-100 w-80 sm:w-4/5 sm:shrink p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Foydalanuvchi nomi"
                    className="bg-gray-100 outline-none text-sm"
                  />
                </div>
                <div className="bg-gray-100 w-80 sm:w-4/5 p-2 flex items-center mb-5">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="email"
                    placeholder="Parol"
                    className="bg-gray-100 outline-none text-sm"
                  />
                </div>
                <div className="flex justify-between w-80  mb-8 sm:px-8">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" name="remember" className="mr-1" />
                    remember me
                  </label>
                  <a href="#" className="text-sm text-red-500">
                    Parolni unutdim?
                  </a>
                </div>
                <a
                  href="#"
                  className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white "
                >
                  Kirish
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/5 hidden md:block lg:block bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-2">
            <Image src={LoginImg} alt="/" className="w-full" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
