const Heart = ({ size }) => (
  <svg
    className="heart"
    width={size * 20 || 24}
    height={size * 20 || 24}
    viewBox="0 0 32 29.6"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="none"/>
  </svg>
);

export default Heart;