import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const DeleteCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M18.89 9.554c0 8.02 1.154 11.644-6.61 11.644-7.765 0-6.587-3.625-6.587-11.644M20.365 6.48H4.215M15.715 6.48s.528-3.766-3.426-3.766c-3.953 0-3.425 3.766-3.425 3.766" />
    </G>
  </Svg>
)
export default DeleteCurved
