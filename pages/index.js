import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      <Link href="/dashboard" legacyBehavior>
        <a className="text-blue-500 underline">Go to Dashboard</a>
      </Link>
    </div>
  );
}
