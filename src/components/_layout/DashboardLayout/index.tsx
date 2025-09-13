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
        <header className="h-12 flex items-center justify-between shrink-0 w-full bg-primary sticky top-0 left-0 text-primary-foreground px-6">
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
        </header>

        <Flex>
          <Sidebar />

          <Flex className="flex-1 flex-col">
            <div className="h-9 w-full border-b sticky right-0 top-12 bg-background">
              <Breadcrumb />
            </div>

            <main className="bg-muted min-h-[calc(100vh-21*4px)]">
              <Outlet />
            </main>
          </Flex>
        </Flex>
      </Flex>
    </RolesGuard>
  );
}
