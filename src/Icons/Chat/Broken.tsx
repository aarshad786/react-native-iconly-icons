import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChatBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.007 2c1.617 0 3.23.4 4.661 1.154 4.875 2.572 6.75 8.632 4.18 13.508A10.027 10.027 0 0 1 11.995 22a9.925 9.925 0 0 1-2.148-.235.75.75 0 0 1 .325-1.463c3.725.829 7.57-.959 9.351-4.338 2.186-4.146.592-9.299-3.553-11.485a8.524 8.524 0 0 0-3.964-.981h-.01c-4.686 0-8.499 3.813-8.499 8.5a8.496 8.496 0 0 0 .963 3.933l.192.376c.235.44.287.987.134 1.482-.21.555-.385 1.095-.53 1.633.562-.17 1.248-.419 1.744-.6l.203-.073a.748.748 0 0 1 .509 1.408l-.2.073-.035.013c-.738.267-1.732.627-2.407.778a.773.773 0 0 1-.177.019c-.46 0-.74-.186-.894-.343-.237-.24-.35-.578-.337-1.002a.765.765 0 0 1 .02-.148c.178-.757.41-1.513.69-2.245a.47.47 0 0 0-.05-.31l-.193-.374A10.006 10.006 0 0 1 2 11.998C2 6.485 6.484 2 11.995 2h.012ZM6.403 12a1.19 1.19 0 1 1 2.38 0 1.19 1.19 0 0 1-2.38 0Zm6.782-.001a1.19 1.19 0 0 0-1.19-1.19 1.19 1.19 0 0 0 0 2.379 1.19 1.19 0 0 0 1.19-1.19Zm3.214-1.19a1.19 1.19 0 0 1 0 2.379 1.19 1.19 0 0 1 0-2.379Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ChatBroken
