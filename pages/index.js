import Head from 'next/head';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Sidebar />
        <Content />
        <Rightbar />
      </Layout>
    </div>
  );
}
