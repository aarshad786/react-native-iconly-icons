import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperPlusBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M18.809 9.021c-.452 0-1.05-.01-1.794-.01-1.816 0-3.31-1.503-3.31-3.336V2.459A.456.456 0 0 0 13.254 2h-5.29C5.496 2 3.5 4.026 3.5 6.509v10.775C3.5 19.889 5.59 22 8.17 22h7.875c2.46 0 4.455-2.013 4.455-4.498V9.471a.454.454 0 0 0-.453-.458c-.422.003-.93.008-1.238.008"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M16.084 2.567a.477.477 0 0 0-.82.334v2.637c0 1.106.91 2.016 2.015 2.016.698.008 1.666.01 2.488.008a.477.477 0 0 0 .343-.808l-4.026-4.187"
      fill={props.fillColor}
    />
    <Path
      d="M14.367 12.236H12.64V10.51a.745.745 0 1 0-1.489 0v1.727H9.423a.745.745 0 0 0 0 1.49h1.727v1.726a.746.746 0 0 0 1.49 0v-1.726h1.727a.746.746 0 0 0 0-1.49"
      fill={props.fillColor}
    />
  </Svg>
)
export default PaperPlusBulk
