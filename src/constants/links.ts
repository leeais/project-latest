import type { RoleEnum } from '@/config/roles';
import { ROUTES } from '@/routes/utils';
import {
  AppstoreOutlined,
  FolderOpenOutlined,
  InboxOutlined,
  PieChartOutlined,
  ControlOutlined,
} from '@ant-design/icons';
import type { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

type LinkType = {
  role: '*' | RoleEnum;
  label: string;
  to: string;
  icon: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
  >;
  children?: LinkType[];
};

export const ADMIN_SIDEBAR_LINKS: LinkType[] = [
  {
    role: '*',
    label: 'Thống kê',
    to: ROUTES.ADMIN,
    icon: PieChartOutlined,
  },
  {
    role: '*',
    label: 'Đơn từ',
    to: ROUTES.SETTINGS,
    icon: FolderOpenOutlined,
  },
  {
    role: '*',
    label: 'Danh mục',
    to: ROUTES.SETTINGS,
    icon: AppstoreOutlined,
  },
  {
    role: '*',
    label: 'Quản lý chung',
    to: ROUTES.SETTINGS,
    icon: ControlOutlined,
  },
  {
    role: '*',
    label: 'Hòm thư góp ý',
    to: ROUTES.SETTINGS,
    icon: InboxOutlined,
  },
];
