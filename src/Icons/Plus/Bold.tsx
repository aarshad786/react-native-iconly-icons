import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlusBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33 2h9.33C20.06 2 22 3.92 22 7.33v9.34c0 3.39-1.93 5.33-5.33 5.33H7.33C3.92 22 2 20.06 2 16.67V7.33C2 3.92 3.92 2 7.33 2Zm5.49 10.83h2.84c.46-.01.83-.38.83-.84 0-.46-.37-.83-.83-.83h-2.84V8.34c0-.46-.37-.83-.83-.83-.46 0-.83.37-.83.83v2.82H8.33c-.22 0-.43.09-.59.24a.866.866 0 0 0-.24.59c0 .46.37.83.83.84h2.83v2.83c0 .46.37.83.83.83.46 0 .83-.37.83-.83v-2.83Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default PlusBold
