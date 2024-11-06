import Header from '../components/Header';

export default function About() {
    return (
        <div>
            <Header />
            <main className="p-4 text-center">
                <h2 className="text-3xl font-bold">About Us</h2>
                <p className="mt-4 text-lg">Julien Training Center offers personalized training programs to fit your unique fitness goals. Our trainers are dedicated to helping you every step of the way.</p>
            </main>
        </div>
    );
}