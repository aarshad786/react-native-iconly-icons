import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowUp2Light = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m5 15.5 7-7 7 7"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowUp2Light
