import Header from '../components/Header';

export default function Contact() {
    return (
        <div>
            <Header />
            <main className="p-4 max-w-screen-md mx-auto">
                <h2 className="text-3xl font-bold text-center">Contact Us</h2>
                <form className="mt-8 flex flex-col space-y-4">
                    <input type="text" placeholder="Your Name" className="p-2 border border-gray-300 rounded" />
                    <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded" />
                    <textarea rows={4} placeholder="Your Message" className="p-2 border border-gray-300 rounded"></textarea>
                    <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-400">
                        Send Message
                    </button>
                </form>
            </main>
        </div>
    );
}