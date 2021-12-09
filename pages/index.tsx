import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Datacat</title>
        <meta name="description" content="An open source uptime monitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Datacat</h1>
    </>
  );
};

export default Home;
