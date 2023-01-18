import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CallSilentBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.375 3.87v-.01a.894.894 0 0 0 0-1.23.855.855 0 0 0-.605-.266.816.816 0 0 0-.595.265L2.215 21.057c-.03.03-.05.06-.069.091l-.03.04a.898.898 0 0 0 .13 1.058.898.898 0 0 0 .604.254.856.856 0 0 0 .594-.254l5.362-5.498c7.4 7.24 9.884 4.585 10.46 3.97.037-.04.067-.072.09-.091 2.666-2.722 1.932-3.435.092-5.223-.257-.25-.535-.52-.829-.82-1.106-1.123-1.895-.84-2.772-.524-.966.348-2.038.734-3.757-.678l-.527.54.396-.407 9.416-9.646ZM6.185 14.204C.192 7.415 2.575 5.06 3.16 4.485c.043-.043.076-.075.095-.1C5.941 1.66 6.64 2.407 8.391 4.278c.249.266.519.554.819.859 1.105 1.127.829 1.933.521 2.83-.257.751-.536 1.566-.044 2.686l-3.502 3.552Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default CallSilentBold
