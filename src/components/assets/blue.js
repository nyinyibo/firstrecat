import React from 'react'

import './blue.css'

export default function Blue() {
  return (
    <div className="blue-blue">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 19 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9732 15.7261L0.835003 0.483582C0.415387 0.567596 0.158203 0.855644 0.158203 1.32372V30.4886C0.158203 30.8846 0.334171 31.1247 0.564283 31.2087L18.9732 15.7261Z"
          fill="url(#paint0_linear_50_26)"
        />
        <mask
          id="mask0_50_26"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="19"
          height="32"
        >
          <path
            d="M18.9732 15.7261L0.835003 0.483582C0.415387 0.567596 0.158203 0.855644 0.158203 1.32372V30.4886C0.158203 30.8846 0.334171 31.1247 0.564283 31.2087L18.9732 15.7261Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_50_26)" />
        <defs>
          <linearGradient
            id="paint0_linear_50_26"
            x1="12.5736"
            y1="-10.782"
            x2="-4.31396"
            y2="29.6636"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#064AA2" />
            <stop offset="1" stopColor="#63FFD4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
