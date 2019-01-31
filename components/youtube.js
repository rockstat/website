import React from 'react'

import YouTubeComponent from 'react-youtube';

// https://github.com/troybetz/react-youtube

export class YouTube extends React.Component {
    render() {
        return <YouTubeComponent {...this.props} />
    }
}
