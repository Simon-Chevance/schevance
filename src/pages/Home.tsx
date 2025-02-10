import { useState } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import LoadingBar from "../components/LoadingBar";

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="min-h-screen">
            {loading ? (
                <div className="flex items-center justify-center min-h-screen">
                    <LoadingBar onComplete={() => setLoading(false)} />
                </div>
            ) : (
                <div className="animate-fadeIn">
                    <NavBar />
                    <Skills />
                    <Footer />
                </div>
            )}
        </div>
    );
}
