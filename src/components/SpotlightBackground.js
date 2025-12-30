import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

const { width, height } = Dimensions.get("window");

export default function SpotlightBackground() {
  // Position the gradient center at top center of screen
  // Using percentages so it works on all screen sizes
  const centerX = "50%";  // Center horizontally
  const centerY = "0%";   // Top of screen
  const radius = "60%";   // Gradient radius - adjusted to match design

  return (
    <Svg
      width={width}
      height={height}
      style={StyleSheet.absoluteFill}
      preserveAspectRatio="none"
    >
      <Defs>
        <RadialGradient
          id="spotlight"
          cx={centerX}
          cy={centerY}
          r={radius}
        >
          {/* Center: VERY BRIGHT indigo/blue - maximum visibility */}
          <Stop offset="0%" stopColor="#4a5a7a" stopOpacity="1" />
          
          {/* Smooth transition 1 */}
          <Stop offset="5%" stopColor="#41506d" stopOpacity="1" />
          
          {/* Quick fade - still bright */}
          <Stop offset="10%" stopColor="#354260" stopOpacity="1" />
          
          {/* Smooth transition 2 */}
          <Stop offset="15%" stopColor="#2e3d55" stopOpacity="1" />
          
          {/* Smooth transition 3 */}
          <Stop offset="20%" stopColor="#29364a" stopOpacity="1" />
          
          {/* Medium blue */}
          <Stop offset="25%" stopColor="#252f45" stopOpacity="1" />
          
          {/* Smooth transition 4 */}
          <Stop offset="32%" stopColor="#1f2738" stopOpacity="1" />
          
          {/* Smooth transition 5 */}
          <Stop offset="38%" stopColor="#1a2130" stopOpacity="1" />
          
          {/* Darker blue - transitioning to image color */}
          <Stop offset="45%" stopColor="#151a28" stopOpacity="1" />
          
          {/* Smooth transition 6 */}
          <Stop offset="52%" stopColor="#121722" stopOpacity="1" />
          
          {/* Smooth transition 7 */}
          <Stop offset="60%" stopColor="#0f141d" stopOpacity="1" />
          
          {/* Smooth transition 8 */}
          <Stop offset="65%" stopColor="#0e1119" stopOpacity="1" />
          
          {/* Very dark - closer to image color */}
          <Stop offset="70%" stopColor="#0d0f1a" stopOpacity="1" />
          
          {/* Smooth transition 9 */}
          <Stop offset="77%" stopColor="#0c0e19" stopOpacity="1" />
          
          {/* Smooth transition 10 */}
          <Stop offset="85%" stopColor="#0B0D1D" stopOpacity="1" />
          
          {/* Dark area - matching image color #0B0C1C */}
          <Stop offset="90%" stopColor="#0B0C1C" stopOpacity="1" />
          
          {/* Smooth transition 11 */}
          <Stop offset="95%" stopColor="#0B0C1C" stopOpacity="1" />
          
          {/* Edges: Same dark color as image */}
          <Stop offset="100%" stopColor="#0B0C1C" stopOpacity="1" />
        </RadialGradient>
      </Defs>

      <Rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#spotlight)"
      />
    </Svg>
  );
}
