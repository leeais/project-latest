import RolesGuard from '@/components/RolesGuard';
import { type RoleEnum } from '@/config/roles';
import { Button, Flex, Space } from 'antd';
import { Outlet, useNavigate } from 'react-router';
import SearchBox from '@/components/_layout/DashboardLayout/components/SearchModal';
import AvatarPopover from '@/components/_layout/DashboardLayout/components/AvatarPopover';
import { MessageOutlined, QuestionOutlined } from '@ant-design/icons';
import NotificationPopover from '@/components/_layout/DashboardLayout/components/NotificationPopover';
import Logo from '@/components/_layout/DashboardLayout/components/Logo';

type DashboardLayoutProps = {
  role: RoleEnum;
};

export default function DashboardLayout({ role }: DashboardLayoutProps) {
  const navigate = useNavigate();
  return (
    <RolesGuard hasRoles={[role]}>
      <Flex className="w-full h-screen flex-col min-h-[600px]">
        <Flex
          align="center"
          justify="space-between"
          className="h-12 w-full bg-primary sticky top-0 left-0 text-primary-foreground px-2 md:px-4 lg:px-6"
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
                icon={<QuestionOutlined />}
                className="text-primary-foreground"
              />
            </Space>
            <AvatarPopover />
          </Space>
        </Flex>
        <Flex>
          <Flex>
            Sidebar
            <Button onClick={() => navigate('/admin/1')}>link 1</Button>
            <Button onClick={() => navigate('/admin/2')}>link 2</Button>
          </Flex>
          <Flex>
            <Outlet />
          </Flex>
        </Flex>
      </Flex>
    </RolesGuard>
  );
}
