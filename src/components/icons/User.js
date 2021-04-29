import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgUser(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="user_svg__feather user_svg__feather-user"
      {...props}
    >
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  );
}

export default SvgUser;