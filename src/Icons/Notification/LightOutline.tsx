import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const NotificationLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={3} y={1} width={19} height={18}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 1h18.497v17.348H3V1Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.247 2.5c-3.495 0-5.931 2.738-5.931 5.195 0 2.079-.577 3.04-1.087 3.888-.409.681-.732 1.219-.732 2.388.167 1.886 1.412 2.877 7.75 2.877 6.303 0 7.587-1.035 7.753-2.942-.003-1.104-.326-1.642-.735-2.323-.51-.848-1.087-1.809-1.087-3.888 0-2.457-2.436-5.195-5.931-5.195m0 15.848c-4.676 0-8.902-.33-9.247-4.313-.003-1.648.5-2.486.944-3.224.449-.748.872-1.453.872-3.116C4.816 4.462 7.802 1 12.247 1s7.431 3.462 7.431 6.695c0 1.663.423 2.368.872 3.116.444.738.947 1.576.947 3.16-.349 4.047-4.574 4.377-9.25 4.377"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.198 22.5h-.002c-1.12-.001-2.182-.495-2.987-1.392a.749.749 0 1 1 1.115-1.002c.518.577 1.183.894 1.873.894h.001c.693 0 1.361-.317 1.88-.895a.75.75 0 0 1 1.115 1.004c-.808.897-1.87 1.391-2.995 1.391"
      fill={props.fillColor}
    />
  </Svg>
)
export default NotificationLightOutline
