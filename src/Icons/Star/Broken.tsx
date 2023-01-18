import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const StarBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M17.498 21.92a.67.67 0 0 1-.352-.09l-5.138-2.707-4.524 2.436c-.738.4-1.662.126-2.062-.613l-.015-.028a1.64 1.64 0 0 1-.158-1l.88-5.194L2.451 11a1.6 1.6 0 0 1 0-2.227c.234-.246.544-.405.88-.45l5.043-.767 2.243-4.673a1.515 1.515 0 0 1 2.754 0l2.253 4.69 5.06.774c.409.061.776.287 1.016.624.448.644.38 1.514-.162 2.081l-3.661 3.68.51 2.8a.782.782 0 0 1-.625.9.758.758 0 0 1-.88-.614l-.519-2.799a1.623 1.623 0 0 1 .44-1.408l3.67-3.706-5.06-.785a1.52 1.52 0 0 1-1.153-.9l-2.252-4.669-2.28 4.743c-.205.478-.64.817-1.153.9l-5.043.766 3.643 3.7c.363.365.526.882.44 1.39l-.88 5.193 4.523-2.426a1.472 1.472 0 0 1 1.443 0l5.131 2.706a.788.788 0 0 1 .387.88.77.77 0 0 1-.739.6l.018-.084Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default StarBroken