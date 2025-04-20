import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/Create">Create</Link>
      <Link href="/Practice">Practice</Link>
    </nav>
  );
}