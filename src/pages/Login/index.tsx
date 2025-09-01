import { Button, Card, Checkbox, Flex, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router';
import GuestOnlyRoute from '@/components/GuestOnlyRoute';
import { Title } from '@/components/common/Text';
import type { User } from '@/types/user';
import { ROUTES } from '@/routes/utils';
import { useAuth } from '@/hooks/useAuth';
import { defaultLoginValue, type LoginPayloadType } from '@/pages/Login/utils';

const MOCK_USER: User = {
  id: '1',
  username: 'longnd',
  email: 'longnd@gmail.com',
  firstName: 'Long',
  lastName: 'Nguyen Dang',
  avatarUrl: 'http://localhost:5137/images/default-avatar.png',
  updatedAt: new Date(),
  createdAt: new Date(),
  isActive: true,
  roles: ['ADMIN', 'INSTRUCTOR', 'STUDENT'],
};

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function onFinish(values: LoginPayloadType) {
    try {
      console.log(values);
      login(MOCK_USER, 'mock-token');
      navigate(ROUTES.HOME);
    } catch (error: unknown) {
      console.log(error);
    }
  }
  return (
    <GuestOnlyRoute>
      <Flex align="center" justify="center" className="w-full h-screen min-h-[500px]">
        <Card className="w-full max-w-md p-6">
          <Form
            onFinish={onFinish}
            name="login"
            initialValues={defaultLoginValue}
            labelCol={{ xs: { span: 24 }, sm: { span: 6 } }}
            labelAlign="left"
          >
            <Title level={2}>Login</Title>
            <Form.Item name="username" label="Username" required>
              <Input size="large" />
            </Form.Item>
            <Form.Item name="password" label="Password" required>
              <Input.Password size="large" />
            </Form.Item>
            <Flex align="center" justify="space-between" className="mb-6">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to={'#'}>Forgot password?</Link>
            </Flex>
            <Button size="large" type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form>
        </Card>
      </Flex>
    </GuestOnlyRoute>
  );
}
