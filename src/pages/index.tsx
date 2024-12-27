import CommonHead from '@/components/CommonHead';
import Header from '@/components/Header';
import Aboutme from '@/components/Aboutme';
import Works from '@/components/Works';
import MySkills from '@/components/MySkills';
import Links from '@/components/Links';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

export default function Home() {
    return (
        <main className="bg-gray-100">
            <CommonHead />
            <Header />
            <Container>
                <Aboutme />
                <Works />
                <MySkills />
                <Links />
            </Container>
            <Footer />
        </main>
    );
}
