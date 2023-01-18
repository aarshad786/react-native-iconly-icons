import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GraphBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M10.153 5.556c.05.103.084.214.1.328l.278 4.14.138 2.081c.002.214.035.427.1.631.167.397.568.649 1.005.631l6.657-.435c.289-.005.567.103.774.3.173.163.284.378.32.608l.011.14c-.275 3.815-3.077 6.997-6.884 7.818-3.806.821-7.71-.914-9.591-4.263a8.215 8.215 0 0 1-.997-3.146 6.018 6.018 0 0 1-.063-.986c-.006-4.09 2.906-7.626 6.983-8.478.491-.077.972.183 1.169.63Z"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M12.87 2c4.56.117 8.392 3.396 9.13 7.812l-.007.033-.02.047.003.13a.8.8 0 0 1-.192.473.827.827 0 0 1-.462.27l-.11.016-7.68.498a.917.917 0 0 1-.7-.227.884.884 0 0 1-.289-.537l-.515-7.67a.123.123 0 0 1 0-.08.785.785 0 0 1 .258-.555.815.815 0 0 1 .584-.21Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default GraphBulk