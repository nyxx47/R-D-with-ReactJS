import React from "react";
import "./IllustrationComponent.css";

const IllustrationComponent = ({ dynamicText = "EMAS" }) => {
  return (
    <div className="illustration-container">
      <svg
        width="375"
        height="345"
        viewBox="0 0 375 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1359_27664)">
          {/* Hexagonal grid pattern */}
          <g className="hex-grid">
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 -69.7099 96.9029)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 -5.62282 59.9049)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 58.4643 22.907)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 122.551 -14.091)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 -69.7099 170.899)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 -5.62282 133.901)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 58.4642 96.9029)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 122.551 59.905)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 186.638 22.907)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 -69.7099 244.895)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 -5.62282 207.897)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 58.4643 170.899)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 122.551 133.901)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 186.638 96.9029)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 250.725 59.9049)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 -5.62282 281.893)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 58.4642 244.895)"
              stroke="#1D1D1D"
              strokeDasharray="8 8"
            />
            <rect
              x="0.866041"
              width="74"
              height="74"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 58.4642 244.895)"
              stroke="url(#paint0_radial_1359_27664)"
              strokeDasharray="8 8"
            />
          </g>

          {/* Central diamond shape */}
          <path
            d="M184.141 171.841L184.574 172.091L187.388 170.466L190.203 172.091L190.636 171.841L197.131 175.591L196.698 175.841L203.194 179.59L203.627 179.34L210.122 183.09L209.689 183.34L216.184 187.09L216.617 186.84L223.113 190.59L222.68 190.84L229.175 194.59L229.608 194.34L236.103 198.089L235.67 198.339L242.166 202.089L242.599 201.839L249.094 205.589L248.661 205.839L251.475 207.464L248.661 209.089L249.094 209.339L242.599 213.088L242.166 212.839L235.67 216.588L236.103 216.838L229.608 220.588L229.175 220.338L222.68 224.088L223.113 224.338L216.617 228.088L216.184 227.838L209.689 231.587L210.122 231.837L203.627 235.587L203.194 235.337L196.698 239.087L197.131 239.337L190.636 243.087L190.203 242.837L187.388 244.462L184.574 242.837L184.141 243.087L177.645 239.337L178.078 239.087L171.583 235.337L171.15 235.587L164.655 231.837L165.088 231.587L158.593 227.838L158.16 228.088L151.664 224.338L152.097 224.088L145.602 220.338L145.169 220.588L138.674 216.838L139.107 216.588L132.611 212.839L132.178 213.088L125.683 209.339L126.116 209.089L123.301 207.464L126.116 205.839L125.683 205.589L132.178 201.839L132.611 202.089L139.107 198.339L138.674 198.089L145.169 194.34L145.602 194.59L152.097 190.84L151.664 190.59L158.16 186.84L158.593 187.09L165.088 183.34L164.655 183.09L171.15 179.34L171.583 179.59L178.078 175.841L177.645 175.591L184.141 171.841Z"
            stroke="url(#paint1_linear_1359_27664)"
            strokeOpacity="0.25"
            strokeDasharray="8 8"
          />

          {/* Central device/phone mockup */}
          <rect
            x="-0.646338"
            width="118.652"
            height="118.652"
            rx="9.32891"
            transform="matrix(0.866041 -0.499972 0.866041 0.499972 84.6244 169.221)"
            fill="#121212"
            stroke="url(#paint11_linear_1359_27664)"
            strokeWidth="0.746313"
          />
          <rect
            width="111.947"
            height="111.947"
            rx="6"
            transform="matrix(0.866041 -0.499972 0.866041 0.499972 89.8767 169.541)"
            fill="url(#paint12_radial_1359_27664)"
          />

          {/* Dynamic text area - this is where we'll place the EMAS text */}
          <foreignObject
            x="85.7651"
            y="77.5192"
            width="202.134"
            height="119.848"
          >
            <div className="dynamic-text-container">
              <div className="dynamic-text">{dynamicText}</div>
            </div>
          </foreignObject>

          {/* Code-like elements that were in the original */}
          <g className="code-elements">
            <path
              d="M186.75 183.25L186.75 214.75"
              stroke="url(#paint17_linear_1359_27664)"
              strokeOpacity="0.25"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            <rect
              x="0.199875"
              width="57.4615"
              height="11.7692"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 197.349 203.011)"
              stroke="url(#paint18_linear_1359_27664)"
              strokeWidth="0.230791"
            />
          </g>

          {/* Additional decorative elements */}
          <rect
            width="6.20828"
            height="29.434"
            rx="3.10414"
            transform="matrix(0.866041 -0.499972 0.866041 0.499972 126.758 185.386)"
            fill="url(#paint21_radial_1359_27664)"
          />
          <rect
            x="-0.323169"
            width="118.279"
            height="118.279"
            rx="9.14233"
            transform="matrix(0.866041 -0.499972 0.866041 0.499972 84.6676 137.282)"
            stroke="url(#paint23_linear_1359_27664)"
            strokeWidth="0.373156"
          />
        </g>

        {/* Gradients and definitions */}
        <defs>
          <radialGradient
            id="paint0_radial_1359_27664"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(17.14 -3.86118 -3.81353 12.315 53.2068 5.27984)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0BA16B" />
            <stop offset="1" stopColor="#0BA16B" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_1359_27664"
            x1="154.912"
            y1="188.715"
            x2="187.385"
            y2="244.964"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1D1D1D" stopOpacity="0.1" />
            <stop offset="1" stopColor="#1D1D1D" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_1359_27664"
            x1="115.267"
            y1="7.80971"
            x2="9.25917"
            y2="2.86802"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.05" />
            <stop offset="1" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient
            id="paint12_radial_1359_27664"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(14.5531 8.95575) rotate(68.0913) scale(111.008)"
          >
            <stop stopColor="#1F1F1F" />
            <stop offset="1" stopColor="#1F1F1F" stopOpacity="0.5" />
          </radialGradient>
          <linearGradient
            id="paint17_linear_1359_27664"
            x1="186.25"
            y1="183.25"
            x2="186.25"
            y2="214.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_1359_27664"
            x1="4.55976e-09"
            y1="6"
            x2="57.6923"
            y2="13.8462"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient
            id="paint21_radial_1359_27664"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(14.2221 15.2222 -14.4234 14.1005 0.124578 5.35338)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2A2A2A" />
            <stop offset="1" stopColor="#2A2A2A" stopOpacity="0.5" />
          </radialGradient>
          <linearGradient
            id="paint23_linear_1359_27664"
            x1="102.224"
            y1="15.6823"
            x2="3.3427"
            y2="15.6714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
          <clipPath id="clip0_1359_27664">
            <rect width="375" height="345" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IllustrationComponent;
