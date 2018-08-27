import { LogoIcon } from './icons';
import style from './logo.css';
import { Link } from '../next-routes';

export const Logo = (props) => (
  <div className={style.logo}>
    <Link route={'/'}>
      <a><LogoIcon /></a>
    </Link>
  </div>
)
