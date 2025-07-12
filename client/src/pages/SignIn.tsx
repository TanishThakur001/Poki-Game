import { useState } from "react";
import Intro from "../assests/Intro.mp4";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Welcome to the Pokémon world, Trainer!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-500 to-green-400 p-2 sm:p-4 flex items-center justify-center relative">
      {/* Grass Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBkPSJNMjUgMjVjMC0xMy44IDExLjItMjUgMjUtMjVzMjUgMTEuMiAyNSAyNS0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjV6IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30"></div>

      {/* Desktop/Tablet - Handheld Console */}
      <div className="hidden md:block relative max-w-6xl w-full">
        <div className="bg-gradient-to-b from-red-500 via-red-600 to-red-700 rounded-3xl shadow-2xl border-8 border-red-800 p-8 relative">
          {/* Top Console Curve */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-red-600 rounded-full border-4 border-red-800"></div>

          {/* Nintendo Branding Bar */}
          <div className="absolute top-[-0.9rem] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-800 to-black text-white px-8 py-1 rounded-full border-2 border-gray-900 shadow-lg">
            <div
              className="font-bold text-sm tracking-wider"
              style={{ fontFamily: "monospace" }}
            >
              NINTENDO
            </div>
          </div>

          {/* Main Screen and Controls Layout */}
          <div className="mt-8 bg-gray-800 rounded-2xl border-4 border-gray-600 p-6 shadow-inner">
            {/* Screen Header */}
            <div className="text-center mb-4">
              <div className="bg-black text-green-400 px-4 py-2 rounded border-2 border-gray-600 inline-block">
                <div className="font-mono text-sm animate-pulse">
                  ♦ POKÉMON TRAINER SYSTEM ♦
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex gap-6 h-96">
              {/* Left Control Panel */}
              <div className="w-80 bg-gradient-to-b from-gray-300 to-gray-400 rounded-xl border-4 border-gray-600 p-4 shadow-lg">
                {/* Controls Header */}
                <div className="text-center mb-4">
                  <div className="bg-red-600 text-white px-3 py-1 rounded border-2 border-red-800 text-xs font-bold">
                    TRAINER SIGN-IN
                  </div>
                </div>

                {/* Pokéball Status */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-red-500 border-2 border-black relative shadow-lg">
                      <div className="w-10 h-5 bg-red-500 rounded-t-full"></div>
                      <div className="w-10 h-5 bg-white rounded-b-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-black"></div>
                    </div>
                  </div>
                </div>

                {/* Form Controls */}
                <div className="space-y-3">
                  {/* Email Input */}
                  <div className="bg-gray-800 rounded-lg border-4 border-gray-700 p-3">
                    <label
                      className="block text-xs font-bold text-green-400 mb-1 tracking-wide"
                      style={{ fontFamily: "monospace" }}
                    >
                      ▶ TRAINER ID
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black text-green-400 border-2 border-green-600 px-2 py-1 text-xs font-mono focus:outline-none focus:border-green-300 rounded"
                      placeholder="ASH@PALLET.TOWN"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="bg-gray-800 flex items-center rounded-lg border-4 border-gray-700 p-3">
                    <div className=" w-7/8 ">
                      <label
                        className="block text-xs font-bold text-green-400 mb-1 tracking-wide"
                        style={{ fontFamily: "monospace" }}
                      >
                        ▶ ACCESS CODE
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-black text-green-400 border-2 border-green-600 px-2 py-1 text-xs font-mono focus:outline-none focus:border-green-300 rounded"
                        placeholder="PIKACHU123"
                        required
                      />
                    </div>

                    <div className="ml-3 mt-6 text-white">
                      <button
                        type="button"
                        className=""
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="size-5 text-base-content/40" />
                        ) : (
                          <Eye className="size-5 text-base-content/40" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className={`w-full py-2 px-3 rounded-lg border-2 font-bold text-xs tracking-wide transition-all duration-200 ${
                        isLoading
                          ? "bg-gray-500 border-gray-700 text-gray-300 cursor-not-allowed"
                          : "bg-red-500 border-red-700 text-white hover:bg-red-400 hover:transform hover:scale-105 active:scale-95 shadow-md"
                      }`}
                      style={{ fontFamily: "monospace" }}
                    >
                      {isLoading ? "CONNECTING..." : "★ START ★"}
                    </button>

                    <div className="mb-13">
                      <div
                        className=" mb-8 ml-4 font-semibold  text-green-700 text-sm "
                        style={{ fontFamily: "monospace" }}
                      >
                        Don't have an account?{" "}
                        <Link
                          className="text-green-700 font-bold  hover:text-green-300 "
                          to="/signup"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* D-Pad */}
                <div className="flex justify-center mt-4">
                  <div className="relative w-16 h-16">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-gray-600 border-2 border-gray-800 rounded"></div>
                    <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-12 h-4 bg-gray-600 border-2 border-gray-800 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-700 border-2 border-gray-800 rounded-full"></div>
                  </div>
                </div>

                {/* Status Display */}
                <div className="mt-3">
                  <div className="bg-black text-yellow-400 p-2 rounded border-2 border-gray-600 text-xs font-mono text-center">
                    {isLoading ? (
                      <div className="animate-pulse">LOADING...</div>
                    ) : (
                      <div>READY!</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-black rounded-xl border-4 border-gray-700 relative overflow-hidden shadow-inner">
                <div className="absolute inset-3 bg-gray-900 rounded-lg border-2 border-gray-600">
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden rounded">
                    <div className="w-full h-full bg-black rounded-xl border-4 border-gray-700 relative overflow-hidden shadow-inner">
                      <video
                        className="w-full h-full"
                        src={Intro}
                        loop
                        autoPlay
                        muted
                      ></video>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1 right-2 text-xs text-gray-400 font-mono">
                  LCD
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="w-24 flex flex-col justify-center space-y-4">
                {/* A Button */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full border-4 border-red-700 flex items-center justify-center shadow-lg hover:bg-red-400 transition-all cursor-pointer">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-xs text-gray-600 font-mono mt-1">
                    ACTION
                  </span>
                </div>

                {/* B Button */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full border-4 border-yellow-700 flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-all cursor-pointer">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="text-xs text-gray-600 font-mono mt-1">
                    BACK
                  </span>
                </div>

                {/* Power LED */}
                <div className="flex flex-col items-center mt-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse border border-green-700"></div>
                  <span className="text-xs text-gray-600 font-mono mt-1">
                    PWR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Console Elements */}
          <div className="mt-4 flex justify-between items-center">
            {/* Speaker Grilles */}
            <div className="flex space-x-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1 h-6 bg-gray-600 rounded-full"></div>
              ))}
            </div>

            {/* Model Info */}
            <div className="text-center">
              <div className="text-xs text-gray-700 font-mono">
                POKÉMON EDITION
              </div>
              <div className="text-xs text-gray-600 font-mono">
                MODEL: PKM-001
              </div>
            </div>

            {/* Speaker Grilles Right */}
            <div className="flex space-x-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1 h-6 bg-gray-600 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Bottom Rubber Feet */}
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-gray-800 rounded-full"></div>
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-gray-800 rounded-full"></div>
        </div>

        {/* Console Shadow */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black opacity-30 rounded-full blur-lg"></div>
      </div>

      {/* Mobile - Nintendo Switch Pro Controller Style */}
      <div className="md:hidden w-full max-w-sm mx-auto">
        <div className="bg-gradient-to-b from-red-500 via-red-600 to-red-700 rounded-2xl shadow-2xl border-6 border-red-800 p-4 relative">
          {/* Nintendo Switch Pro Controller Header */}
          <div className="text-center mb-4">
            <div className="bg-black text-white px-4 py-2 rounded-full border-2 border-gray-800 inline-block">
              <div
                className="font-bold text-xs tracking-wider"
                style={{ fontFamily: "monospace" }}
              >
                NINTENDO SWITCH PRO
              </div>
            </div>
            <div className="bg-red-600 text-white px-3 py-1 rounded border-2 border-red-800 text-xs font-bold mt-2">
              POKÉMON TRAINER SYSTEM
            </div>
          </div>

          {/* Video Screen Area - Takes most space on mobile */}
          <div className="bg-black rounded-xl border-4 border-gray-700 mb-4 h-48 relative overflow-hidden">
            <div className="absolute inset-2 bg-gray-900 rounded-lg border-2 border-gray-600">
              <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden rounded">
                {/* Mobile CRT Effect */}
                <div className="w-full h-full bg-black rounded-xl border-4 border-gray-700 relative overflow-hidden shadow-inner">
                  <video
                    className="w-full h-full"
                    src={Intro}
                    loop
                    autoPlay
                    muted
                  ></video>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Controls Layout */}
          <div className="space-y-3">
            {/* Top Row - Control Sticks Representation */}
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-800 relative">
                <div className="w-4 h-4 bg-gray-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-red-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-800 relative">
                <div className="w-4 h-4 bg-gray-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-gray-800 rounded-lg border-3 border-gray-700 p-3">
              <div className="text-center mb-3">
                <div className="w-8 h-8 mx-auto rounded-full bg-red-500 border-2 border-black relative">
                  <div className="w-8 h-4 bg-red-500 rounded-t-full"></div>
                  <div className="w-8 h-4 bg-white rounded-b-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-black"></div>
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label
                  className="block text-xs font-bold text-green-400 mb-1"
                  style={{ fontFamily: "monospace" }}
                >
                  ▶ TRAINER ID
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black text-green-400 border-2 border-green-600 px-2 py-1 text-xs font-mono focus:outline-none focus:border-green-300 rounded"
                  placeholder="ASH@PALLET.TOWN"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="bg-gray-800 flex items-center rounded-lg border-gray-700 pb-2">
                    <div className=" w-7/8 ">
                      <label
                        className="block text-xs font-bold text-green-400 mb-1 tracking-wide"
                        style={{ fontFamily: "monospace" }}
                      >
                        ▶ ACCESS CODE
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-black text-green-400 border-2 border-green-600 px-2 py-1 text-xs font-mono focus:outline-none focus:border-green-300 rounded"
                        placeholder="PIKACHU123"
                        required
                      />
                    </div>

                    <div className="ml-3 mt-6 text-white">
                      <button
                        type="button"
                        className=""
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="size-5 text-base-content/40" />
                        ) : (
                          <Eye className="size-5 text-base-content/40" />
                        )}
                      </button>
                    </div>
                  </div>

              {/* Mobile Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`w-full py-2 px-3 rounded-lg border-2 font-bold text-xs tracking-wide transition-all duration-200 ${
                    isLoading
                      ? "bg-gray-500 border-gray-700 text-gray-300 cursor-not-allowed"
                      : "bg-red-500 border-red-700 text-white hover:bg-red-400 active:scale-95 shadow-md"
                  }`}
                  style={{ fontFamily: "monospace" }}
                >
                  {isLoading ? "CONNECTING..." : "★ START ADVENTURE ★"}
                </button>
                <div
                  className=" mb-2 ml-4 font-semibold  text-green-600 text-sm "
                  style={{ fontFamily: "monospace" }}
                >
                  Don't have an account?{" "}
                  <Link
                    className="text-green-600 font-bold  hover:text-green-300 "
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Controls Row */}
            <div className="flex justify-between items-center">
              {/* Left D-Pad */}
              <div className="relative w-12 h-12">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-10 bg-gray-600 border-2 border-gray-800 rounded"></div>
                <div className="absolute top-1/2 left-1 transform -translate-y-1/2 w-10 h-3 bg-gray-600 border-2 border-gray-800 rounded"></div>
              </div>

              {/* Center Status */}
              <div className="bg-black text-yellow-400 px-3 py-1 rounded border border-gray-600 text-xs font-mono">
                {isLoading ? (
                  <div className="animate-pulse">LOADING...</div>
                ) : (
                  <div>READY!</div>
                )}
              </div>

              {/* Right Buttons */}
              <div className="flex space-x-1">
                <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-red-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-yellow-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Brand Info */}
          <div className="text-center mt-3">
            <div className="text-xs text-gray-700 font-mono">
              POKÉMON EDITION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
