import React, { useEffect, useRef, useState } from "react";
import "./BookbuildingComponent.css";

const BookbuildingComponent = () => {
  const [label, setLabel] = useState("CODE");
  const textRef = useRef(null);
  const measureRef = useRef(null);
  const [rectSize, setRectSize] = useState({ width: 0, height: 0 });
  const paddingY = 4; // top/bottom in px
  const paddingX = 7; // left/right in px
  const fontSize = 10; // px in SVG units
  // Screen-space center of the target circle (apply its matrix to local center)
  const circleMatrix = {
    a: 0.866041,
    b: -0.499972,
    c: 0.866041,
    d: 0.499972,
    e: 121.767,
    f: 137.443,
  };
  const circleLocalCenter = { cx: 37.3156, cy: 37.3156 };
  const circleCenter = {
    x:
      circleMatrix.a * circleLocalCenter.cx +
      circleMatrix.c * circleLocalCenter.cy +
      circleMatrix.e,
    y:
      circleMatrix.b * circleLocalCenter.cx +
      circleMatrix.d * circleLocalCenter.cy +
      circleMatrix.f,
  };

  useEffect(() => {
    if (measureRef.current) {
      const bbox = measureRef.current.getBBox();
      setRectSize({
        width: bbox.width + paddingX * 2,
        height: bbox.height + paddingY * 2,
      });
    }
  }, [label, fontSize]);

  return (
    <div className="bookbuilding-container">
      <div style={{ position: "absolute", top: 16 }}>
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Type label"
          style={{
            padding: "6px 10px",
            borderRadius: 6,
            border: "1px solid #333",
            background: "#121212",
            color: "#eaeaea",
            outline: "none",
          }}
        />
      </div>
      <svg
        width="375"
        height="345"
        viewBox="0 0 375 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hidden measurement text to compute size without transforms */}
        <text
          ref={measureRef}
          x={0}
          y={0}
          fontSize={fontSize}
          fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
          dominantBaseline="hanging"
          fill="none"
          opacity="0"
          pointerEvents="none"
        >
          {label}
        </text>
        {/* Dashed lines */}
        <path
          d="M239 199.5L315.5 244.5L370.5 276"
          stroke="#1D1D1D"
          strokeDasharray="6 6"
        />
        <path d="M-45 300.5L344 80" stroke="#1D1D1D" strokeDasharray="6 6" />
        <path d="M59 318.5L344 154" stroke="#1D1D1D" strokeDasharray="6 6" />
        <path
          d="M-35 450.5L400 195"
          stroke="#1D1D1D"
          stroke-dasharray="6 6"
        ></path>
        <path d="M229.5 343L11 216.5" stroke="#1D1D1D" strokeDasharray="6 6" />
        <path
          d="M370.5 202.5L274 146.5"
          stroke="#1D1D1D"
          strokeDasharray="6 6"
        />
        <path d="M17 195L100 147" stroke="#1D1D1D" strokeDasharray="6 6" />
        <path d="M316 319L27 152" stroke="#1D1D1D" strokeDasharray="6 6" />
        {/* Main device/phone mockup */}
        <rect
          x="-0.646338"
          width="118.652"
          height="118.652"
          rx="9.32891"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 84.6244 169.221)"
          fill="#121212"
          stroke="url(#paint3_linear_1464_35793)"
          strokeWidth="0.746313"
        />
        <rect
          width="111.947"
          height="111.947"
          rx="6"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 89.8767 169.541)"
          fill="url(#paint4_radial_1464_35793)"
        />
        {/* Device corners */}
        <rect
          x="0.161584"
          width="8.76918"
          height="8.76918"
          rx="4.38459"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 100.244 169.625)"
          stroke="#2E2E2E"
          strokeWidth="0.186578"
        />
        <circle
          cx="3.73156"
          cy="3.73156"
          r="3.63827"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 101.515 169.544)"
          fill="#2A2A2A"
          stroke="url(#paint5_linear_1464_35793)"
          strokeWidth="0.186578"
        />
        <rect
          x="0.161584"
          width="8.76918"
          height="8.76918"
          rx="4.38459"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 179.098 215.148)"
          stroke="#2E2E2E"
          strokeWidth="0.186578"
        />
        <circle
          cx="3.73156"
          cy="3.73156"
          r="3.63827"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 180.369 215.067)"
          fill="#2A2A2A"
          stroke="url(#paint6_linear_1464_35793)"
          strokeWidth="0.186578"
        />
        <rect
          x="0.161584"
          width="8.76918"
          height="8.76918"
          rx="4.38459"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 179.098 124.101)"
          stroke="#2E2E2E"
          strokeWidth="0.186578"
        />
        <circle
          cx="3.73156"
          cy="3.73156"
          r="3.63827"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 180.369 124.021)"
          fill="#2A2A2A"
          stroke="url(#paint7_linear_1464_35793)"
          strokeWidth="0.186578"
        />
        <rect
          x="0.161584"
          width="8.76918"
          height="8.76918"
          rx="4.38459"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 257.951 169.625)"
          stroke="#2E2E2E"
          strokeWidth="0.186578"
        />
        <circle
          cx="3.73156"
          cy="3.73156"
          r="3.63827"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 259.222 169.544)"
          fill="#2A2A2A"
          stroke="url(#paint8_linear_1464_35793)"
          strokeWidth="0.186578"
        />
        {/* Vertical lines */}
        <path
          d="M186.75 183.25L186.75 214.75"
          stroke="url(#paint9_linear_1464_35793)"
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
          stroke="url(#paint10_linear_1464_35793)"
          strokeWidth="0.230791"
        />
        {/* Code text */}
        <path
          d="M208.707 204.427C207.408 205.177 206.052 205.118 205.003 204.512L202.438 203.031L203.359 202.5L205.892 203.962C206.487 204.305 207.242 204.342 207.901 203.962C208.559 203.581 208.489 203.149 207.894 202.806L205.361 201.344L206.289 200.808L208.847 202.285C209.909 202.898 210.005 203.677 208.707 204.427ZM215.214 200.582L214.338 201.088L209.521 200.656L212.304 202.262L211.395 202.786L207.129 200.323L208.063 199.784L212.719 200.19L210.039 198.643L210.948 198.119L215.214 200.582ZM217.737 199.125L216.055 200.096L211.789 197.633L213.471 196.662C214.808 195.89 216.586 195.846 217.871 196.588C219.157 197.33 219.074 198.353 217.737 199.125ZM216.938 198.663C217.782 198.176 217.667 197.541 216.944 197.124C216.189 196.688 215.147 196.618 214.27 197.124L213.497 197.57L216.164 199.11L216.938 198.663ZM223.665 195.703L220.646 197.446L216.38 194.983L219.399 193.24L220.198 193.702L218.087 194.92L218.989 195.441L221.055 194.248L221.855 194.71L219.789 195.902L220.755 196.46L222.865 195.241L223.665 195.703ZM227.829 193.299L226.786 193.901L224.432 193.51L223.767 193.894L225.283 194.769L224.375 195.293L220.109 192.83L222.104 191.678C222.993 191.165 224.119 191.187 224.912 191.645C225.667 192.081 225.596 192.586 225.245 192.915L227.829 193.299ZM223.921 192.882C224.285 192.671 224.343 192.387 223.985 192.18C223.626 191.974 223.134 192.007 222.769 192.217L221.816 192.767L222.968 193.432L223.921 192.882ZM232.712 190.48L231.747 191.037L228.069 189.778L230.256 191.898L229.291 192.455L223.803 190.697L224.82 190.11L228.651 191.458L226.38 189.209L227.09 188.8L230.979 190.114L228.638 187.906L229.662 187.315L232.712 190.48ZM237.81 187.537L236.767 188.139L234.414 187.747L233.748 188.131L235.264 189.006L234.356 189.531L230.09 187.068L232.085 185.916C232.974 185.403 234.1 185.425 234.893 185.883C235.648 186.318 235.578 186.824 235.226 187.153L237.81 187.537ZM233.902 187.12C234.266 186.909 234.324 186.625 233.966 186.418C233.608 186.211 233.115 186.244 232.751 186.455L231.798 187.005L232.949 187.67L233.902 187.12ZM239.374 186.634L238.466 187.158L234.2 184.695L235.108 184.171L239.374 186.634ZM242.121 185.048L241.206 185.576L237.739 183.575L236.492 184.295L235.693 183.833L239.095 181.869L239.895 182.331L238.654 183.047L242.121 185.048ZM246.963 182.253L243.944 183.996L239.678 181.533L242.697 179.79L243.496 180.252L241.385 181.47L242.287 181.991L244.353 180.798L245.153 181.26L243.087 182.452L244.052 183.01L246.163 181.791L246.963 182.253ZM251.127 179.849L250.084 180.451L247.73 180.06L247.065 180.444L248.581 181.319L247.673 181.843L243.407 179.38L245.402 178.228C246.291 177.715 247.417 177.737 248.21 178.195C248.965 178.631 248.894 179.136 248.543 179.465L251.127 179.849ZM247.219 179.432C247.583 179.221 247.641 178.937 247.283 178.73C246.924 178.523 246.432 178.557 246.067 178.767L245.114 179.317L246.266 179.982L247.219 179.432Z"
          fill="url(#paint11_linear_1464_35793)"
        />
        {/* More vertical lines */}
        <path
          d="M265.75 137.25L265.75 168.75"
          stroke="url(#paint12_linear_1464_35793)"
          strokeOpacity="0.25"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        <rect
          width="6.20828"
          height="29.434"
          rx="3.10414"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 126.758 185.386)"
          fill="url(#paint13_radial_1464_35793)"
        />
        <path
          d="M107.75 137.25L107.75 168.75"
          stroke="url(#paint14_linear_1464_35793)"
          strokeOpacity="0.25"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        {/* Green animated paths */}
        <path
          className="animated-path speed-slow"
          d="M143 344L187 318.5L315.5 244.5L239 199.5"
          stroke="#0BA16B"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="animated-path speed-faster"
          d="M143 344L187 318.5L59 244.5L136.5 200"
          stroke="#0BA16B"
          strokeWidth="2"
          fill="none"
        />
        {/* Second device */}
        <rect
          x="-0.323169"
          width="118.279"
          height="118.279"
          rx="9.14233"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 84.6676 137.282)"
          stroke="url(#paint15_linear_1464_35793)"
          strokeWidth="0.373156"
        />
      
        <rect
          data-figma-bg-blur-radius="3.73156"
          width="117.917"
          height="117.917"
          rx="9.43339"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 84.7109 137.443)"
          fill="white"
          fillOpacity="0.02"
        />
        <rect
          width="111.947"
          height="111.947"
          rx="6"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 89.8767 137.441)"
          fill="url(#paint16_radial_1464_35793)"
        />
        {/* Mask and filters */}
        <mask
          id="mask0_1464_35793"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="131"
          y="105"
          width="111"
          height="65"
        >
          <circle
            cx="44.7788"
            cy="44.7788"
            r="44.7788"
            transform="matrix(0.866041 -0.499972 0.866041 0.499972 109.272 137.443)"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1464_35793)">
          {/* Rotate blobs around the circle's screen-space center without extra skew */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`0 ${circleCenter.x} ${circleCenter.y}; 360 ${circleCenter.x} ${circleCenter.y}`}
              dur="6s"
              repeatCount="indefinite"
              calcMode="linear"
            />
            <image
              href="/blobsBlur.png"
              x={circleCenter.x - 100}
              y={circleCenter.y - 100}
              width="200"
              height="200"
            />
          </g>
        </g>
        {/* Circles and additional elements */}
        <circle
          cx="37.3156"
          cy="37.3156"
          r="36.9425"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 121.767 137.443)"
          fill="#121212"
          stroke="url(#paint17_linear_1464_35793)"
          strokeWidth="0.746313"
        />
        <circle
          cx="44.7788"
          cy="44.7788"
          r="44.4056"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 109.272 137.443)"
          stroke="url(#paint18_linear_1464_35793)"
          strokeWidth="0.746313"
        />
        {/* More device corners */}
        <rect
          x="0.161584"
          width="8.76918"
          height="8.76918"
          rx="4.38459"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 100.245 137.524)"
          stroke="#2E2E2E"
          strokeWidth="0.186578"
        />
        <circle
          cx="3.73156"
          cy="3.73156"
          r="3.63827"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 101.516 137.443)"
          fill="#2A2A2A"
          stroke="url(#paint19_linear_1464_35793)"
          strokeWidth="0.186578"
        />
        <rect
          x="0.161584"
          width="8.76918"
          height="8.76918"
          rx="4.38459"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 179.098 183.048)"
          stroke="#2E2E2E"
          strokeWidth="0.186578"
        />
        <circle
          cx="3.73156"
          cy="3.73156"
          r="3.63827"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 180.369 182.967)"
          fill="#2A2A2A"
          stroke="url(#paint20_linear_1464_35793)"
          strokeWidth="0.186578"
        />
        <rect
          x="0.161584"
          width="8.76918"
          height="8.76918"
          rx="4.38459"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 179.098 92.0007)"
          stroke="#2E2E2E"
          strokeWidth="0.186578"
        />
        <circle
          cx="3.73156"
          cy="3.73156"
          r="3.63827"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 180.369 91.9199)"
          fill="#2A2A2A"
          stroke="url(#paint21_linear_1464_35793)"
          strokeWidth="0.186578"
        />
        <rect
          x="0.161584"
          width="8.76918"
          height="8.76918"
          rx="4.38459"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 257.951 137.524)"
          stroke="#2E2E2E"
          strokeWidth="0.186578"
        />
        <circle
          cx="3.73156"
          cy="3.73156"
          r="3.63827"
          transform="matrix(0.866041 -0.499972 0.866041 0.499972 259.222 137.443)"
          fill="#2A2A2A"
          stroke="url(#paint22_linear_1464_35793)"
          strokeWidth="0.186578"
        />
        {/* Dynamic label on circle with same skew/rotation as the circle */}
        <g transform="matrix(0.866041 -0.499972 0.866041 0.499972 121.767 137.443)">
          {rectSize.width > 0 && (
            <rect
              x={circleLocalCenter.cx - rectSize.width / 2}
              y={circleLocalCenter.cy - rectSize.height / 2}
              width={rectSize.width}
              height={rectSize.height}
              rx={2}
              stroke="url(#paint23_linear_1464_35793)"
              strokeWidth="0.373156"
              fill="none"
            />
          )}
          <text
            ref={textRef}
            x={circleLocalCenter.cx}
            y={circleLocalCenter.cy}
            fontSize={fontSize}
            fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
            fontWeight={700}
            textAnchor="middle"
            dominantBaseline="middle"
            dy="0.05em"
            fill="url(#paint24_linear_1464_35793)"
          >
            {label}
          </text>
        </g>
        {/* Definitions and gradients */}
        <defs>
          <clipPath
            id="bgblur_0_1464_35793_clip_path"
            transform="translate(-85.765 -77.5192)"
          >
            <rect
              width="117.917"
              height="117.917"
              rx="9.43339"
              transform="matrix(0.866041 -0.499972 0.866041 0.499972 84.7109 137.443)"
            />
          </clipPath>
          <filter
            id="filter1_f_1464_35793"
            x="-1000"
            y="-1000"
            width="3000"
            height="3000"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="11.2013"
              result="effect1_foregroundBlur_1464_35793"
            />
          </filter>
          <filter
            id="filter2_f_1464_35793"
            x="-1000"
            y="-1000"
            width="3000"
            height="3000"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="11.2013"
              result="effect1_foregroundBlur_1464_35793"
            />
          </filter>
          <filter
            id="filter3_f_1464_35793"
            x="-1000"
            y="-1000"
            width="3000"
            height="3000"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="11.2013"
              result="effect1_foregroundBlur_1464_35793"
            />
          </filter>
          <filter
            id="filter4_d_1464_35793"
            x="169.577"
            y="127.184"
            width="34.2118"
            height="21.2434"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.49263" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1464_35793"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1464_35793"
              result="shape"
            />
          </filter>

          {/* Gradients */}
          <linearGradient
            id="paint0_linear_1464_35793"
            x1="2.99971"
            y1="0"
            x2="2.99971"
            y2="15.9985"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0BA16B" />
            <stop offset="1" stopColor="#043B27" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1464_35793"
            x1="9.03302"
            y1="0"
            x2="9.03302"
            y2="6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0BA16B" />
            <stop offset="1" stopColor="#043B27" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1464_35793"
            x1="3.44374"
            y1="0"
            x2="3.44374"
            y2="6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0BA16B" />
            <stop offset="1" stopColor="#043B27" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1464_35793"
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
            id="paint4_radial_1464_35793"
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
            id="paint5_linear_1464_35793"
            x1="3.73156"
            y1="0"
            x2="3.73156"
            y2="7.46313"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1464_35793"
            x1="3.73156"
            y1="0"
            x2="3.73156"
            y2="7.46313"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1464_35793"
            x1="3.73156"
            y1="0"
            x2="3.73156"
            y2="7.46313"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1464_35793"
            x1="3.73156"
            y1="0"
            x2="3.73156"
            y2="7.46313"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_1464_35793"
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
            id="paint10_linear_1464_35793"
            x1="4.55976e-09"
            y1="6"
            x2="57.6923"
            y2="13.8462"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_1464_35793"
            x1="204.55"
            y1="204.738"
            x2="227.498"
            y2="164.989"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#999999" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_1464_35793"
            x1="265.25"
            y1="137.25"
            x2="265.25"
            y2="168.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient
            id="paint13_radial_1464_35793"
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
            id="paint14_linear_1464_35793"
            x1="107.25"
            y1="137.25"
            x2="107.25"
            y2="168.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint15_linear_1464_35793"
            x1="102.224"
            y1="15.6823"
            x2="3.3427"
            y2="15.6714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient
            id="paint16_radial_1464_35793"
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
            id="paint17_linear_1464_35793"
            x1="37.3156"
            y1="0"
            x2="37.3156"
            y2="74.6313"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.08" />
            <stop offset="1" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_1464_35793"
            x1="44.7788"
            y1="0"
            x2="44.7788"
            y2="89.5575"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.05" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint19_linear_1464_35793"
            x1="3.73156"
            y1="0"
            x2="3.73156"
            y2="7.46313"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint20_linear_1464_35793"
            x1="3.73156"
            y1="0"
            x2="3.73156"
            y2="7.46313"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint21_linear_1464_35793"
            x1="3.73156"
            y1="0"
            x2="3.73156"
            y2="7.46313"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint22_linear_1464_35793"
            x1="3.73156"
            y1="0"
            x2="3.73156"
            y2="7.46313"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint23_linear_1464_35793"
            x1="3.316e-09"
            y1="9.99263"
            x2="42.5816"
            y2="12.5214"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="1" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="paint24_linear_1464_35793"
            x1="172.864"
            y1="145.507"
            x2="187.152"
            y2="120.758"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#999999" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BookbuildingComponent;
