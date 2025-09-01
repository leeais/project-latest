import RolesGuard from '@/components/RolesGuard';
import { type RoleEnum } from '@/config/roles';
import { Button, Flex } from 'antd';
import { Outlet, useNavigate } from 'react-router';

type DashboardLayoutProps = {
  role: RoleEnum;
};

export default function DashboardLayout({ role }: DashboardLayoutProps) {
  const navigate = useNavigate();
  return (
    <RolesGuard hasRoles={[role]}>
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
    </RolesGuard>
  );
}
