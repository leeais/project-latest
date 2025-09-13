import { type ModalProps as AntModalProps, Modal as AntModal, Button } from 'antd';
import { useEffect, useState, type PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwinds';
import { CloseOutlined } from '@ant-design/icons';
import { useModal } from '@/hooks/useModal';

type ModalProps = PropsWithChildren &
  Omit<AntModalProps, 'closeIcon' | 'title' | 'onCancel' | 'okText' | 'cancelText'> & {
    name?: string;
    className?: string;
    title?: string;
    showCloseIcon?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    okText?: string;
    cancelText?: string;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };

export default function Modal({
  children,
  name,
  className,
  title,
  showCloseIcon = true,
  showHeader = true,
  showFooter = true,
  okText,
  cancelText,
  onCancel,
  ...props
}: ModalProps) {
  const [open, setOpen] = useState<boolean>(false);

  const { activeModal, closeModal, getModalData } = useModal();

  useEffect(() => {
    if (name === activeModal) setOpen(true);
  }, [activeModal, name]);

  function handleCloseModal() {
    setOpen(false);
    closeModal();
  }

  const header = () => (
    <div className="flex items-center justify-between gap-4">
      <h3 className="font-semibold">{title ?? (getModalData() ? 'Thêm mới' : 'Chỉnh sửa')}</h3>
      {showCloseIcon && (
        <Button size="small" type="text" icon={<CloseOutlined />} onClick={handleCloseModal} />
      )}
    </div>
  );

  return (
    <AntModal
      className={cn(className)}
      open={open}
      title={showHeader && header()}
      closeIcon={null}
      footer={showFooter ? undefined : null}
      onCancel={onCancel || handleCloseModal}
      okText={okText ?? (getModalData() ? 'Thêm' : 'Cập nhật')}
      cancelText={cancelText ?? 'Hủy'}
      {...props}
    >
      {children}
    </AntModal>
  );
}
