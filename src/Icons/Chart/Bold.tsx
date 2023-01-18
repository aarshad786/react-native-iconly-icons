import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChartBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33 2h9.34c3.4 0 5.32 1.93 5.33 5.33v9.34c0 3.4-1.93 5.33-5.33 5.33H7.33C3.93 22 2 20.07 2 16.67V7.33C2 3.93 3.93 2 7.33 2Zm4.72 15.86c.43 0 .79-.32.83-.75V6.92a.815.815 0 0 0-.38-.79.84.84 0 0 0-1.28.79v10.19c.05.43.41.75.83.75Zm4.6 0c.42 0 .78-.32.83-.75v-3.28a.839.839 0 0 0-1.28-.79.806.806 0 0 0-.38.79v3.28c.04.43.4.75.83.75Zm-8.43-.75a.827.827 0 0 1-.83.75c-.43 0-.79-.32-.83-.75V10.2a.84.84 0 0 1 .39-.79c.27-.17.61-.17.88 0s.42.48.39.79v6.91Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ChartBold
