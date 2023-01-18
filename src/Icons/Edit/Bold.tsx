import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EditBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.376 20.028 8.787-11.363c.477-.612.647-1.32.488-2.042-.138-.656-.541-1.28-1.146-1.752L16.03 3.699c-1.284-1.021-2.876-.914-3.789.258l-.986 1.28a.378.378 0 0 0 .063.526l2.547 2.042c.17.162.297.377.33.635a.945.945 0 0 1-.818 1.042.846.846 0 0 1-.647-.182l-2.621-2.086a.313.313 0 0 0-.425.054L3.455 15.33c-.403.505-.541 1.161-.403 1.795l.796 3.451a.4.4 0 0 0 .392.312l3.502-.043a2.104 2.104 0 0 0 1.634-.817Zm4.904-1.075h5.71c.557 0 1.01.46 1.01 1.024 0 .565-.453 1.023-1.01 1.023h-5.71c-.557 0-1.01-.458-1.01-1.023s.453-1.024 1.01-1.024Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default EditBold
