import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowLeftLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill={props.fillColor}>
      <Path d="M20 12.274a.75.75 0 0 1-.648.744l-.102.006h-15a.75.75 0 0 1-.102-1.493l.102-.007h15a.75.75 0 0 1 .75.75Z" />
      <Path d="M10.829 17.767a.75.75 0 0 1-.974 1.136l-.084-.073-6.05-6.024a.75.75 0 0 1-.073-.978l.073-.085 6.05-6.025a.75.75 0 0 1 1.13.98l-.072.083-5.516 5.494 5.516 5.492Z" />
    </G>
  </Svg>
)
export default ArrowLeftLightOutline
