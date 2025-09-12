import { BellOutlined, CheckOutlined, MoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Divider, Popover } from 'antd';

export default function NotificationPopover() {
  function content() {
    return (
      <div className="w-sm">
        <header className="flex items-center justify-between">
          <h3 className="font-medium">Thông báo</h3>
          <Popover
            content={
              <div className="flex flex-col gap-1">
                <Button className="justify-start" icon={<CheckOutlined />} type="text">
                  Đánh dấu tất cả là đã đọc
                </Button>
                <Button className="justify-start" icon={<SettingOutlined />} type="text">
                  Cài đặt thông báo
                </Button>
              </div>
            }
            trigger="hover"
            placement="bottomRight"
          >
            <Button type="text" icon={<MoreOutlined />} />
          </Popover>
        </header>
        <Divider className="my-2" />
        <div>Notifications content</div>
      </div>
    );
  }

  return (
    <Popover content={content} trigger="click" placement="bottomRight">
      <Button
        type="text"
        shape="circle"
        size="large"
        icon={<BellOutlined />}
        className="text-primary-foreground"
      />
    </Popover>
  );
}
