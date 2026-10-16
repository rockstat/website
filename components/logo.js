import Link from 'next/link';
import { LogoIcon } from './icons';
import style from './logo.module.css';

export const Logo = (props) => (
  <div className={style.logo}>
    <Link href={props.url || '/'} aria-label="Rockstat">
      <LogoIcon />
    </Link>
  </div>
);
