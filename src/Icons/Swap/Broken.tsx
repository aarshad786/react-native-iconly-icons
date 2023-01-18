import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SwapBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.533 17.452c0 .46.369.834.824.834a.83.83 0 0 0 .824-.834v-11.6l2.624 2.665a.816.816 0 0 0 1.165.002.84.84 0 0 0 .002-1.179L7.94 3.245a.817.817 0 0 0-.898-.182.833.833 0 0 0-.51.77v13.62Zm-3.209-8.69a.816.816 0 0 1-.581-.243.838.838 0 0 1-.002-1.178l1.604-1.63a.818.818 0 0 1 1.165-.003.842.842 0 0 1 .003 1.18L3.908 8.517a.812.812 0 0 1-.584.245ZM16.86 20.937a.814.814 0 0 0 .898-.183l3.45-3.506a.841.841 0 0 0-.002-1.179.819.819 0 0 0-1.165.002l-2.043 2.077V6.546a.828.828 0 0 0-.824-.833.83.83 0 0 0-.824.833v13.62c0 .338.201.642.51.77Zm-2.698-2.65a.816.816 0 0 0 1.165.003.84.84 0 0 0 .004-1.178l-1.604-1.63a.818.818 0 0 0-1.166-.003.84.84 0 0 0-.003 1.18l1.604 1.629Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default SwapBroken
