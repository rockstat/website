
export function createLinker(locale = 'en') {
  return (path = '') => {

    if (path.indexOf('http') === 0) {
      return path
    }
    return `${path}`

  }
}
