import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Julien Training Center</h1>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-teal-500">Home</Link>
                    <Link href="/about" className="hover:text-teal-500">About</Link>
                    <Link href="/services" className="hover:text-teal-500">Services</Link>
                    <Link href="/contact" className="hover:text-teal-500">Contact</Link>
                </nav>
            </div>
        </header>
    );
}