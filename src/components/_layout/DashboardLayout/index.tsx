import RolesGuard from '@/components/RolesGuard';
import { type RoleEnum } from '@/config/roles';
import { Breadcrumb, Button, Flex, Space } from 'antd';
import { Outlet } from 'react-router';
import SearchBox from '@/components/_layout/DashboardLayout/components/SearchModal';
import AvatarPopover from '@/components/_layout/DashboardLayout/components/AvatarPopover';
import { MessageOutlined, SunOutlined } from '@ant-design/icons';
import NotificationPopover from '@/components/_layout/DashboardLayout/components/NotificationPopover';
import Logo from '@/components/_layout/DashboardLayout/components/Logo';
import Sidebar from '@/components/_layout/DashboardLayout/components/Sidebar';

type DashboardLayoutProps = {
  role: RoleEnum;
};

export default function DashboardLayout({ role }: DashboardLayoutProps) {
  return (
    <RolesGuard hasRoles={[role]}>
      <Flex className="w-full h-screen flex-col min-h-[600px]">
        <Flex
          align="center"
          justify="space-between"
          className="h-12 w-full bg-primary/90 sticky top-0 left-0 text-primary-foreground px-2 md:px-4 lg:px-6"
        >
          <Logo />
          <Space>
            <SearchBox />

            <Space size={1}>
              <Button
                type="text"
                shape="circle"
                icon={<MessageOutlined />}
                className="text-primary-foreground"
              />
              <NotificationPopover />
              <Button
                type="text"
                shape="circle"
                icon={<SunOutlined />}
                className="text-primary-foreground"
              />
            </Space>
            <AvatarPopover />
          </Space>
        </Flex>
        <Flex>
          <Sidebar />
          <Flex className="flex-1 flex-col">
            <div className="h-9 w-full border-b">
              <Breadcrumb />
            </div>
            <Outlet />
          </Flex>
        </Flex>
      </Flex>
    </RolesGuard>
  );
}
