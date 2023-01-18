import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const HideLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.76 15.617a.744.744 0 0 1-.53-.22 3.874 3.874 0 0 1-1.144-2.759A3.92 3.92 0 0 1 12 8.721c1.038 0 2.046.42 2.765 1.15a.749.749 0 0 1-1.07 1.053A2.387 2.387 0 0 0 12 10.221a2.418 2.418 0 0 0-2.414 2.417c0 .641.25 1.245.705 1.7a.75.75 0 0 1-.53 1.28M12.567 16.491a.75.75 0 0 1-.133-1.488 2.409 2.409 0 0 0 1.932-1.937.75.75 0 0 1 1.477.266 3.92 3.92 0 0 1-3.14 3.147.778.778 0 0 1-.136.012"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={4} width={17} height={15}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4.624h16.086v14.099H2V4.623Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.654 18.723a.754.754 0 0 1-.463-.16c-1.69-1.328-3.12-3.275-4.13-5.63a.745.745 0 0 1 0-.592c1.022-2.364 2.46-4.321 4.16-5.658 3.466-2.743 8.08-2.752 11.58.02a.75.75 0 1 1-.93 1.176c-2.966-2.348-6.787-2.34-9.721-.018-1.437 1.13-2.67 2.776-3.58 4.778.901 1.99 2.124 3.626 3.549 4.744a.75.75 0 0 1-.465 1.34"
        fill={props.fillColor}
      />
    </G>
    <Mask id="b" maskUnits="userSpaceOnUse" x={8} y={8} width={14} height={13}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.718 8.741H22V20.69H8.718V8.741Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.69a8.771 8.771 0 0 1-2.769-.452.75.75 0 0 1 .474-1.424A7.245 7.245 0 0 0 12 19.19c3.428 0 6.561-2.442 8.43-6.553a14.5 14.5 0 0 0-1.58-2.694.75.75 0 0 1 1.197-.902c.724.961 1.36 2.072 1.891 3.298a.742.742 0 0 1 0 .595C19.842 17.79 16.128 20.69 12 20.69"
        fill={props.fillColor}
      />
    </G>
    <Mask id="c" maskUnits="userSpaceOnUse" x={3} y={4} width={18} height={18}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.364 4h17.273v17.273H3.364V4Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#c)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.113 21.273a.749.749 0 0 1-.53-1.28L19.357 4.22a.749.749 0 1 1 1.06 1.061L4.643 21.053a.744.744 0 0 1-.53.22"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default HideLightOutline
