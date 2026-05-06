'use client';

import React from 'react';
import Link from 'next/link';

export type StudioTab = 'collage' | 'viewer-360';

type Props = {
  active: StudioTab;
  /**
   * Right-side gap to leave for sidebars/control panels (e.g. "20rem"
   * for the 80-wide ControlPanel on the collage view). Defaults to 0.
   */
  rightOffset?: string;
};

export const TopNav: React.FC<Props> = ({ active, rightOffset = '0px' }) => {
  const tabClass = (id: StudioTab) =>
    `px-3 py-1 rounded-full text-[11px] font-medium tracking-wide transition ${
      active === id
        ? 'bg-marshall-gold text-black'
        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90'
    }`;

  return (
    <header
      className="absolute top-0 left-0 px-5 py-3 border-b border-white/10 bg-neutral-950/60 backdrop-blur z-20 flex items-center gap-4"
      style={{ right: rightOffset }}
    >
      <h1 className="text-sm font-semibold tracking-wide whitespace-nowrap">
        Marshall Motion Studio
      </h1>
      <nav className="flex gap-1">
        <Link href="/" className={tabClass('collage')}>
          Collage
        </Link>
        <Link href="/360" className={tabClass('viewer-360')}>
          360 Viewer
        </Link>
      </nav>
    </header>
  );
};
