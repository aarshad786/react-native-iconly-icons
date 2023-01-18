import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const InfoCircleBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.87 12.63a.877.877 0 0 1-.875.876.877.877 0 0 1-.875-.875V8.21c0-.482.393-.875.875-.875s.875.393.875.875v4.42Zm-1.745 3.173a.878.878 0 0 1 1.755 0 .876.876 0 0 1-.875.875.879.879 0 0 1-.88-.875Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default InfoCircleBulk
