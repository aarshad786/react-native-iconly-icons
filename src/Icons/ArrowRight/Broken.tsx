import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowRightBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.002 4.744a.84.84 0 0 0 .003 1.175l3.64 3.679.084.074a.807.807 0 0 0 1.072-.077.835.835 0 0 0-.002-1.174l-3.64-3.68-.083-.073a.81.81 0 0 0-1.074.076Zm-9.286 6.432A.827.827 0 0 0 3 12c0 .458.367.83.818.83h14.383l-5.196 5.251-.074.085a.84.84 0 0 0 .072 1.09.81.81 0 0 0 1.156.002l6.6-6.67.073-.084a.836.836 0 0 0 .106-.82.817.817 0 0 0-.756-.514H3.818l-.102.006Z"
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
export default ArrowRightBroken
