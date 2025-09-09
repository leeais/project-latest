import { Text } from '@/components/_common/Text';
import { ACTIVITY_STATUS_COLORS } from '@/constants/activities';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/routes/utils';
import styles from './styles.module.css';

import {
  DownOutlined,
  KeyOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Popover,
  Space,
  Tag,
} from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { cn } from '@/utils/tailwinds';

export default function AvatarModal() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [passwordModalOpen, setPasswordModalOpen] = useState<boolean>(false);

  function content() {
    return (
      <div className="w-xs">
        <Flex align="center" justify="space-between">
          <Space>
            <Avatar size={42} className="bg-primary">
              {currentUser?.firstName?.at(0)}
            </Avatar>
            <Flex className="flex-col">
              <Text className="font-semibold text-base">{`${currentUser?.lastName} ${currentUser?.firstName}`}</Text>
              <Text className=" text-accent-foreground">{currentUser?.email}</Text>
            </Flex>
          </Space>

          <Tag color={ACTIVITY_STATUS_COLORS.ONLINE}>Online</Tag>
        </Flex>
        <Divider className="mb-2 mt-4" />
        <Flex className="flex-col" gap={4}>
          <Button
            onClick={() => navigate(ROUTES.PROFILE)}
            size="large"
            icon={<UserOutlined />}
            type="text"
            className="w-full justify-start"
          >
            Profile
          </Button>
          <Button
            onClick={() => setPasswordModalOpen(true)}
            size="large"
            icon={<KeyOutlined />}
            type="text"
            className="w-full justify-start"
          >
            Change password
          </Button>
          <Modal
            className={cn(styles.root)}
            open={passwordModalOpen}
            title={<p className="text-lg font-semibold">Update password</p>}
            okText="Change password"
            onCancel={() => setPasswordModalOpen(false)}
            onOk={() => {}}
          >
            <Form labelCol={{ span: 8 }} labelAlign="left">
              <Form.Item label="Old password">
                <Input.Password />
              </Form.Item>
              <Form.Item label="New password">
                <Input.Password />
              </Form.Item>
              <Form.Item label="Confirm new password">
                <Input.Password />
              </Form.Item>
            </Form>
          </Modal>
          <Button
            onClick={() => navigate(ROUTES.PROFILE)}
            size="large"
            icon={<SettingOutlined />}
            type="text"
            className="w-full justify-start"
          >
            Settings
          </Button>
          <Divider className="my-2" />
          <Button
            onClick={logout}
            size="large"
            icon={<LogoutOutlined />}
            danger
            type="text"
            className="w-full justify-start"
          >
            Logout
          </Button>
        </Flex>
      </div>
    );
  }

  return (
    <Popover content={content} trigger="click" placement="bottomRight">
      <Button
        size="large"
        iconPosition="end"
        type="primary"
        icon={<DownOutlined className="pr-2" />}
        className="rounded-full p-1 border-border"
      >
        <Badge dot offset={[-5, 28]} color={ACTIVITY_STATUS_COLORS.ONLINE}>
          <Avatar className="border-border border-2">{currentUser?.firstName?.at(0)}</Avatar>
        </Badge>
      </Button>
    </Popover>
  );
}
