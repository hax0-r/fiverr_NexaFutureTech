// import HomePage from "./(Pages)/home/page";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Image
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          alt="Logo"
          width={300}
          height={300}
          className="mb-8 h-40"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize text-center text-gray-700 mb-4">
          Site is under maintenance
        </h1>
        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">
          We're working to improve the user experience. Stay tuned!
        </p>
      </div>

    </>
  );
}
