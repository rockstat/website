
/** Kept for a future multi-language site; today it only passes paths through. */
export function createLinker() {
  return (path = '') => {

    if (path.indexOf('http') === 0) {
      return path
    }
    return `${path}`

  }
}
