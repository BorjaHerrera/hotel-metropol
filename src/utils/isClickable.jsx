export const isClickable = (e) => {
  if (!e) return false;
  const style = window.getComputedStyle(e);

  return (
    typeof e.onclick === 'function' ||
    e.hasAttribute('onclick') ||
    style.cursor === 'pointer'
  );
};
