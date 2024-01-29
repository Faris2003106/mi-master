import { useRouter } from 'next/router';
// import Header from './header';
import Footer from './footer';
import SecondHeader from '@/pages/secondHeader';

const MainLayout = ({ children }) => {
    const router = useRouter();
    const showHeader = router.pathname !== '/';

    return (
    <>
        {showHeader && <SecondHeader />}
        {children}
        <Footer />
    </>
    );
};

export default MainLayout;