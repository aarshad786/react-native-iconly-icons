import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const HomeBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.152 7.591a3.052 3.052 0 0 1 1.14 2.348l-.01 7.974a3.922 3.922 0 0 1-3.921 3.922h-1.74c-1.048 0-1.899-.848-1.904-1.896v-3.6a.504.504 0 0 0-.504-.504h-2.609a.504.504 0 0 0-.504.513v1.374a.783.783 0 0 1-1.565 0v-1.374a2.078 2.078 0 0 1 2.078-2.078h2.609a2.078 2.078 0 0 1 2.07 2.078v3.591c0 .183.147.33.33.33h1.782a2.348 2.348 0 0 0 2.348-2.347V9.956a1.47 1.47 0 0 0-.556-1.13l-6.009-4.791a2.052 2.052 0 0 0-2.609 0l-1.93 1.443a.798.798 0 0 1-.93-1.295L9.621 2.8a3.609 3.609 0 0 1 4.521 0l6.01 4.791Zm-13.73 12.67h4v.017a.783.783 0 1 1 0 1.565h-4A3.93 3.93 0 0 1 2.5 17.922V9.956A3.026 3.026 0 0 1 3.674 7.61l.722-.54A.783.783 0 0 1 5.3 8.313l-.704.522a1.47 1.47 0 0 0-.53 1.121v7.957a2.365 2.365 0 0 0 2.356 2.348Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default HomeBroken
