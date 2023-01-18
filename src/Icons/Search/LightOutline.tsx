import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const SearchLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={2} width={20} height={20}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2h19.477v19.477H2V2Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.739 3.5c-4.543 0-8.24 3.695-8.24 8.238 0 4.543 3.697 8.239 8.24 8.239 4.542 0 8.238-3.696 8.238-8.239 0-4.543-3.696-8.238-8.238-8.238m0 17.977c-5.37 0-9.74-4.369-9.74-9.739C2 6.368 6.37 2 11.74 2s9.738 4.368 9.738 9.738c0 5.37-4.368 9.739-9.738 9.739"
        fill={props.fillColor}
      />
    </G>
    <Mask id="b" maskUnits="userSpaceOnUse" x={17} y={17} width={6} height={6}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.24 17.707h5.024v5.015H17.24v-5.015Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.514 22.722a.75.75 0 0 1-.53-.22L17.46 18.99a.75.75 0 0 1 1.06-1.063l3.524 3.515a.749.749 0 0 1-.53 1.28"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default SearchLightOutline
