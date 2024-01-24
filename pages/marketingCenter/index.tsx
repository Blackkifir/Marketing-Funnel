import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YourPlan from '@/components/YourPlan';
import Features from '@/components/Features';
import Achievements from '@/components/Achievements';
import Rating from '@/components/Rating';
import PageMetadata from '../assets/PageMetadata';

export const metadata = {
  title: 'Marketing-Center',
};

export default function MarketingCenter() {
  return (
    <div>
      <PageMetadata title={metadata.title} />
      <div>
        <Header />
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
