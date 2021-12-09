import Head from 'next/head';

interface Props {
  children?: any | any[];
  title?: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title ? `${title} |` : ''} Datacat</title>
        <meta name="description" content="An open source uptime monitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
}
