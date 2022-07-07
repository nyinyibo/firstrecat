import React from 'react'

import './green.css'

export default function Green() {
  return (
    <div className="green-green">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.79332 0.615622C1.44138 0.459596 1.10298 0.411588 0.818726 0.471598L18.9705 15.7381L23.9924 11.5254L16.4257 7.80482C16.4257 7.80482 9.29226 4.30024 4.98781 2.18788L1.79332 0.615622Z"
          fill="url(#paint0_linear_50_38)"
        />
        <mask
          id="mask0_50_38"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="16"
        >
          <path
            d="M1.79332 0.615622C1.44138 0.459596 1.10298 0.411588 0.818726 0.471598L18.9705 15.7381L23.9924 11.5254L16.4257 7.80482C16.4257 7.80482 9.29226 4.30024 4.98781 2.18788L1.79332 0.615622Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_50_38)" />
        <defs>
          <linearGradient
            id="paint0_linear_50_38"
            x1="4.25097"
            y1="-4.42021"
            x2="11.6061"
            y2="17.1415"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A3B5" />
            <stop offset="1" stopColor="#D6FFA1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
