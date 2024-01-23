import Redirect from './redirect';

export const metadata = {
  title: 'Marketing-Funnel',
};

export default function RootLayout() {
  return (
    <div>
      <Redirect />
    </div>
  );
}
