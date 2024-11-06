import Header from '../components/Header';

export default function Services() {
    return (
        <div>
            <Header />
            <main className="p-4">
                <h2 className="text-3xl font-bold text-center">Our Services</h2>
                <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white shadow-md rounded-md">
                        <h3 className="text-xl font-semibold">Personal Training</h3>
                        <p className="mt-2">Get one-on-one training sessions with our certified trainers.</p>
                    </div>
                    <div className="p-4 bg-white shadow-md rounded-md">
                        <h3 className="text-xl font-semibold">Group Classes</h3>
                        <p className="mt-2">Join our fitness community with a variety of group classes to choose from.</p>
                    </div>
                    <div className="p-4 bg-white shadow-md rounded-md">
                        <h3 className="text-xl font-semibold">Nutrition Planning</h3>
                        <p className="mt-2">Personalized nutrition plans to complement your training.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}