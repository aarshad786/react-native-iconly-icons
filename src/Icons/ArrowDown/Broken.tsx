import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowDownBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.67 3.818c0-.451.372-.818.83-.818.459 0 .83.367.83.818v16.364c0 .332-.202.63-.513.756a.838.838 0 0 1-.905-.18l-6.67-6.6a.81.81 0 0 1 .002-1.155.84.84 0 0 1 1.175.002l5.25 5.196V3.818Zm6.911 9.187a.84.84 0 0 1 1.175-.003.811.811 0 0 1 .002 1.158L15.08 17.8a.835.835 0 0 1-1.175.002.808.808 0 0 1-.002-1.157l3.68-3.64Z"
        fill={props.fillColor}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowDownBroken
