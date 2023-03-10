import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowRight3Broken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M11.762 7.217v4.066H3.734A.726.726 0 0 0 3 12c0 .396.329.717.734.717h8.028v4.066c0 .26.144.502.38.628.233.126.52.117.744-.021l7.77-4.783A.713.713 0 0 0 21 12a.713.713 0 0 0-.344-.607l-4.835-2.976a.744.744 0 0 0-1.012.224.709.709 0 0 0 .231.99L18.887 12l-5.657 3.484V7.217a.726.726 0 0 0-.734-.717.726.726 0 0 0-.734.717"
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
export default ArrowRight3Broken
