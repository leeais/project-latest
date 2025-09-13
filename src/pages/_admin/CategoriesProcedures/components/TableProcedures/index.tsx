import { Table } from 'antd';
import type { CategoriesProcedures } from '../../utils';
import { columns } from './columns';

type TableProceduresProps = {
  dataSource: CategoriesProcedures[];
};

export default function TableProcedures({ dataSource }: TableProceduresProps) {
  return (
    <div className="overflow-hidden border rounded">
      <Table bordered columns={columns} dataSource={dataSource} />
    </div>
  );
}
