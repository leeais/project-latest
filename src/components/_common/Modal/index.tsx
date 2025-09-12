import { type ModalProps as AntModalProps, Modal as AntModal, Button } from 'antd';
import { type PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwinds';
import { CloseOutlined } from '@ant-design/icons';

type ModalProps = PropsWithChildren &
  Omit<AntModalProps, 'closeIcon' | 'title'> & {
    className?: string;
    title?: string;
    showCloseIcon?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
  };

export default function Modal({
  children,
  className,
  title = 'Create',
  showCloseIcon = false,
  showHeader = true,
  showFooter = true,
  ...props
}: ModalProps) {
  const header = () => (
    <div className="flex items-center justify-between gap-4">
      <h3 className="font-semibold">{title}</h3>
      {showCloseIcon && <Button onClick={() => {}} type="text" icon={<CloseOutlined />} />}
    </div>
  );

  return (
    <AntModal
      className={cn(className)}
      title={showHeader && header()}
      closeIcon={null}
      footer={showFooter ? undefined : null}
      {...props}
    >
      {children}
    </AntModal>
  );
}
