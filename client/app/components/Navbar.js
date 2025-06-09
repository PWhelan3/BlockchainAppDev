export default function Navbar() {
    return (
      <nav className="w-full bg-gray-800 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Current</h1>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/events" className="hover:underline">Events</a>
          <a href="/users" className="hover:underline">Profile</a>
        </div>
      </nav>
    );
  }
