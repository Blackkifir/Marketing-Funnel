import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YourPlan from '@/components/YourPlan';
import Features from '@/components/Features';
import Achievements from '@/components/Achievements';
import Rating from '@/components/Rating';
import { useRouter } from 'next/router';
import PageMetadata from '../assets/PageMetadata';

export const metadata = {
  title: 'Marketing-Center',
};

export default function MarketingCenter() {
  const router = useRouter();

  const onClickBackProgress = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push('/progress');
  };

  return (
    <div>
      <PageMetadata title={metadata.title} />
      <div>
        <Header
          onClickBackProgress={onClickBackProgress}
        />
        <YourPlan />
        <Features />
        <Achievements />
        <Rating />
        <YourPlan />
        <Footer />
      </div>
    </div>
  );
}
