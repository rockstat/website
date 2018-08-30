export const UL = ({ children }) => (
  <div>
    <ul>
      {children}
      <style jsx>
        {`
        ul {
          padding: 0;
          list-style-type: none;
          margin-left: 15px;
        }
        ul > :global(li::before) {
          content: '-';
          display: inline-block;
          color: #999;
          position: absolute;
          margin-left: -15px;
        }
      `}
      </style>
    </ul>
  </div>
)

export const OL = ({ children }) => (
  <div>
    <ol>
      {children}
      <style jsx>
        {`
        ol {
          padding: 0;
          margin-left: 15px;
        }
      `}
      </style>
    </ol>
  </div>
)

export const LI = ({ children }) => (
  <li>
    {children}
    <style jsx>
      {`
        li {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 10px;
        }

        li > :global(p:last-child) {
          margin-bottom: 0;
          margin-top: 0;
        }
      `}
    </style>
  </li>
)
