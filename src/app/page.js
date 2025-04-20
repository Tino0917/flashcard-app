import Link from 'next/link';
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <h1>Flashcard App</h1>
      <div className="grid">
        <Link href="/Create" className="card">
          <h2>Create Flashcards &rarr;</h2>
        </Link>
        <Link href="/Practice" className="card">
          <h2>Practice Mode &rarr;</h2>
        </Link>
      </div>
      <Footer />
    </div>
  );
}