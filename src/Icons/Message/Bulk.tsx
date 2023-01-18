import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MessageBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M22 15.94c0 2.79-2.24 5.05-5.03 5.06H7.05C4.27 21 2 18.75 2 15.96v-.01s.006-4.426.014-6.652a.498.498 0 0 1 .808-.392c2.376 1.885 6.625 5.322 6.678 5.367.71.569 1.61.89 2.53.89.92 0 1.82-.321 2.53-.901.053-.035 4.207-3.369 6.619-5.285a.5.5 0 0 1 .811.39c.01 2.209.01 6.573.01 6.573"
      fill={props.fillColor}
    />
    <Path
      d="M21.476 5.674A5.035 5.035 0 0 0 17.03 3H7.05a5.035 5.035 0 0 0-4.446 2.674.864.864 0 0 0 .221 1.078l7.425 5.939c.52.42 1.15.628 1.78.628h.02c.63 0 1.26-.209 1.78-.629l7.425-5.938a.864.864 0 0 0 .221-1.078"
      fill={props.fillColor}
    />
  </Svg>
)
export default MessageBulk
