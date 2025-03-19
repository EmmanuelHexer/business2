function Close(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 960 960"
      {...props}
      className={`close-svg ham-none`}
    >
      <path
        d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
        stroke="white"
        strokeWidth={10}
        className="ham-size"
      ></path>
    </svg>
  );
}

function Open(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="open-svg ham-none"
      width={32}
      height={32}
    >
      <g id="Menu / Menu_Duo_LG">
        <path
          id="Vector"
          d="M3 15H21M3 9H21"
          stroke="black"
          strokeWidth="2"
          className="ham-size"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}

export { Close, Open };
