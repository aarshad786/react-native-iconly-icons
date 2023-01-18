import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CalendarBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 16.87V9.257h18v7.674c0 3.14-1.976 5.07-5.137 5.07H8.127C4.996 22 3 20.03 3 16.87Zm4.96-2.46a.822.822 0 0 1-.85-.799c0-.46.355-.84.81-.86.444 0 .81.35.82.8a.822.822 0 0 1-.78.86Zm4.06 0a.822.822 0 0 1-.85-.799c0-.46.356-.84.81-.86.445 0 .81.35.82.8a.822.822 0 0 1-.78.86Zm4.03 3.68a.847.847 0 0 1-.82-.85.831.831 0 0 1 .81-.849h.01c.465 0 .84.38.84.85s-.375.85-.84.85Zm-4.88-.85c.02.46.395.821.85.8a.821.821 0 0 0 .78-.859.817.817 0 0 0-.82-.8.855.855 0 0 0-.81.86Zm-4.07 0c.02.46.395.821.85.8a.821.821 0 0 0 .78-.859.817.817 0 0 0-.82-.8.855.855 0 0 0-.81.86Zm8.14-3.639c0-.46.356-.83.81-.84.445 0 .8.36.82.8a.82.82 0 0 1-.79.85.814.814 0 0 1-.84-.8v-.01Z"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M3.003 9.257c.013-.587.063-1.752.156-2.127.474-2.109 2.084-3.449 4.386-3.64h8.911c2.282.201 3.912 1.55 4.386 3.64.092.365.142 1.539.155 2.127H3.003Z"
      fill={props.fillColor}
    />
    <Path
      d="M8.305 6.59c.435 0 .76-.329.76-.77V2.771A.748.748 0 0 0 8.306 2c-.435 0-.76.33-.76.771V5.82c0 .441.325.77.76.77M15.695 6.59c.425 0 .76-.329.76-.77V2.771a.754.754 0 0 0-.76-.771c-.435 0-.76.33-.76.771V5.82c0 .441.325.77.76.77"
      fill={props.fillColor}
    />
  </Svg>
)
export default CalendarBulk