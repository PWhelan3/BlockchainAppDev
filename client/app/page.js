import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="w-64 relative" style={{ paddingTop: '10%', alignItems: 'center', display: 'flex' }}
      >
        <Image src="/logo.png" alt="Logo" fill style={{ objectFit: 'contain' }} />
      </div>


      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Current</h1>
        <p className="text-lg text-gray-300">Your very own Web3-powered community event platform.</p>
      </div>

    </div>

  );
}

