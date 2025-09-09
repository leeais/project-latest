import RolesGuard from '@/components/RolesGuard';
import { type RoleEnum } from '@/config/roles';
import { Button, Flex, Space } from 'antd';
import { Outlet, useNavigate } from 'react-router';
import SearchBox from '@/components/_layout/SearchBox';
import AvatarModal from '@/components/_layout/AvatarModal';
import { MessageOutlined, QuestionOutlined } from '@ant-design/icons';
import NotificationModal from '@/components/_layout/NotificationModal';
import Logo from '@/components/_layout/Logo';

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
          className="h-14 w-full bg-primary sticky top-0 left-0 text-primary-foreground px-6"
        >
          <Logo />
          <SearchBox />
          <Space>
            <Space size={1}>
              <Button
                type="text"
                shape="circle"
                size="large"
                icon={<MessageOutlined />}
                className="text-primary-foreground"
              />
              <NotificationModal />
              <Button
                type="text"
                shape="circle"
                size="large"
                icon={<QuestionOutlined />}
                className="text-primary-foreground"
              />
            </Space>
            <AvatarModal />
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
