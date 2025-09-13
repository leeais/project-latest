import { Button } from 'antd';
import { useEffect, useState } from 'react';
import {
  MOCK_CATEGORIES_PROCEDURES_TABLE,
  MODAL_CATEGORIES_PROCEDURES_NAME,
  type CategoriesProcedures,
} from './utils';
import { FilterOutlined, MoreOutlined, PlusOutlined } from '@ant-design/icons';
import TableProcedures from './components/TableProcedures';
import ModalProcedures from './components/ModalProcedures';
import { useModal } from '@/hooks/useModal';

export default function CategoriesProcedures() {
  const [dataSource, setDataSource] = useState<CategoriesProcedures[]>([]);
  const { openModal } = useModal();

  useEffect(() => {
    setDataSource(MOCK_CATEGORIES_PROCEDURES_TABLE);
  }, []);

  return (
    <div className="size-full py-4 px-6 space-y-4">
      <header className="flex items-center justify-between">
        <h2 className="font-medium text-primary text-lg">Quản lý thủ tục hành chính</h2>

        <div className="flex gap-2 items-center">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => openModal(MODAL_CATEGORIES_PROCEDURES_NAME)}
          >
            Tạo mới
          </Button>
          <Button type="default" icon={<FilterOutlined />} />
          <Button type="default" icon={<MoreOutlined />} />
        </div>
      </header>

      <TableProcedures dataSource={dataSource} />

      <ModalProcedures name={MODAL_CATEGORIES_PROCEDURES_NAME} />
    </div>
  );
}
