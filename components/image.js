// This component might look a little complex
// because one could argue that keeping the aspect ratio
// of an image can be solved with `height: auto`,
// but it's actually not that easy if you want to prevent
// element flickering

// Because if you want to do that, you need to set the aspect
// ratio of the image's container BEFORE the image loads

export const Image = ({
  src,
  width,
  height,
  margin = 40,
  caption,
  video = false,
  muted = true,
  autoPlay = false
}) => {
  if (!width) {
    throw new Error('Please define the width of the image!')
  }

  if (!height) {
    throw new Error('Please define the height of the image!')
  }

  const aspectRatio = String(height / width * 100) + '%'

  return (
    <figure style={{ margin: `${margin}px 0` }}>
      <main style={{ width }}>
        <div style={{ paddingBottom: aspectRatio }}>
          {video ? (
            <video src={src} muted={muted} autoPlay={autoPlay} />
          ) : (
            <img src={src} />
          )}
        </div>
        {caption && <p>{caption}</p>}
      </main>
    </figure>
  )
}

export const Video = props => <Image {...props} video />

// export default Image
