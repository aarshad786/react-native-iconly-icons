import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TimeCircleBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.485 6.486 2 12 2s10 4.485 10 10c0 5.514-4.486 10-10 10a9.94 9.94 0 0 1-7.927-3.902.727.727 0 0 1 1.152-.888A8.493 8.493 0 0 0 12 20.546c4.712 0 8.546-3.833 8.546-8.546 0-4.712-3.834-8.546-8.546-8.546S3.455 7.288 3.455 12c0 .438.032.873.097 1.299a.728.728 0 0 1-1.437.22A10.1 10.1 0 0 1 2 11.999Zm8.934-4.163a.728.728 0 1 1 1.454 0v4.446l3.424 2.042a.727.727 0 0 1-.744 1.25l-3.78-2.255a.73.73 0 0 1-.354-.625V7.837Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default TimeCircleBroken
