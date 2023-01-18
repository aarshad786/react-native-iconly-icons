import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const WalletBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.769 8.382H22C22 4.985 19.964 3 16.516 3H7.484C4.036 3 2 4.985 2 8.338v7.324C2 19.015 4.036 21 7.484 21h9.032C19.964 21 22 19.015 22 15.662v-.313h-4.231c-1.964 0-3.556-1.552-3.556-3.466 0-1.915 1.592-3.467 3.556-3.467v-.034Zm0 1.49h3.484c.413 0 .747.326.747.728v2.531a.746.746 0 0 1-.747.728H17.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 0 1 .433-1.652 2.091 2.091 0 0 1 1.576-.74Zm.151 2.661h.329a.755.755 0 0 0 .764-.745.755.755 0 0 0-.764-.746h-.329a.766.766 0 0 0-.54.213.727.727 0 0 0-.224.524c0 .413.34.75.764.754ZM6.738 8.382h5.644a.755.755 0 0 0 .765-.746.755.755 0 0 0-.765-.745H6.738a.755.755 0 0 0-.765.737c0 .413.341.75.765.754Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default WalletBold
