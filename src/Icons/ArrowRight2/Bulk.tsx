import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowRight2Bulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path d="m7.214 13.133 6.848-4.22a.435.435 0 0 1 .494.027c.65.5 1.232 1.009 1.62 1.436 0 0 .334.342.478.559.234.296.346.683.346 1.059 0 .422-.123.82-.368 1.14-.056.057-.268.308-.468.513-1.169 1.276-4.219 3.384-5.823 4.023-.233.103-.856.318-1.18.33-.311 0-.612-.068-.901-.217a1.866 1.866 0 0 1-.79-.9c-.101-.262-.257-1.048-.257-1.071-.1-.561-.175-1.35-.213-2.27a.463.463 0 0 1 .214-.41Z" />
      <Path
        opacity={0.4}
        d="M7.672 10.86c-.302.187-.682-.052-.667-.41.036-.843.099-1.585.175-2.137.012-.012.167-.99.346-1.322A1.778 1.778 0 0 1 9.106 6h.055c.424.011 1.326.387 1.326.41.454.19 1.047.51 1.685.894a.459.459 0 0 1 .007.778L7.672 10.86Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowRight2Bulk
