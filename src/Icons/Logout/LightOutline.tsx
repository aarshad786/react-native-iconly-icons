import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const LogoutLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.32 22H6.432A4.439 4.439 0 0 1 2 17.565V6.436A4.44 4.44 0 0 1 6.433 2h4.875a4.441 4.441 0 0 1 4.436 4.436v.932a.75.75 0 0 1-1.5 0v-.932A2.939 2.939 0 0 0 11.308 3.5H6.433A2.937 2.937 0 0 0 3.5 6.436v11.129A2.937 2.937 0 0 0 6.433 20.5h4.886a2.929 2.929 0 0 0 2.925-2.924v-.943a.75.75 0 0 1 1.5 0v.943A4.43 4.43 0 0 1 11.32 22"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={8} y={11} width={15} height={2}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.996 11.25h13.541v1.5H8.997v-1.5Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.787 12.75H9.747a.75.75 0 0 1 0-1.5h12.04a.75.75 0 0 1 0 1.5"
        fill={props.fillColor}
      />
    </G>
    <Mask id="b" maskUnits="userSpaceOnUse" x={18} y={8} width={5} height={8}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.11 8.335h4.427v7.331H18.11v-7.33Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.86 15.666a.75.75 0 0 1-.529-1.281L20.723 12 18.33 9.616a.749.749 0 1 1 1.058-1.062l2.928 2.915a.746.746 0 0 1 0 1.062l-2.928 2.916a.747.747 0 0 1-.529.219"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default LogoutLightOutline
