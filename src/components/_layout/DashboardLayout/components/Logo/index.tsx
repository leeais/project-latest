import { IMAGES } from '@/constants/images';
import { ROUTES } from '@/routes/utils';
import { useNavigate } from 'react-router';

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2">
      <div className="size-9 shrink-0 select-none" onClick={() => navigate(ROUTES.HOME)}>
        <img className="size-full object-contain" src={IMAGES.logo} alt="logo" />
      </div>
      <span className="text-[#FF0000] font-serif font-medium text-[22px] italic select-none text-shadow-accent-foreground tracking-tighter text-shadow-sm line-clamp-1">
        Đại học Sao Đỏ
      </span>
    </div>
  );
}
