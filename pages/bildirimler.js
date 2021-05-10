import Head from 'next/head';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Timeline from '../components/Timeline';
import Sidebar from '../components/Sidebar';

export default function Bildirimler() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Sidebar />
        <Content />
        <Timeline />
      </Layout>
    </div>
  );
}
