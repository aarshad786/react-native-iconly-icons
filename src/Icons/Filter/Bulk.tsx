import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const FilterBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M10.083 15.958H3.508c-.832 0-1.508.664-1.508 1.481 0 .817.676 1.482 1.508 1.482h6.575c.832 0 1.508-.665 1.508-1.482s-.675-1.481-1.508-1.481M22 6.379c0-.817-.675-1.48-1.507-1.48h-6.575c-.832 0-1.508.663-1.508 1.48s.676 1.481 1.508 1.481h6.575c.832 0 1.507-.664 1.507-1.481"
      fill={props.fillColor}
    />
    <Path
      d="M8.878 6.379c0 1.866-1.54 3.38-3.44 3.38C3.54 9.758 2 8.244 2 6.378 2 4.513 3.54 3 5.439 3c1.9 0 3.439 1.513 3.439 3.379M22 17.4c0 1.865-1.539 3.378-3.439 3.378-1.899 0-3.439-1.513-3.439-3.379 0-1.867 1.54-3.38 3.44-3.38S22 15.534 22 17.4"
      fill={props.fillColor}
    />
  </Svg>
)
export default FilterBulk
