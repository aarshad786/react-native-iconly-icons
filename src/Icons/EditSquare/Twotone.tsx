import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EditSquareTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M11.492 2.79H7.753c-3.075 0-5.003 2.176-5.003 5.258v8.314c0 3.082 1.92 5.26 5.003 5.26h8.824c3.085 0 5.004-2.178 5.004-5.26v-4.028"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M8.828 10.921 16.3 3.448c.93-.93 2.44-.93 3.37 0l1.218 1.217a2.383 2.383 0 0 1 0 3.371l-7.51 7.509a2.17 2.17 0 0 1-1.534.636H8.099l.094-3.78a2.17 2.17 0 0 1 .635-1.48Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m15.165 4.603 4.566 4.566"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default EditSquareTwotone
