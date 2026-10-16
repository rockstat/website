import React from 'react'
import PermalinkIcon from './icons/permalink-icon'

interface HeadingProps {
  component: React.ReactElement<{ className?: string; children?: React.ReactNode }>;
  className?: string;
  children?: React.ReactNode;
  [attr: string]: unknown;
}

class Heading extends React.Component<HeadingProps> {
  render() {
    const { component, className, children, ...rest } = this.props
    return React.cloneElement(
      component,
      {
        className: [className, component.props.className || ''].join(' '),
        ...rest
      },
      children
    )
  }
}

export interface HeadingAnchorProps {
  children: React.ReactElement<{ className?: string; children?: React.ReactNode }>;
  id?: string;
  offsetTop?: number;
  lean?: boolean;
}

export default function HeadingAnchor(props: HeadingAnchorProps) {
  const { offsetTop } = props
  const component = props.children
  const children = component.props.children || ''
  let id = props.id
  let text: React.ReactNode = children

  if (null == id) {
    // If there are sub components, convert them to text
    if (Array.isArray(children)) {
      text = children
        .map((child) => {
          return React.isValidElement<{ children?: React.ReactNode }>(child) ? child.props.children : child
        })
        .join('')
    }

    id = String(text)
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/[?!]/g, '')
  }

  const targetStyle =
    null != offsetTop
      ? { marginTop: -offsetTop + 'px', paddingTop: offsetTop + 'px' }
      : undefined
  return (
    <Heading
      className={props.lean ? 'lean' : ''}
      component={component}
      data-components-heading
    >
      <span id={id} className="target" style={targetStyle} />
      <a href={'#' + id}>{children}</a>
      <span className="permalink">
        <PermalinkIcon />
      </span>
      <style jsx>
        {`
          a {
            border-bottom: 1px solid transparent;
            color: inherit;
            margin-right: 10px;
            text-decoration: none;
          }

          a:hover {
            border-bottom-color: inherit;
          }

          :global(h1[data-components-heading]) a::before {
            content: '# ';
          }

          :global(h2[data-components-heading]) a::before {
            content: '## ';
          }

          :global(h3[data-components-heading]) a::before {
            content: '### ';
          }

          :global(.lean[data-components-heading]) a::before {
            content: '';
          }

          :global(h1[data-components-heading]::before),
          :global(h2[data-components-heading]::before),
          :global(h3[data-components-heading]::before),
          :global(h4[data-components-heading]::before) {
            display: none;
          }

          .target {
            display: block;
            margin-top: -20px;
            padding-top: 20px;
            visibility: hidden;
            position: absolute;
          }

          .permalink {
            text-align: center;
            vertical-align: middle;
            visibility: hidden;
          }

          a:hover ~ .permalink {
            visibility: visible;
          }
        `}
      </style>
    </Heading>
  )
}
