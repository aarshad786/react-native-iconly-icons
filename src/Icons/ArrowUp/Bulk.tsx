import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowUpBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path
        opacity={0.4}
        d="m13.19 15.797.328 3.7c0 .83-.68 1.503-1.518 1.503a1.51 1.51 0 0 1-1.518-1.503l.327-3.7c0-.65.533-1.179 1.19-1.179.66 0 1.191.528 1.191 1.18Z"
      />
      <Path d="M13.13 3.375c.058.058.305.274.51.477 1.283 1.184 3.382 4.274 4.024 5.89.102.246.32.867.336 1.2a2 2 0 0 1-.22.91c-.203.36-.525.649-.904.808-.262.101-1.05.26-1.064.26-.86.159-2.259.245-3.805.245-1.472 0-2.814-.086-3.688-.216-.016-.014-.993-.173-1.328-.347A1.814 1.814 0 0 1 6 11v-.058c.014-.433.394-1.343.408-1.343.642-1.53 2.639-4.548 3.966-5.761 0 0 .342-.343.554-.491A1.768 1.768 0 0 1 11.992 3c.423 0 .816.13 1.138.375Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowUpBulk
