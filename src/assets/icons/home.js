import * as React from "react";
import Svg, { Path } from "react-native-svg"

function Homeicon(props) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path d="M22.45 8.68l-7.69-6.99a3.766 3.766 0 00-5.09 0L1.98 8.68a3.89 3.89 0 00-1.27 2.87v8.29c0 2.13 1.7 3.86 3.81 3.86H19.9c2.1 0 3.81-1.73 3.81-3.86v-8.29c.01-1.1-.46-2.14-1.26-2.87zm-1.81 9.66c0 1.62-1.25 2.53-2.79 2.53H6.58c-1.53 0-2.79-.92-2.79-2.53v-6.31c0-.83.34-1.64.93-2.19l5.64-5.32c1.06-1 2.67-1 3.73 0l5.63 5.32c.6.56.93 1.36.93 2.19v6.31z" />
    </Svg>
  )
}

export default Homeicon;