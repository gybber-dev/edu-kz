import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/customAntdStyles.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />;
  </Layout>
)

export default MyApp;
