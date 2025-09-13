import type { ColumnsType } from 'antd/es/table';
import type { CategoriesProcedures } from '../../utils';
import { Tag } from 'antd';

export const columns: ColumnsType<CategoriesProcedures> = [
  {
    title: 'Tên yêu cầu',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Mô tả',
    dataIndex: 'description',
    key: 'description',
    ellipsis: true,
  },
  {
    title: 'Thời gian xử lý (giờ)',
    dataIndex: 'estimated_time',
    key: 'estimated_time',
    width: 180,
    sorter: (a, b) => a.estimated_time - b.estimated_time,
    render: (value: number) => `${value}h`,
  },
  {
    title: 'Khoa',
    dataIndex: 'faculty_id',
    key: 'faculty_id',
    width: 100,
    render: (facultyId: number) => <Tag color="blue">Khoa {facultyId}</Tag>,
  },
  {
    title: 'Phòng ban',
    dataIndex: 'department_id',
    key: 'department_id',
    width: 120,
    render: (deptId: number) => <Tag color="purple">Phòng {deptId}</Tag>,
  },
  {
    title: 'Phí',
    dataIndex: 'fee',
    key: 'fee',
    width: 100,
    sorter: (a, b) => a.fee - b.fee,
    render: (fee: number) =>
      fee > 0 ? fee.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'Miễn phí',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'created_at',
    key: 'created_at',
    width: 160,
    sorter: (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    render: (value: string) => new Date(value).toLocaleDateString('vi-VN'),
  },
];
