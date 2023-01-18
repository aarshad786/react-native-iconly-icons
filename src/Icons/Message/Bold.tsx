import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MessageBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.94 3A5.057 5.057 0 0 1 22 8.05v7.9c0 2.79-2.27 5.05-5.06 5.05H7.06A5.057 5.057 0 0 1 2 15.95v-7.9A5.05 5.05 0 0 1 7.06 3h9.88Zm1.59 6.54.08-.08a.773.773 0 0 0-.01-1 .84.84 0 0 0-.53-.26.76.76 0 0 0-.56.2L13 12a1.566 1.566 0 0 1-2 0L6.5 8.4a.76.76 0 0 0-1 .07c-.27.27-.3.7-.07 1l.13.13 4.55 3.55a3.143 3.143 0 0 0 3.91 0l4.51-3.61Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default MessageBold