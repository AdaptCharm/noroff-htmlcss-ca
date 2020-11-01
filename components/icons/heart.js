const Heart = ({ size }) => (
  <svg
    className="heart"
    width={size * 20 || 24}
    height={size * 20 || 24}
    viewBox="0 0 20 20"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path id="heart" d="M14.357.455A5.643,5.643,0,0,0,10,2.517,5.64,5.64,0,0,0,0,6.1c0,2.436,1.453,5.254,4.318,8.376A41.587,41.587,0,0,0,9.6,19.248l.4.3.4-.3a41.587,41.587,0,0,0,5.286-4.775C18.547,11.352,20,8.534,20,6.1A5.649,5.649,0,0,0,14.357.455Zm.353,13.127A40.1,40.1,0,0,1,10,17.89a40.109,40.109,0,0,1-4.711-4.309c-2.6-2.83-3.971-5.418-3.971-7.484a4.322,4.322,0,0,1,8.1-2.092L10,5.045l.577-1.04a4.322,4.322,0,0,1,8.1,2.092C18.681,8.163,17.308,10.751,14.711,13.581Z" transform="translate(0 0)" fill="#0a3641"/>
  </svg>
);

export default Heart;