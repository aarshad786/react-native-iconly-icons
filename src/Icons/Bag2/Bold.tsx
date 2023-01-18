import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Bag2Bold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.418 6.47h.205c2.692 0 4.877 2.25 4.877 5.01V17c0 2.76-2.185 5-4.877 5H7.377C4.685 22 2.5 19.76 2.5 17v-5.52c0-2.76 2.185-5.01 4.877-5.01h.205c.02-1.2.478-2.32 1.307-3.16.838-.85 1.911-1.28 3.12-1.31 2.42 0 4.38 2 4.41 4.47ZM9.913 4.38c-.546.56-.849 1.3-.868 2.09h5.91C14.926 4.83 13.62 3.5 12.01 3.5c-.751 0-1.532.31-2.097.88Zm5.793 5.94a.74.74 0 0 0 .732-.75V8.41a.74.74 0 0 0-.732-.75c-.4 0-.731.34-.731.75v1.16c0 .41.332.75.731.75Zm-6.769-.75a.74.74 0 0 1-.731.75c-.4 0-.732-.34-.732-.75V8.41c0-.41.332-.75.732-.75.41 0 .731.34.731.75v1.16Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default Bag2Bold
