import { Loading3QuartersOutlined } from '@ant-design/icons';

export default function ScreenLoader() {
  return (
    <div className="size-full h-screen flex items-center justify-center">
      <Loading3QuartersOutlined className="animate-spin" />
    </div>
  );
}
