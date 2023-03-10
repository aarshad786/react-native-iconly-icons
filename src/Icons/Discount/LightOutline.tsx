import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const DiscountLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={2} width={21} height={21}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2h20.003v20.001H2v-20Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.945 20.076c.59.575 1.54.569 2.126-.02l.722-.72a3.026 3.026 0 0 1 2.123-.878h1.03c.834 0 1.512-.678 1.512-1.511v-1.03c0-.8.31-1.553.876-2.12l.72-.722a1.51 1.51 0 0 0 .002-2.146l-.721-.723a2.991 2.991 0 0 1-.877-2.123V7.056c0-.834-.678-1.512-1.512-1.512h-1.028a2.991 2.991 0 0 1-2.121-.874l-.722-.723a1.518 1.518 0 0 0-2.147-.001l-.719.72a3.004 3.004 0 0 1-2.125.878H7.055a1.514 1.514 0 0 0-1.511 1.512V8.08c0 .8-.311 1.554-.875 2.122l-.71.71-.021.021a1.513 1.513 0 0 0 .007 2.138l.722.722c.566.567.877 1.32.877 2.121v1.032c0 .832.677 1.51 1.511 1.51h1.027a2.99 2.99 0 0 1 2.122.877l.721.72.02.022ZM11.999 22a3.002 3.002 0 0 1-2.145-.896l-.71-.71a1.505 1.505 0 0 0-1.063-.438H7.055a3.014 3.014 0 0 1-3.011-3.01v-1.031a1.5 1.5 0 0 0-.439-1.064l-.719-.718a3.015 3.015 0 0 1-.035-4.233l.027-.027.728-.73c.281-.283.438-.662.438-1.063V7.056c0-1.66 1.35-3.011 3.01-3.012h1.03a1.51 1.51 0 0 0 1.066-.44l.715-.717a3.014 3.014 0 0 1 4.259-.011l.731.73a1.5 1.5 0 0 0 1.063.438h1.028a3.015 3.015 0 0 1 3.012 3.012v1.027c0 .4.156.78.439 1.065l.718.719c.569.564.885 1.32.888 2.124a2.991 2.991 0 0 1-.875 2.133l-.733.731c-.281.284-.437.66-.437 1.063v1.029a3.015 3.015 0 0 1-3.011 3.01h-1.031c-.396 0-.783.16-1.064.44l-.718.718a3 3 0 0 1-2.135.887Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.43 15.322a.749.749 0 0 1-.53-1.28L14.04 8.9a.75.75 0 1 1 1.061 1.06l-5.14 5.14a.744.744 0 0 1-.53.22M14.504 15.5a1.003 1.003 0 0 1-1.005-1c0-.554.442-1 .995-1h.01a1 1 0 1 1 0 2M9.504 10.5a1.003 1.003 0 0 1-1.005-1c0-.554.443-1 .996-1h.009a1 1 0 1 1 0 2"
      fill={props.fillColor}
    />
  </Svg>
)
export default DiscountLightOutline
