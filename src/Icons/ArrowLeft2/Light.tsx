import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowLeft2Light = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m15.5 19-7-7 7-7"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowLeft2Light
