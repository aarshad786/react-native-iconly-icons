import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDown2LightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M4.47 7.97a.75.75 0 0 1 .976-.073l.084.073L12 14.439l6.47-6.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 .073.976l-.073.084-7 7a.75.75 0 0 1-.976.073l-.084-.073-7-7a.75.75 0 0 1 0-1.06Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ArrowDown2LightOutline
