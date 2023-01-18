import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowRightCircleBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0 5.52-4.49 10-10 10l-.28-.004C6.33 21.848 2 17.426 2 12 2 6.49 6.48 2 12 2c5.51 0 10 4.49 10 10ZM10.02 8c-.29.3-.29.77.01 1.06L12.98 12l-2.95 2.94c-.3.29-.3.77-.01 1.06.3.3.77.3 1.06 0l3.49-3.47a.75.75 0 0 0 0-1.06L11.08 8a.704.704 0 0 0-.52-.22c-.2 0-.39.07-.54.22Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ArrowRightCircleBold
