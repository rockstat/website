export const pageview = path => {
  window.dataLayer.push({ "event": "page", "path": path });
}
