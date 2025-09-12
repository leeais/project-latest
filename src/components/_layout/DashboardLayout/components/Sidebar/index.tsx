import { ADMIN_SIDEBAR_LINKS } from '@/constants/links';
import { cn } from '@/utils/tailwinds';
import { DoubleLeftOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [expandSidebar, setExpandSidebar] = useState<boolean>(true);

  return (
    <aside className="relative">
      <div
        className={cn('transition-[width] duration-300 ease-in-out', {
          'w-[250px]': expandSidebar,
          'w-14': !expandSidebar,
        })}
      />
      <div
        className={cn(
          'fixed top-12 left-0 bottom-0 border-r flex flex-col transition-[width] duration-300 ease-in-out z-10',
          {
            'w-[250px]': expandSidebar,
            'w-14': !expandSidebar,
          }
        )}
      >
        <header
          className={cn('flex shrink-0 h-9 items-center justify-between px-3', {
            'justify-end': !expandSidebar,
          })}
        >
          <span
            className={cn('text-xs transform transition-all duration-500 ease-in-out', {
              'opacity-0 -translate-x-4 w-0 mr-auto': !expandSidebar,
              'opacity-100 translate-x-0 ml-2': expandSidebar,
            })}
          >
            Dashboard
          </span>
          <Button
            className={cn('transition-transform duration-700 ease-in-out', {
              'rotate-180': expandSidebar,
            })}
            type="text"
            icon={<DoubleLeftOutlined />}
            onClick={() => setExpandSidebar((prev) => !prev)}
          />
        </header>

        <div className="size-full overflow-x-hidden overflow-auto flex flex-col">
          {ADMIN_SIDEBAR_LINKS.map(({ label, to, icon: Icon }, index) => {
            const isActive = pathname === to;

            return (
              <Tooltip key={index} title={expandSidebar ? null : label} placement="right">
                <Button
                  className={cn(
                    'rounded-none justify-start gap-5 transition-all duration-200 ease-in-out px-5',
                    {
                      'bg-primary text-primary-foreground': isActive,
                      'items-center w-full': !expandSidebar,
                    }
                  )}
                  size="large"
                  icon={<Icon />}
                  type="text"
                  onClick={() => navigate(to)}
                >
                  <span className="text-sm">{label}</span>
                </Button>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
