import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShieldDoneBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.728 21.914a.765.765 0 0 0 .717-.004l3.568-1.907c1.012-.54 1.804-1.143 2.422-1.845a8.245 8.245 0 0 0 2.065-5.495l-.043-6.641a1.809 1.809 0 0 0-1.249-1.695L12.571 2.1a1.889 1.889 0 0 0-1.23.006L4.728 4.413A1.812 1.812 0 0 0 3.5 6.124l.042 6.636a8.248 8.248 0 0 0 2.139 5.473c.624.693 1.423 1.287 2.446 1.817l3.601 1.864Zm-.944-7.805a.759.759 0 0 0 .535.212.76.76 0 0 0 .533-.219l3.899-3.844a.722.722 0 0 0-.006-1.04.77.77 0 0 0-1.068.007l-3.369 3.32-1.38-1.326a.77.77 0 0 0-1.067.007.721.721 0 0 0 .007 1.04l1.916 1.843Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ShieldDoneBold
