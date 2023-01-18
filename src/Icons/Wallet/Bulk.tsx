import React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
const WalletBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.996 8.375h-4.234c-1.97.004-3.567 1.56-3.57 3.482-.004 1.925 1.595 3.489 3.57 3.491H22v.306C22 19.014 19.964 21 16.517 21H7.484C4.036 21 2 19.014 2 15.654V8.338C2 4.978 4.036 3 7.484 3h9.03c3.446 0 5.482 1.979 5.482 5.338v.037ZM6.74 8.367H12.39a.756.756 0 0 0 .762-.75.757.757 0 0 0-.769-.742H6.74a.756.756 0 0 0-.762.744.756.756 0 0 0 .762.748Z"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M16.037 12.297c.21.95 1.044 1.62 1.996 1.603h3.25a.726.726 0 0 0 .717-.734v-2.532a.728.728 0 0 0-.718-.734h-3.326c-1.083.003-1.958.902-1.956 2.01 0 .13.013.26.037.387"
      fill={props.fillColor}
    />
    <Circle cx={18} cy={11.9} r={1} fill={props.fillColor} />
  </Svg>
)
export default WalletBulk
