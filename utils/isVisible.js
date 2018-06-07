export function isVisible(element) {
  let rect = element.getBoundingClientRect();
  let html = document.documentElement;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom / 1.3 <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
