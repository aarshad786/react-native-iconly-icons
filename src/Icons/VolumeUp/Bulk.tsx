import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const VolumeUpBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M13.357 6.45c-.05-.486-.103-.99-.232-1.494C12.775 3.752 11.801 3 10.758 3c-.582-.002-1.318.356-1.736.72l-3.46 2.897h-1.81c-1.333 0-2.404 1.027-2.607 2.51-.172 1.424-.214 4.11 0 5.677.186 1.567 1.21 2.579 2.607 2.579h1.81l3.527 2.94c.362.315 1 .676 1.588.676l.105.001c1.063 0 2-.78 2.35-1.98.134-.512.18-.99.225-1.453l.047-.459c.18-1.487.18-8.739 0-10.215l-.047-.442Z"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M17.407 6.495a.907.907 0 0 0-1.279-.237.957.957 0 0 0-.228 1.308c.802 1.182 1.243 2.756 1.243 4.434 0 1.677-.441 3.252-1.243 4.434a.956.956 0 0 0 .23 1.308.905.905 0 0 0 1.277-.236c1.013-1.493 1.572-3.448 1.572-5.506 0-2.058-.56-4.013-1.572-5.505"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M20.567 3.457a.905.905 0 0 0-1.277-.236.958.958 0 0 0-.23 1.308c1.357 1.999 2.105 4.653 2.105 7.47 0 2.82-.748 5.474-2.105 7.473a.957.957 0 0 0 .231 1.308.902.902 0 0 0 1.276-.236C22.136 18.234 23 15.2 23 12c0-3.198-.864-6.233-2.433-8.543"
      fill={props.fillColor}
    />
  </Svg>
)
export default VolumeUpBulk