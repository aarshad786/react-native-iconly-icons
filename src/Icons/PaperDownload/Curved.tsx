import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const PaperDownloadCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="m20.16 8.3-5.67-5.4a18.2 18.2 0 0 0-2.45-.15c-6.29 0-8.39 2.32-8.39 9.25 0 6.94 2.1 9.25 8.39 9.25 6.3 0 8.4-2.31 8.4-9.25 0-1.42-.09-2.65-.28-3.7Z"
      />
      <Path d="M13.934 2.833v2.66a3.363 3.363 0 0 0 3.364 3.364h2.951M11.66 16.017v-6.04M9.315 13.662l2.345 2.355 2.345-2.355" />
    </G>
  </Svg>
)
export default PaperDownloadCurved