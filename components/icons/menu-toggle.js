const MobileMenu = ({ size, color = 'rgb(10, 54, 65)' }) => (
  <svg
    height={size || 25}
    viewBox="0 0 512 512"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g fill={color}><circle cx="256" cy="256" r="64"/><circle cx="448" cy="256" r="64"/><circle cx="64" cy="256" r="64"/></g>
  </svg>
);

export default MobileMenu;