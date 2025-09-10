import Modal from '@/components/_common/Modal';
import { EnterOutlined, SearchOutlined, SwapOutlined } from '@ant-design/icons';
import { Button, Divider, Input } from 'antd';
import type { InputRef } from 'antd';
import { useEffect, useRef, useState } from 'react';

export default function SearchModal() {
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
        afterOpenChange={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <Input
          ref={inputRef}
          size="large"
          variant="underlined"
          placeholder="What are you searching for..."
        />
        <div className="h-80 overflow-auto py-4">
          <p>Search content</p>
          {/* <div className="h-[600px]" /> */}
        </div>

        <Divider className="m-0 mb-4" />
        <div className="flex items-center gap-2">
          <div className="space-x-1">
            <span className="py-0.5 px-1 rounded-sm text-primary-foreground bg-primary">
              <SwapOutlined rotate={90} />
            </span>
            <span>navigation</span>
          </div>
          <Divider type="vertical" />
          <div className="space-x-1">
            <span className="py-0.5 px-1 rounded-sm text-primary-foreground bg-primary">
              <EnterOutlined rotate={90} />
            </span>
            <span>enter</span>
          </div>
          <Divider type="vertical" />
          <div className="space-x-1">
            <span className="py-0.5 px-1 rounded-sm text-primary-foreground bg-primary">esc</span>
            <span>close</span>
          </div>
        </div>
      </Modal>
    </div>
  );
}
