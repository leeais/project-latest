import RolesGuard from '@/components/RolesGuard';
import { ROLES, type RoleEnum } from '@/config/roles';
import { Button, Flex } from 'antd';
import { Outlet, useNavigate } from 'react-router';

const rolesRequire: RoleEnum[] = [ROLES.STUDENT];

export default function StudentLayout() {
  const navigate = useNavigate();
  return (
    <RolesGuard hasRoles={rolesRequire} showNotFoundPage={false}>
      <Flex>
        <Flex>
          Sidebar
          <Button onClick={() => navigate('/1')}>link 1</Button>
          <Button onClick={() => navigate('/2')}>link 2</Button>
        </Flex>
        <Flex>
          <Outlet />
        </Flex>
      </Flex>
    </RolesGuard>
  );
}
