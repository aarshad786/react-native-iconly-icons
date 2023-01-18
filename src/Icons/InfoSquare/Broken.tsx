import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const InfoSquareBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.747 2H8.254C4.41 2 2 4.393 2 8.253v2.322a.763.763 0 0 0 .763.765h.012a.756.756 0 0 0 .755-.756V8.253c0-3.043 1.68-4.723 4.723-4.723h7.494c3.053 0 4.723 1.68 4.723 4.723v7.5c0 3.043-1.68 4.714-4.723 4.714H8.254c-3.052 0-4.723-1.68-4.723-4.714a.766.766 0 0 0-1.53 0C2.001 19.608 4.392 22 8.244 22h7.503C19.608 22 22 19.608 22 15.756v-7.5C22 4.393 19.608 2 15.747 2Zm-3.752 14.546a.75.75 0 0 1-.75-.75v-4.42a.75.75 0 0 1 1.5 0v4.42a.75.75 0 0 1-.75.75Zm0-7.592h.01a.75.75 0 0 0 0-1.5.755.755 0 0 0-.755.75c0 .414.331.75.745.75Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default InfoSquareBroken
