import { ROUTES } from '@/routes/utils';
import { FileOutlined, InboxOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="size-full max-w-7xl mx-auto py-4 px-6 space-y-4 bg-background">
      {Array(1)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="border border-primary/50 rounded-sm overflow-hidden">
            <header className="p-4 py-2 border-b border-primary/50 bg-primary/10">
              <h2 className="font-medium">Danh mục đơn từ</h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4  bg-background">
              <div
                className="p-4 rounded-sm bg-accent flex items-center gap-2 cursor-pointer hover:bg-primary/10"
                onClick={() => navigate(ROUTES.ADMIN_CATEGORIES_PROCEDURES)}
              >
                <div className="size-12 flex items-center justify-center rounded-sm bg-background">
                  <FileOutlined className="text-primary" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-sm font-medium">Thủ tục được hỗ trợ</h3>
                  <p className="text-xs">Thêm và quản lý các yêu cầu thủ tục được hỗ trợ</p>
                </div>
              </div>

              <div
                className="p-4 rounded-sm bg-accent flex items-center gap-2 cursor-pointer hover:bg-primary/10"
                onClick={() => {}}
              >
                <div className="size-12 flex items-center justify-center rounded-sm bg-background">
                  <InboxOutlined className="text-primary" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-sm font-medium">Thủ tục nhận góp ý</h3>
                  <p className="text-xs">Thêm và quản lý các loại thủ tục nhận góp ý</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
