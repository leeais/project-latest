import { IMAGES } from '@/constants/images';
import { ROUTES } from '@/routes/utils';
import { Link } from 'react-router';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Link to={ROUTES.HOME}>
        <img className="size-9 object-contain" src={IMAGES.logo} alt="logo" />
      </Link>
      <span className="text-primary-foreground font-serif text-xl tracking-tighter italic select-none">
        Đại học Sao Đỏ
      </span>
    </div>
  );
}
