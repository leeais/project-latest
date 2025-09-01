import { Button, Card, Checkbox, Flex, Form, Input } from 'antd';
import { Link } from 'react-router';
import GuestOnlyRoute from '@/components/GuestOnlyRoute';
import { Title } from '@/components/_common/Text';
import { useAuth } from '@/hooks/useAuth';
import { defaultLoginValue, MOCK_USER, type LoginPayloadType } from '@/pages/_auth/Login/utils';

export default function Login() {
  const { login } = useAuth();

  function onFinish(values: LoginPayloadType) {
    try {
      console.log(values);
      login(MOCK_USER, 'mock-token');
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
