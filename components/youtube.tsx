import React from 'react'

import YouTubeComponent, { type YouTubeProps } from 'react-youtube';

// https://github.com/troybetz/react-youtube

export class YouTube extends React.Component<YouTubeProps> {
    render() {
        return <YouTubeComponent {...this.props} />
    }
}
