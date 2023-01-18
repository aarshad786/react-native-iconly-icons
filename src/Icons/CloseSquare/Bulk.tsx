import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CloseSquareBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2"
      fill={props.fillColor}
    />
    <Path
      d="m15.016 13.77-1.78-1.778 1.779-1.778a.874.874 0 0 0 0-1.237.872.872 0 0 0-1.237 0l-1.78 1.777-1.778-1.78a.877.877 0 0 0-1.238 0 .877.877 0 0 0 0 1.238l1.78 1.78-1.776 1.775a.874.874 0 1 0 1.237 1.238l1.776-1.776 1.78 1.78a.876.876 0 0 0 1.237-1.238"
      fill={props.fillColor}
    />
  </Svg>
)
export default CloseSquareBulk
