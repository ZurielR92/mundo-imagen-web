import * as React from "react"
import { SVGProps } from "react"

export const SimpleDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M2.77 7.11c.07.01.1.07.14.11L14.7 19.01c.35.35.26.35.62 0L27.11 7.22c.12-.12.19-.11.29 0 .5.51 1.01 1.01 1.52 1.51.16.15.06.24-.05.35l-4.5 4.5c-3.05 3.05-6.1 6.1-9.15 9.14-.22.22-.22.22-.44 0-4.54-4.54-9.08-9.09-13.62-13.63-.21-.21-.21-.21 0-.41.47-.48.95-.96 1.43-1.44.05-.05.1-.11.18-.13z"
    />
  </svg>
)
