import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const UploadCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12.12 2.209V14.25M9.205 5.136l2.916-2.928 2.916 2.928M7.63 7.64c-3.58.33-4.88 1.67-4.88 7 0 7.101 2.31 7.101 9.25 7.101 6.94 0 9.25 0 9.25-7.1 0-5.33-1.3-6.67-4.88-7" />
    </G>
  </Svg>
)
export default UploadCurved
