import PageMetadata from '../assets/PageMetadata';

export const metadata = {
  title: 'Contacts',
};

export default function Contacts() {
  return (
    <div>
      <PageMetadata title={metadata.title} />
      Contacts
    </div>
  );
}
