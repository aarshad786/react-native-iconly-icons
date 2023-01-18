import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const FolderBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.45 4.88h3.07c3.69 0 5.49 1.97 5.48 6.01v4.87c0 3.86-2.38 6.24-6.25 6.24H8.24C4.39 22 2 19.62 2 15.75V8.24C2 4.1 3.84 2 7.47 2h1.58c.931-.01 1.8.42 2.37 1.15l.88 1.17c.28.35.7.56 1.15.56ZM7.37 15.29h9.26c.41 0 .74-.34.74-.75a.74.74 0 0 0-.74-.75H7.37c-.42 0-.75.33-.75.75 0 .41.33.75.75.75Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default FolderBold
