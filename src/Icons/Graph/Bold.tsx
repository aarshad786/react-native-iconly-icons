import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GraphBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.326 2.21a.824.824 0 0 1 .588-.21c4.57.138 8.39 3.456 9.083 7.89a.244.244 0 0 1 0 .08.781.781 0 0 1-.197.576.811.811 0 0 1-.555.269l-7.68.506a.917.917 0 0 1-.693-.23.88.88 0 0 1-.293-.658l-.517-7.544v-.124a.793.793 0 0 1 .264-.555ZM11.8 13.294l6.63-.41h.071c.286.005.558.121.757.323.199.202.308.473.303.753-.263 3.822-3.065 7.015-6.878 7.838-3.814.823-7.723-.923-9.595-4.284a8.215 8.215 0 0 1-1.024-3.136 5.956 5.956 0 0 1-.063-.987C2.014 9.327 4.907 5.82 8.956 4.96c.49-.092.982.152 1.196.595.105.16.133.354.145.545.07 1.074.142 2.139.214 3.2.062.913.124 1.822.184 2.732-.003.214.03.427.1.63.162.4.566.654 1.005.632Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default GraphBold