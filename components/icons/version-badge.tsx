import React from 'react';

/** Small version mark shown next to the logo (replaces the former "alpha" label). */
export const VersionBadge = ({ version = '4' }: { version?: string }) => (
  <span className="version">
    {version}
    <style jsx>{`
      .version {
        display: block;
        font-family: 'Raleway', Helvetica, sans-serif;
        font-weight: 300;
        font-size: 15px;
        line-height: 1;
        letter-spacing: 0.02em;
        color: #fff;
      }
    `}</style>
  </span>
);
