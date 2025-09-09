import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

import AppRouter from '@/routes';

export default function App() {
  return (
    <>
      <StyleProvider layer>
        <ConfigProvider>
          <AppRouter />
        </ConfigProvider>
      </StyleProvider>
    </>
  );
}
