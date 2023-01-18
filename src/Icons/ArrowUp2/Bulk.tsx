import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowUp2Bulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path d="m13.133 16.786-4.22-6.848a.435.435 0 0 1 .027-.494c.5-.65 1.009-1.232 1.436-1.62 0 0 .342-.334.559-.478A1.723 1.723 0 0 1 11.994 7c.422 0 .82.123 1.14.368.057.056.308.268.513.468 1.276 1.169 3.384 4.219 4.023 5.823.103.233.318.856.33 1.18 0 .311-.068.612-.217.901a1.866 1.866 0 0 1-.9.79c-.262.101-1.048.257-1.071.257-.561.1-1.35.175-2.27.213a.463.463 0 0 1-.41-.214Z" />
      <Path
        opacity={0.4}
        d="M10.86 16.328c.187.302-.052.682-.41.667a23.871 23.871 0 0 1-2.137-.175c-.012-.012-.99-.167-1.322-.346A1.778 1.778 0 0 1 6 14.894v-.055c.011-.424.387-1.326.41-1.326.19-.454.51-1.047.894-1.685a.459.459 0 0 1 .778-.007l2.778 4.507Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowUp2Bulk
