import React from 'react';
import { GitHubIcon } from './github';
import type { NavLink } from '@app/lib/menu';

const ICONS = {
  github: GitHubIcon
} satisfies Record<NonNullable<NavLink['icon']>, React.ComponentType<{ size?: number | string; className?: string }>>;

/** Small inline icon for a menu link, rendered to the left of its label. */
export const NavIcon = ({ icon, className }: { icon?: NavLink['icon']; className?: string }) => {
  if (!icon) return null;
  const Icon = ICONS[icon];
  return <Icon size="1.15em" className={className} />;
};
