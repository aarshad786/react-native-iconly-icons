import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const WorkBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M2 11.079c.05 2.338.19 6.337.21 6.778.071.943.432 1.896.994 2.568.782.943 1.745 1.364 3.088 1.364 1.856.01 3.902.01 5.89.01 1.994 0 3.93 0 5.565-.01 1.324 0 2.317-.432 3.09-1.364.561-.672.922-1.635.973-2.568.02-.371.12-4.712.18-6.778H2Z"
      fill={props.fillColor}
    />
    <Path
      d="M11.245 15.384v1.294a.75.75 0 0 0 1.5 0v-1.294a.75.75 0 0 0-1.5 0"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.211 14.556a.75.75 0 0 1-.827.546c-2.55-.357-4.989-1.261-7.047-2.62A.747.747 0 0 1 2 11.854V8.39c0-2.1 1.712-3.808 3.817-3.808h1.967a2.953 2.953 0 0 1 2.92-2.58h2.582a2.953 2.953 0 0 1 2.92 2.58h1.977A3.812 3.812 0 0 1 21.99 8.39v3.466a.753.753 0 0 1-.336.627c-2.062 1.365-4.51 2.274-7.078 2.629a.75.75 0 0 1-.83-.558 1.805 1.805 0 0 0-1.756-1.354c-.842 0-1.557.546-1.779 1.357ZM13.286 3.5h-2.582c-.673 0-1.235.46-1.403 1.081h5.387a1.456 1.456 0 0 0-1.402-1.08Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default WorkBulk
