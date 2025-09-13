import { Button } from 'antd';
import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="size-full h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-5xl font-bold">404 Not Found</h2>
      <p className="text-lg italic">
        Trang này không tồn tại vui lòng <span className="text-primary font-medium">quay lại</span>{' '}
        hoặc trở về <span className="text-primary font-medium">màn hình chính</span>
      </p>
      <span className="text-sm">(Quay lại màn hình chính sau 10s)</span>
      <div className="space-x-4">
        <Button size="large" type="link" onClick={() => navigate(-1)}>
          Trở lại
        </Button>
        <Button size="large" type="primary">
          Trang chủ
        </Button>
      </div>
    </div>
  );
}
