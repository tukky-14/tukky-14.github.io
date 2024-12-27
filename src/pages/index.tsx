import CommonHead from '@/components/CommonHead';
import Header from '@/components/Header';
import Aboutme from '@/components/Aboutme';
import Works from '@/components/Works';
import MySkills from '@/components/MySkills';
import Links from '@/components/Links';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="bg-gray-100">
            <CommonHead />
            <Header />
            <div className="w-4/5 sm:w-2/3 m-auto mb-6">
                <Aboutme />
                <Works />
                <MySkills />
                <Links />
            </div>
            <Footer />
        </main>
    );
}
