import Head from 'next/head';

type PageMetaData = {
  title: string,
};
export default function PageMetadata({ title }: PageMetaData) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
