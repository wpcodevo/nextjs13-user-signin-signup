import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <div className="flex gap-1 text-blue-600">
        <Link href="/login" className="underline">
          Login
        </Link>
        <Link href="/register" className="underline">
          Register
        </Link>
        <Link href="/profile" className="underline">
          Profile
        </Link>
      </div>
    </main>
  );
}
