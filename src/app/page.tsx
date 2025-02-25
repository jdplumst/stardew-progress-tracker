import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-300 to-green-200 p-4">
      <div className="relative w-full max-w-2xl">
        {/* Sun */}
        <div className="absolute left-[-50px] top-[-50px] h-32 w-32 animate-pulse rounded-full bg-yellow-300 opacity-75"></div>

        {/* Content area */}
        <div className="relative rounded-lg bg-white bg-opacity-80 p-8 shadow-lg backdrop-blur-sm">
          <h1 className="text-brown-700 mb-4 text-center text-4xl font-bold md:text-5xl">
            Stardew Valley Progress Tracker
          </h1>
          <p className="mb-6 text-center text-lg text-green-800">
            Track your journey through Pelican Town! Monitor your fishing
            achievements, community center progress, and museum contributions
            all in one place.
          </p>
          <div className="flex justify-center">
            <Link
              href="/signin"
              className="rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Start Tracking
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
