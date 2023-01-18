import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowLeft2Bold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M7.37 10.869c.056-.058.27-.306.468-.51 1.165-1.283 4.204-3.383 5.795-4.024.242-.103.853-.321 1.179-.335.313 0 .61.072.895.218.355.204.64.525.795.904.1.263.256 1.05.256 1.064.156.861.242 2.26.242 3.806 0 1.473-.086 2.815-.213 3.689-.015.014-.17.992-.341 1.327a1.785 1.785 0 0 1-1.578.992h-.056c-.426-.015-1.321-.395-1.321-.409-1.505-.642-4.474-2.639-5.668-3.966 0 0-.336-.341-.482-.554A1.783 1.783 0 0 1 7 12.007c0-.423.128-.817.37-1.138"
      fill={props.fillColor}
    />
  </Svg>
)
export default ArrowLeft2Bold
