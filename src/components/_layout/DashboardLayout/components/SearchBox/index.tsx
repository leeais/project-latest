import Modal from '@/components/_common/Modal';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Input } from 'antd';
import type { InputRef } from 'antd';
import { useEffect, useRef, useState } from 'react';

export default function SearchBox() {
  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
  const inputRef = useRef<InputRef | null>(null);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpenSearchModal(true);
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  useEffect(() => {
    if (openSearchModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openSearchModal]);

  return (
    <div className="flex items-center">
      <Button
        className="pl-1"
        icon={<SearchOutlined />}
        iconPosition="end"
        onClick={() => setOpenSearchModal(true)}
      >
        <div className="flex items-center gap-4 pr-4">
          <span className="text-xs rounded-sm p-0.5 bg-primary text-primary-foreground px-1">
            Ctrl K
          </span>
          Search
        </div>
      </Button>

      <Modal
        open={openSearchModal}
        showHeader={false}
        footer={null}
        onCancel={() => setOpenSearchModal(false)}
      >
        <div className="flex items-center">
          <SearchOutlined className="absolute left-8 z-10" />
          <Input className="px-8" ref={inputRef} size="large" placeholder="Search" />
          <span className="text-xs rounded-sm p-0.5 bg-primary text-primary-foreground px-1 absolute right-8">
            esc
          </span>
        </div>
        <Divider className="my-4" />
      </Modal>
    </div>
  );
}
