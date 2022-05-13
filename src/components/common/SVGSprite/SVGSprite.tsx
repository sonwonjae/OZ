interface SVGSpriteProps {
  color: string;
}

function SVGSprite(prop: SVGSpriteProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" display="none">
      <symbol id="user-delete" viewBox="0 0 24 24">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M11 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7zm3 8a4 4 0 0 0-4 4v1a1 1 0 1 1-2 0v-1a6 6 0 0 1 6-6h3.75a1 1 0 1 1 0 2H9zm11.293-.707a1 1 0 0 1 1.414 1.414L19.914 17.5l1.793 1.793a1 1 0 0 1-1.414 1.414L18.5 18.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 1.414-1.414l1.793 1.793 1.793-1.793z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="delete" viewBox="0 0 24 24">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M11 2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2h-4V5a3 3 0 0 0-3-3h-2zm3 4V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1h4z"
          clipRule="evenodd"
        />
        <path
          fill="#333"
          d="M5.821 9.016a1 1 0 0 1 1.163.805l1.701 9.358a1 1 0 0 0 .984.82h4.662a1 1 0 0 0 .984-.82l1.701-9.358a1 1 0 0 1 1.968.358l-1.702 9.358A3 3 0 0 1 14.331 22H9.669a3 3 0 0 1-2.951-2.463l-1.702-9.358a1 1 0 0 1 .805-1.163z"
        />
      </symbol>
      <symbol id="edit" viewBox="0 0 24 24">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M16.257 3.5a2 2 0 0 1 2.829 0L20.5 4.914a2 2 0 0 1 0 2.829L9.671 18.572a3 3 0 0 1-1.533.82l-2.942.589a1 1 0 0 1-1.176-1.177l.588-2.942a3 3 0 0 1 .82-1.533L16.258 3.5zm2.829 2.828l-1.414-1.414-.707.707 1.414 1.415.707-.708zM16.965 8.45L15.55 7.036l-8.707 8.707a1 1 0 0 0-.274.511l-.294 1.471 1.47-.294a1 1 0 0 0 .512-.273l8.708-8.708z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="history" viewBox="0 0 24 24">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M10.58 5.145a7 7 0 1 1-4.243 10.97 1 1 0 0 0-1.618 1.175 9 9 0 1 0-1.547-7.042 1 1 0 0 0-1.363 1.461l1.5 1.5a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 0 0-.94-1.68 6.999 6.999 0 0 1 5.298-4.884z"
          clipRule="evenodd"
        />
        <path
          fill="#333"
          fillRule="evenodd"
          d="M12 7a1 1 0 0 1 1 1v3.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V8a1 1 0 0 1 1-1z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="loading" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="0" fill="none" stroke="#333333" strokeWidth="7">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="0s"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="0s"
          />
        </circle>
        <circle cx="50" cy="50" r="0" fill="none" stroke="#00cddb" strokeWidth="7">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          />
        </circle>
      </symbol>
      <symbol id="fetching" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="84" cy="50" r="10" fill="#00cddb">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.25s"
            calcMode="spline"
            keyTimes="0;1"
            values="10;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="1s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#00cddb;#333333;#00cddb;#333333;#00cddb"
            begin="0s"
          />
        </circle>
        <circle cx="16" cy="50" r="10" fill="#00cddb">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
        </circle>
        <circle cx="50" cy="50" r="10" fill="#333333">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.25s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.25s"
          />
        </circle>
        <circle cx="84" cy="50" r="10" fill="#00cddb">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.5s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.5s"
          />
        </circle>
        <circle cx="16" cy="50" r="10" fill="#333333">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.75s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.75s"
          />
        </circle>
      </symbol>
      <symbol id="chevron-down" viewBox="0 0 24 24">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M11.482 15.489a.793.793 0 0 0 1.037 0l9.23-8.296a.793.793 0 0 1 1.036 0 .613.613 0 0 1 0 .932l-9.23 8.296c-.858.772-2.252.772-3.11 0l-9.23-8.296a.613.613 0 0 1 0-.932.793.793 0 0 1 1.037 0l9.23 8.296z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="chevron-up" viewBox="0 0 24 24">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M12.518 8.511a.793.793 0 0 0-1.037 0l-9.23 8.296a.793.793 0 0 1-1.036 0 .613.613 0 0 1 0-.932l9.23-8.296c.858-.772 2.252-.772 3.11 0l9.23 8.296a.613.613 0 0 1 0 .932.793.793 0 0 1-1.037 0l-9.23-8.296z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="clear-circle" viewBox="0 0 24 24">
        <path fill="#0C364E" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M7.752 7.752a1.146 1.146 0 0 1 1.62 0l6.876 6.875a1.146 1.146 0 1 1-1.62 1.62L7.751 9.374a1.146 1.146 0 0 1 0-1.62z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M16.248 7.752a1.146 1.146 0 0 1 0 1.62l-6.875 6.876a1.146 1.146 0 1 1-1.62-1.62l6.874-6.876a1.146 1.146 0 0 1 1.62 0z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="circle-arrow-left" viewBox="0 0 24 24">
        <path
          fill="#00CDDB"
          fillRule="evenodd"
          d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
          clipRule="evenodd"
        />
        <path
          fill="#00CDDB"
          fillRule="evenodd"
          d="M18 12c0 .69-.492 1.25-1.1 1.25h-6.144l1.422 1.616c.43.488.43 1.28 0 1.768s-1.126.488-1.556 0l-3.3-3.75a1.374 1.374 0 0 1 0-1.768l3.3-3.75c.43-.488 1.126-.488 1.556 0 .43.488.43 1.28 0 1.768l-1.422 1.616H16.9c.608 0 1.1.56 1.1 1.25z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="header-logo" viewBox="0 0 72 36">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18zm-1.08-13.635l6.12-3.534a.96.96 0 0 0 0-1.662l-6.12-3.534a.96.96 0 0 0-1.44.832v7.066a.96.96 0 0 0 1.44.832z"
          clipRule="evenodd"
        />
        <path
          fill="#333"
          d="M63 0a9 9 0 0 1 7.016 14.634 9.096 9.096 0 0 1-.713.802l-3.135 3.134h.002l-8.4 8.41a.24.24 0 0 0 .339.339l8.542-8.55A9 9 0 0 1 63 35.992H45.362a8.976 8.976 0 0 1-6.463-2.381 8.974 8.974 0 0 1-2.9-6.617 8.974 8.974 0 0 1 2.95-6.662l2.902-2.902 8.538-8.516a.24.24 0 0 0-.339-.34l-8.683 8.66A9 9 0 0 1 45 0h18z"
        />
      </symbol>
      <symbol id="dial-pad" viewBox="0 0 24 24">
        <path
          fill="#4A4A4A"
          fillRule="evenodd"
          d="M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="flag" viewBox="0 0 24 24">
        <path
          fill="#4A4A4A"
          fillRule="evenodd"
          d="M2 2.222C2 1.547 2.56 1 3.25 1h17.5c.48 0 .919.27 1.127.693a1.2 1.2 0 0 1-.15 1.293L17.35 8.333l4.375 5.348c.3.367.359.87.15 1.293a1.253 1.253 0 0 1-1.126.693H4.5v6.11C4.5 22.454 3.94 23 3.25 23S2 22.453 2 21.778V2.222zm2.5 11h13.65l-3.376-4.125a1.201 1.201 0 0 1 0-1.527l3.375-4.126H4.5v9.778z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="fill-heart" viewBox="0 0 24 24">
        <path d="M2.89 3.922a6.381 6.381 0 0 1 9.11-.02 6.381 6.381 0 0 1 9.11.02c2.52 2.563 2.52 6.718 0 9.281l-8.332 8.47a1.091 1.091 0 0 1-1.556 0l-8.331-8.47C.37 10.64.37 6.485 2.89 3.923z" />
      </symbol>
      <symbol id="heart" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M10.409 5.64a4.074 4.074 0 0 0-5.824 0 4.228 4.228 0 0 0 0 5.914L12 19.084l7.415-7.53a4.228 4.228 0 0 0 0-5.914 4.074 4.074 0 0 0-5.823 0l-.751.762a1.176 1.176 0 0 1-1.682 0l-.75-.762zM12 3.842a6.426 6.426 0 0 0-9.097.09c-2.537 2.577-2.537 6.754 0 9.33l8.256 8.384a1.18 1.18 0 0 0 1.682 0l8.256-8.384c2.537-2.576 2.537-6.753 0-9.33A6.426 6.426 0 0 0 12 3.842z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="search" viewBox="0 0 24 24">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M9.894 1.936a7.957 7.957 0 1 0 0 15.915 7.957 7.957 0 0 0 0-15.915zM1 9.894a8.894 8.894 0 1 1 17.787 0A8.894 8.894 0 0 1 1 9.894z"
          clipRule="evenodd"
        />
        <path
          fill="#333"
          fillRule="evenodd"
          d="M15.882 15.882a.468.468 0 0 1 .662 0l6.319 6.32a.468.468 0 0 1-.662.661l-6.32-6.32a.468.468 0 0 1 0-.661z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="send-inactive" viewBox="0 0 24 24">
        <path
          fill="#808080"
          fillRule="evenodd"
          d="M22.665 1.343c.304.308.412.76.279 1.171l-6.369 19.684a1.158 1.158 0 0 1-2.123.189l-4.471-8.384-8.387-4.681a1.158 1.158 0 0 1 .218-2.117l19.685-6.152c.413-.13.863-.017 1.168.29zM12.268 13.37l2.944 5.52L19.26 6.378l-6.993 6.992zm5.427-8.703L5.074 8.612l5.568 3.108 7.053-7.053z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="plus-circle" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#0C364E" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M12 5c.644 0 1.167.522 1.167 1.167v4.666h4.666a1.167 1.167 0 0 1 0 2.334h-4.666v4.666a1.167 1.167 0 0 1-2.334 0v-4.666H6.167a1.167 1.167 0 0 1 0-2.334h4.666V6.167C10.833 5.522 11.356 5 12 5z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="help-question" viewBox="0 0 24 24">
        <path
          fill="gray"
          fillRule="evenodd"
          d="M2.333 7A4.667 4.667 0 0 1 7 2.333h10A4.667 4.667 0 0 1 21.667 7v8A4.667 4.667 0 0 1 17 19.667h-2.417l-1.25 1.666c-.666.89-2 .89-2.666 0l-1.25-1.666H7A4.667 4.667 0 0 1 2.333 15V7zM7 3.667A3.333 3.333 0 0 0 3.667 7v8A3.333 3.333 0 0 0 7 18.333h2.75c.21 0 .407.099.533.267l1.45 1.933c.134.178.4.178.534 0l1.45-1.933a.667.667 0 0 1 .533-.267H17A3.333 3.333 0 0 0 20.333 15V7A3.333 3.333 0 0 0 17 3.667H7z"
          clipRule="evenodd"
        />
        <path
          fill="gray"
          fillRule="evenodd"
          d="M6 8c0-.368.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.334H6.667A.667.667 0 0 1 6 8zm0 2.667c0-.368.298-.667.667-.667h10.666a.667.667 0 0 1 0 1.333H6.667A.667.667 0 0 1 6 10.667zm0 2.666c0-.368.298-.666.667-.666h10.666a.667.667 0 0 1 0 1.333H6.667A.667.667 0 0 1 6 13.333z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="home" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M10.271 1.733a2.405 2.405 0 0 1 3.457 0l3.772 3.86V4.235c0-.691.547-1.251 1.222-1.251.675 0 1.222.56 1.222 1.25v3.861l2.698 2.761a1.274 1.274 0 0 1 0 1.77 1.202 1.202 0 0 1-1.729 0l-.086-.089v6.71c0 2.073-1.642 3.753-3.667 3.753H6.84c-2.026 0-3.667-1.68-3.667-3.753v-6.71l-.087.088a1.202 1.202 0 0 1-1.728 0 1.272 1.272 0 0 1 0-1.769l8.913-9.123zm-4.654 8.302v9.212c0 .69.547 1.251 1.223 1.251h3.938v-5.004c0-.691.547-1.251 1.222-1.251.675 0 1.222.56 1.222 1.25v5.005h3.938c.675 0 1.223-.56 1.223-1.251v-9.212L12 3.502l-6.383 6.533z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="video-off" viewBox="0 0 24 24">
        <path
          fill="#E3E3E3"
          fillRule="evenodd"
          d="M3.086 1.358a1.222 1.222 0 1 0-1.728 1.728L3.23 4.96A3.668 3.668 0 0 0 1 8.333v7.334a3.667 3.667 0 0 0 3.667 3.666h8.555a3.66 3.66 0 0 0 2.926-1.456l4.765 4.765a1.222 1.222 0 0 0 1.729-1.729L3.086 1.358zm11.281 14.738L5.383 7.11h-.716c-.675 0-1.223.547-1.223 1.222v7.334c0 .675.548 1.222 1.223 1.222h8.555c.524 0 .971-.33 1.145-.793z"
          clipRule="evenodd"
        />
        <path
          fill="#E3E3E3"
          d="M14.444 8.333v1.083l2.445 2.444v-.495l3.667-2.933v7.095l1.75 1.751a2.4 2.4 0 0 0 .694-1.71V8.432c0-2.05-2.37-3.19-3.971-1.909l-2.141 1.713a3.667 3.667 0 0 0-3.666-3.57H9.695l2.444 2.445h1.083c.675 0 1.222.547 1.222 1.222z"
        />
      </symbol>
      <symbol id="send" viewBox="0 0 24 24">
        <path
          fill="#00CDDB"
          fillRule="evenodd"
          d="M22.665 1.343c.304.308.412.76.279 1.171l-6.369 19.684a1.158 1.158 0 0 1-2.123.189l-4.471-8.384-8.387-4.681a1.158 1.158 0 0 1 .218-2.117l19.685-6.152c.413-.13.863-.017 1.168.29zM12.268 13.37l2.944 5.52L19.26 6.378l-6.993 6.992zm5.427-8.703L5.074 8.612l5.568 3.108 7.053-7.053z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="app-logo" viewBox="0 0 250 116">
        <path
          fill="#00CDDB"
          fillRule="evenodd"
          d="M221.026 0C237.028 0 250 12.972 250 28.974a28.854 28.854 0 0 1-6.447 18.224 29.414 29.414 0 0 1-2.236 2.506l-10.092 10.09C242.195 63.922 250 74.51 250 86.924c0 16.002-12.972 28.974-28.974 28.974h-56.793c-7.206.284-14.498-2.106-20.26-7.17-6.063-5.311-9.892-13.11-9.892-21.804 0-8.514 3.672-16.17 9.518-21.471l9.326-9.324c-11.007-4.108-18.844-14.715-18.844-27.154C134.081 12.972 147.053 0 163.055 0h57.971z"
          clipRule="evenodd"
        />
        <path
          fill="#00CDDB"
          d="M115.92 57.96c0 32.01-25.95 57.96-57.96 57.96C25.95 115.92 0 89.97 0 57.96 0 25.95 25.95 0 57.96 0c32.01 0 57.96 25.95 57.96 57.96z"
        />
        <path
          fill="#00CDDB"
          fillRule="evenodd"
          d="M213.299 0c16.002 0 28.974 12.972 28.974 28.974a28.855 28.855 0 0 1-6.448 18.225 29.21 29.21 0 0 1-2.235 2.505l-10.092 10.09c10.97 4.127 18.775 14.716 18.775 27.129 0 16.002-12.972 28.974-28.974 28.974h-56.793c-7.207.284-14.5-2.107-20.262-7.172-6.063-5.311-9.891-13.11-9.891-21.802 0-8.514 3.672-16.17 9.519-21.471l9.325-9.324c-11.006-4.108-18.844-14.715-18.844-27.154C126.353 12.972 139.326 0 155.328 0h57.971z"
          clipRule="evenodd"
        />
        <path
          fill="#333"
          d="M123.261 57.96c0 32.01-25.95 57.96-57.96 57.96-32.01 0-57.96-25.95-57.96-57.96C7.341 25.95 33.291 0 65.301 0c32.01 0 57.96 25.95 57.96 57.96z"
        />
        <path
          fill="#333"
          fillRule="evenodd"
          d="M221.02 0C237.025 0 250 12.972 250 28.974c0 6.87-2.391 13.182-6.387 18.148a29.187 29.187 0 0 1-2.296 2.582l-10.093 10.092.006.002-27.051 27.076a.772.772 0 1 0 1.093 1.092l4.467-4.471c.141.414.327.807.552 1.173.21.341.382.597.518.798.247.366.37.55.37.732 0 .183-.123.366-.37.732a20.7 20.7 0 0 0-.518.799 5.825 5.825 0 0 0-.862 3.06c0 3.22 2.595 5.83 5.798 5.83a5.75 5.75 0 0 0 3.478-1.165 5.84 5.84 0 0 0 1.868-2.405l.078-.189c.136-.33.207-.502.334-.607.138-.114.343-.148.772-.218l.065-.01a5.757 5.757 0 0 0 2.722-1.236 5.832 5.832 0 0 0 2.134-4.518c0-1.907-.911-3.6-2.319-4.664a5.753 5.753 0 0 0-2.537-1.09c-.849-.139-.872-.2-1.095-.78-.042-.11-.091-.239-.154-.39a5.84 5.84 0 0 0-3.444-3.249l15.65-15.665C242.925 64.942 250 75.106 250 86.923c0 16.002-12.975 28.974-28.98 28.974h-56.788c-7.438.293-14.967-2.263-20.811-7.668-5.743-5.295-9.34-12.88-9.34-21.306 0-8.504 3.664-16.152 9.499-21.452l9.346-9.344h-.003l27.496-27.42a.772.772 0 1 0-1.092-1.095l-5.044 5.031a5.917 5.917 0 0 0-.492-1.006c-.21-.34-.383-.597-.518-.798-.247-.366-.37-.549-.37-.732 0-.183.123-.366.37-.732.135-.2.308-.457.518-.798.547-.89.862-1.938.862-3.06 0-3.22-2.596-5.83-5.798-5.83-1.305 0-2.51.433-3.479 1.165a5.846 5.846 0 0 0-1.867 2.405l-.078.188c-.136.33-.207.503-.334.607-.139.115-.344.148-.772.218l-.065.011a5.758 5.758 0 0 0-2.722 1.235 5.832 5.832 0 0 0-2.134 4.518c0 1.908.911 3.6 2.319 4.664a5.754 5.754 0 0 0 2.537 1.09c.849.14.872.2 1.094.781.042.11.092.238.155.389a5.846 5.846 0 0 0 1.867 2.405 5.8 5.8 0 0 0 1.39.776l-15.397 15.355c-10.182-4.494-17.288-14.677-17.288-26.52C134.081 12.972 147.055 0 163.06 0h57.96zm-61.324 12.589c2.851.764 4.667 3.232 4.056 5.513-.612 2.28-3.418 3.51-6.269 2.746-2.851-.764-4.667-3.232-4.056-5.513.611-2.28 3.418-3.51 6.269-2.746zm-8.976 6.953c3.215 0 5.822 2.092 5.822 4.672 0 2.58-2.607 4.671-5.822 4.671s-5.821-2.091-5.821-4.671 2.606-4.672 5.821-4.672zm13.032 20.702c.611 2.28-1.205 4.75-4.056 5.513-2.851.764-5.658-.466-6.269-2.746-.611-2.281 1.205-4.75 4.056-5.514 2.851-.764 5.657.466 6.269 2.747zM150.72 29.892c3.215 0 5.822 2.091 5.822 4.671s-2.607 4.672-5.822 4.672-5.821-2.092-5.821-4.672c0-2.58 2.606-4.671 5.821-4.671zm73.666 40.656c-2.851.764-4.667 3.233-4.056 5.513.611 2.281 3.418 3.511 6.269 2.747 2.851-.764 4.667-3.232 4.056-5.513-.611-2.281-3.418-3.51-6.269-2.747zm3.154 21.544c0 2.58 2.606 4.671 5.821 4.671 3.216 0 5.822-2.091 5.822-4.671s-2.606-4.672-5.822-4.672c-3.215 0-5.821 2.092-5.821 4.672zm-7.21 6.112c-.611 2.281 1.205 4.749 4.056 5.513 2.851.764 5.658-.466 6.269-2.747.611-2.28-1.205-4.749-4.056-5.513-2.851-.764-5.658.466-6.269 2.747zm7.21-16.462c0 2.58 2.606 4.672 5.821 4.672 3.216 0 5.822-2.092 5.822-4.672 0-2.58-2.606-4.671-5.822-4.671-3.215 0-5.821 2.091-5.821 4.671z"
          clipRule="evenodd"
        />
        <path
          fill="#00CDDB"
          d="M81.53 55.283c2.06 1.19 2.06 4.164 0 5.354L61.824 72.014c-2.061 1.19-4.637-.297-4.637-2.677V46.582c0-2.38 2.576-3.867 4.637-2.677L81.53 55.283z"
        />
      </symbol>
      <symbol id="thumbs-up" viewBox="0 0 24 24">
        <path
          fill="gray"
          fillRule="evenodd"
          d="M14.261 1.148a2.891 2.891 0 0 0-3.494 1.441L7.224 9.646V8.28a.776.776 0 0 0-.778-.775H3.334A2.33 2.33 0 0 0 1 9.83v10.847A2.33 2.33 0 0 0 3.334 23h3.112c.43 0 .778-.347.778-.775v-.876l.723.48A7.022 7.022 0 0 0 11.831 23h4.664a5.44 5.44 0 0 0 5.371-4.532l1.08-6.452c.395-2.361-1.433-4.51-3.837-4.51h-3.546l.616-3.067a2.873 2.873 0 0 0-1.918-3.291zm.35 7.907a.6.6 0 0 0 .006 0h4.492c1.442 0 2.54 1.29 2.302 2.706l-1.08 6.453a3.885 3.885 0 0 1-3.836 3.237H11.83a5.462 5.462 0 0 1-3.02-.911l-1.587-1.054V11.38h.389a.778.778 0 0 0 .695-.429l3.85-7.668a1.332 1.332 0 0 1 2.495.853l-.799 3.979a.765.765 0 0 0 0 .336.773.773 0 0 0 .757.605zm-8.943 0H3.334a.776.776 0 0 0-.778.774v10.847c0 .428.348.775.778.775h2.334V9.055z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="user" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 4.21c-1.864 0-3.375 1.485-3.375 3.316 0 1.832 1.511 3.316 3.375 3.316s3.375-1.484 3.375-3.316c0-1.83-1.511-3.315-3.375-3.315zM6.375 7.527C6.375 4.474 8.893 2 12 2s5.625 2.474 5.625 5.526c0 3.052-2.518 5.527-5.625 5.527s-5.625-2.475-5.625-5.527zm3.375 8.842c-2.485 0-4.5 1.98-4.5 4.422v1.105c0 .61-.504 1.105-1.125 1.105A1.115 1.115 0 0 1 3 21.895V20.79c0-3.663 3.022-6.632 6.75-6.632h4.5c3.728 0 6.75 2.969 6.75 6.632v1.105c0 .61-.504 1.105-1.125 1.105a1.115 1.115 0 0 1-1.125-1.105V20.79c0-2.442-2.015-4.422-4.5-4.422h-4.5z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="video" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M3.444 7.482c0-.844.684-1.528 1.528-1.528h7.945c.843 0 1.527.684 1.527 1.528v7.945c0 .843-.684 1.527-1.527 1.527H4.972a1.528 1.528 0 0 1-1.528-1.527V7.482zm13.444 8.02a3.972 3.972 0 0 1-3.971 3.897H4.972A3.972 3.972 0 0 1 1 15.427V7.482A3.972 3.972 0 0 1 4.972 3.51h7.945a3.972 3.972 0 0 1 3.971 3.897l1.799-1.583C20.365 4.348 23 5.539 23 7.774v7.361c0 2.235-2.635 3.426-4.313 1.95l-1.799-1.583zm0-3.324c.001.044.02.085.053.114l3.36 2.958a.14.14 0 0 0 .078.04c.022.002.053 0 .087-.016a.165.165 0 0 0 .068-.055.14.14 0 0 0 .021-.084V7.774a.14.14 0 0 0-.02-.085.166.166 0 0 0-.07-.054.165.165 0 0 0-.086-.016.14.14 0 0 0-.077.04l-3.361 2.958a.153.153 0 0 0-.052.114v1.447z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="cancle" viewBox="0 0 24 24">
        <path
          fill="#0C364E"
          fillRule="evenodd"
          d="M22.356 4.756a2.2 2.2 0 1 0-3.112-3.112L12 8.89 4.756 1.644a2.2 2.2 0 1 0-3.112 3.112L8.89 12l-7.245 7.244a2.2 2.2 0 1 0 3.112 3.112L12 15.11l7.244 7.245a2.2 2.2 0 1 0 3.112-3.112L15.11 12l7.245-7.244z"
          clipRule="evenodd"
        />
      </symbol>
    </svg>
  );
}

export default SVGSprite;
