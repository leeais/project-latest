import { Text } from '@/components/_common/Text';
import { ACTIVITY_STATUS_COLORS } from '@/constants/activities';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/routes/utils';

import {
  DownOutlined,
  KeyOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Button, Divider, Flex, Form, Input, Popover, Space, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from '@/components/_common/Modal';

export default function AvatarPopover() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [passwordModalOpen, setPasswordModalOpen] = useState<boolean>(false);

  function handleUpdatePassword() {
    // TODO: Update password
    alert('Update password');

    setPasswordModalOpen(false);
  }

  function content() {
    return (
      <div className="w-2xs">
        <Flex align="start" justify="space-between">
          <Space>
            <Avatar size={38} className="bg-primary">
              {currentUser?.firstName?.at(0)}
            </Avatar>
            <Flex className="flex-col">
              <Text className="font-semibold">{`${currentUser?.lastName} ${currentUser?.firstName}`}</Text>
              <Text className="text-sm text-accent-foreground">{currentUser?.email}</Text>
            </Flex>
          </Space>

          <Tag color={ACTIVITY_STATUS_COLORS.ONLINE}>Online</Tag>
        </Flex>
        <Divider className="mb-2 mt-4" />
        <Flex className="flex-col" gap={4}>
          <Button
            onClick={() => navigate(ROUTES.PROFILE)}
            icon={<UserOutlined />}
            type="text"
            className="w-full justify-start"
          >
            Thông tin cá nhân
          </Button>
          <Button
            onClick={() => setPasswordModalOpen(true)}
            icon={<KeyOutlined />}
            type="text"
            className="w-full justify-start"
          >
            Đổi mật khẩu
          </Button>
          <Modal
            className="max-w-md"
            open={passwordModalOpen}
            title="Cập nhật mật khẩu"
            okText="Cập nhật"
            onCancel={() => setPasswordModalOpen(false)}
            onOk={handleUpdatePassword}
            cancelText="Hủy"
          >
            <Form layout="vertical" labelAlign="left" requiredMark>
              <Form.Item className="m-0" label="Mật khẩu cũ" required>
                <Input.Password />
              </Form.Item>
              <Form.Item className="my-2" label="Mật khẩu mới" required>
                <Input.Password />
              </Form.Item>
              <Form.Item className="m-0" label="Nhập lại mật khẩu" required>
                <Input.Password />
              </Form.Item>
            </Form>
          </Modal>
          <Button
            onClick={() => navigate(ROUTES.SETTINGS)}
            icon={<SettingOutlined />}
            type="text"
            className="w-full justify-start"
          >
            Cài đặt
          </Button>
          <Divider className="my-2" />
          <Button
            onClick={logout}
            icon={<LogoutOutlined />}
            danger
            type="link"
            className="w-full justify-start"
          >
            Đăng xuất
          </Button>
        </Flex>
      </div>
    );
  }

  return (
    <Popover content={content} trigger="click" placement="bottomRight">
      <Button
        className="rounded-full bg-primary/90 text-primary-foreground p-1 border-border h-9"
        iconPosition="end"
        size="large"
        type="default"
        icon={<DownOutlined className="pr-2" />}
      >
        <Badge dot offset={[-3, 24]} color={ACTIVITY_STATUS_COLORS.ONLINE}>
          <Avatar className="border-border border-1" size={28}>
            {currentUser?.firstName?.at(0)}
          </Avatar>
        </Badge>
      </Button>
    </Popover>
  );
}
