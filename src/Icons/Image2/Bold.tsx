import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Image2Bold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.638 3.395c-2.577 0-4.242 1.767-4.242 4.493v8.214c0 .765.142 1.448.385 2.04l.537-.656 1.44-1.752c.692-.79 1.99-1.968 3.696-1.255.373.155.705.368 1.01.563l.09.056c.572.383.91.563 1.26.533.145-.02.28-.063.41-.143.486-.3 1.748-2.087 2.126-2.622l.104-.147c1.09-1.42 2.77-1.8 4.17-.96.188.112 1.535 1.053 1.98 1.431V7.888c0-2.726-1.665-4.493-4.25-4.493H7.638ZM16.354 2C19.73 2 22 4.362 22 7.888v8.214c0 .09-.01.172-.02.255-.006.059-.012.117-.015.177a3.641 3.641 0 0 0-.005.11 2.726 2.726 0 0 1-.007.145.554.554 0 0 1-.009.056c-.004.018-.008.036-.01.055a6.805 6.805 0 0 1-.155.905c-.016.073-.036.143-.055.214l-.005.015c-.08.282-.174.551-.287.808a4.55 4.55 0 0 1-.061.128l-.041.084c-.122.245-.254.48-.407.698a2.35 2.35 0 0 1-.09.117l-.058.075a5.073 5.073 0 0 1-.513.582 1.854 1.854 0 0 1-.12.101l-.075.062a5.05 5.05 0 0 1-.607.461c-.047.03-.097.055-.147.08-.033.016-.065.032-.096.05a5.316 5.316 0 0 1-.688.332c-.058.023-.12.039-.183.055-.044.011-.088.023-.131.036l-.065.02c-.217.068-.434.135-.667.175-.136.024-.28.033-.423.042a9.364 9.364 0 0 0-.186.013c-.067.005-.132.013-.197.021a2.613 2.613 0 0 1-.323.026H7.638c-.376 0-.735-.038-1.082-.095l-.037-.006c-1.353-.233-2.476-.886-3.263-1.87-.006 0-.008-.004-.011-.01a.048.048 0 0 0-.007-.01C2.447 19.013 2 17.674 2 16.102V7.888C2 4.362 4.27 2 7.638 2h8.716ZM11 8.515C11 9.87 9.866 11 8.505 11a2.52 2.52 0 0 1-2.446-2.006A2.409 2.409 0 0 1 6 8.469a2.475 2.475 0 0 1 4.26-1.707c.455.451.74 1.074.74 1.753Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default Image2Bold
