import Header from './components/Header';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Header />
            <main className="bg-gray-100 min-h-screen">
                <section className="relative h-screen flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: "url('/hero-gym.jpg')" }}>
                    <div className="bg-black bg-opacity-50 text-white p-8 rounded">
                        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Julien Training Center</h1>
                        <p className="mt-4 text-lg md:text-xl">Empowering you to unleash your potential.</p>
                        <button className="mt-8 bg-teal-500 text-white font-semibold py-2 px-6 rounded hover:bg-teal-400">
                            Join Now
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}