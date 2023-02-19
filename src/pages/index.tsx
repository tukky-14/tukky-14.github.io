import CommonHead from '@/components/CommonHead';
import Header from '@/components/Header';
import Aboutme from '@/components/AboutMe';
import Works from '@/components/Works';
import MySkills from '@/components/MySkills';
import Links from '@/components/Links';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <CommonHead />
            <main className="bg-gray-100">
                <Header />
                <div className="w-4/5 sm:w-2/3 m-auto mb-6">
                    <Aboutme />
                    <Works />
                    <MySkills />
                    <Links />
                </div>
                <Footer />
            </main>
        </>
    );
}
