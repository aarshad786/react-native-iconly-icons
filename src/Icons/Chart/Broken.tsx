import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChartBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 10.575a.765.765 0 0 1-.765.765h-.009a.756.756 0 0 1-.756-.774V8.253c0-3.043-1.68-4.723-4.723-4.723H8.253c-3.052 0-4.723 1.68-4.723 4.723v7.502c0 3.044 1.68 4.715 4.723 4.715h7.494c3.052 0 4.723-1.68 4.723-4.714a.765.765 0 1 1 1.53 0C22 19.607 19.608 22 15.755 22H8.253C4.393 22 2 19.608 2 15.755V8.253C2 4.393 4.392 2 8.253 2h7.494C19.59 2 22 4.392 22 8.253v2.322ZM6.96 16.688V10.285a.756.756 0 0 1 .792-.73.765.765 0 0 1 .739.792v6.394a.766.766 0 0 1-1.53-.053Zm4.31-9.367v9.376a.765.765 0 0 0 1.53 0V7.32a.765.765 0 0 0-1.53 0Zm4.24 9.367v-2.99a.765.765 0 0 1 1.53 0v2.99a.765.765 0 0 1-1.53 0Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ChartBroken
