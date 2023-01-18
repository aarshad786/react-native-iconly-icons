import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GraphBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.989 9.937c-.687-4.193-4.272-7.312-8.547-7.437-.428-.01-.84.158-1.14.462a1.466 1.466 0 0 0-.412 1.115l.439 6.54a1.6 1.6 0 0 0 1.595 1.463h.105l6.575-.436c.395-.022.764-.2 1.026-.495.261-.294.394-.68.367-1.072v-.14h-.008Zm-8.065.575-.438-6.427c3.44.139 6.32 2.634 6.925 6l-6.487.427Zm2.875 4.476a.807.807 0 0 1 .982-.548c.207.049.386.18.495.362.11.182.14.4.084.604a8.266 8.266 0 0 1-4.024 5.06 8.35 8.35 0 0 1-7.825.119 8.248 8.248 0 0 1-4.447-6.398 5.121 5.121 0 0 1-.061-.966C1.998 9.299 4.766 5.914 8.63 5.113a.8.8 0 1 1 .316 1.568c-3.12.659-5.347 3.398-5.34 6.566-.007.247.008.495.045.74.384 3.162 2.963 5.615 6.16 5.859 3.198.243 6.123-1.79 6.988-4.858Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default GraphBroken
