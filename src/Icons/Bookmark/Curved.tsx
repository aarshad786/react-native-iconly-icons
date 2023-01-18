import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const BookmarkCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M8.542 9.218h6.856" />
      <Path
        clipRule="evenodd"
        d="M11.97 2.5c-6.387 0-7.466.932-7.466 8.429 0 8.393-.157 10.571 1.44 10.571 1.594 0 4.2-3.684 6.026-3.684 1.827 0 4.432 3.684 6.027 3.684 1.596 0 1.44-2.178 1.44-10.571 0-7.497-1.08-8.429-7.467-8.429Z"
      />
    </G>
  </Svg>
)
export default BookmarkCurved
