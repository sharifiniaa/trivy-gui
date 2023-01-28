import { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
