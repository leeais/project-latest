import { BellOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function NotificationModal() {
  return (
    <>
      <Button
        type="text"
        shape="circle"
        size="large"
        icon={<BellOutlined />}
        className="text-primary-foreground"
      />
    </>
  );
}
