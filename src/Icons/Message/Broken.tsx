import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MessageBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 10.307a.71.71 0 0 1-.708.713l-.009-.018a.705.705 0 0 1-.5-.209.716.716 0 0 1-.207-.504V8.846c-.024-2.426-1.97-4.387-4.379-4.411H7.803c-2.408.024-4.355 1.985-4.379 4.41v6.31c.024 2.426 1.97 4.386 4.379 4.41h8.394c2.409-.024 4.355-1.985 4.379-4.41a.718.718 0 0 1 .712-.642c.365 0 .671.276.712.642-.01 3.224-2.602 5.835-5.803 5.845H7.803C4.6 20.995 2.005 18.38 2 15.155v-6.31C2 5.618 4.598 3 7.803 3h8.394c3.201.01 5.793 2.621 5.803 5.846v1.46Zm-9.261 1.55 4.113-3.314h.009a.713.713 0 0 1 1 .107.717.717 0 0 1-.116 1.006l-4.113 3.324a2.841 2.841 0 0 1-3.582 0L5.926 9.656a.725.725 0 0 1-.106-1.007.697.697 0 0 1 .991-.106l4.157 3.314c.52.41 1.25.41 1.77 0Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default MessageBroken
