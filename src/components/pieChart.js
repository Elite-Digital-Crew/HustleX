import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Animated, Text } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

const { width, height } = Dimensions.get("screen");

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const FitImage = ({
  inSize= 8,
  inPercentage= 20,
  inColour= "tomato",
  outSize= 12,
  outPercentage= 20,
  outColour= "blue",
}) => {
  const innerCircleRadius = inSize;
  const innerCircleFillPercentage = inPercentage;
  const innerCirclePerimeter = 2 * Math.PI * innerCircleRadius;
  const innerCircleStrokeDashOffset =
    innerCirclePerimeter -
    (innerCirclePerimeter * innerCircleFillPercentage) / 100;

  const outerCircleRadius = outSize;
  const outerCircleFillPercentage = outPercentage;
  const outerCirclePerimeter = 2 * Math.PI * outerCircleRadius;
  const outerCircleStrokeDashOffset =
    outerCirclePerimeter -
    (outerCirclePerimeter * outerCircleFillPercentage) / 100;

  const [springValue] = useState(new Animated.Value(1.3));

  const [innerCircleInitialFill] = useState(
    new Animated.Value(innerCirclePerimeter)
  );
  const [outerCircleInitialFill] = useState(
    new Animated.Value(outerCirclePerimeter)
  );

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(innerCircleInitialFill, {
        toValue: innerCircleStrokeDashOffset,
        duration: 1000,
        useNativeDriver: false
      }),
      Animated.timing(outerCircleInitialFill, {
        toValue: outerCircleStrokeDashOffset,
        duration: 2000,
         useNativeDriver: false
      }),
      Animated.spring(springValue, {
        toValue: 1,
        friction: 1,
         useNativeDriver: false
      })
    ]).start()
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Svg
          viewBox={`0 0 50 50`}
          width={width}
          height={height / 2.5}
          style={{
            transform: [{ rotateZ: "-90deg" }],
          }}
        >
          <G>
            <Circle
              cx="25"
              cy="25"
              r={outerCircleRadius}
              fill="transparent"
              stroke= {inColour}
              opacity= {0.25}
              strokeWidth={1.25}
            />
            <AnimatedCircle
              cx="25"
              cy="25"
              r={outerCircleRadius}
              fill="transparent"
              stroke= {inColour}
              strokeDasharray={outerCirclePerimeter}
              strokeDashoffset={outerCircleInitialFill}
              strokeLinecap={"round"}
              strokeWidth={1.25}
            />
            <Circle
              cx="25"
              cy="25"
              r={innerCircleRadius}
              fill="transparent"
              stroke= {outColour}
              opacity= {0.25}
              strokeWidth={1.25}
            />
            <AnimatedCircle
              cx="25"
              cy="25"
              r={innerCircleRadius}
              fill="transparent"
              stroke= {outColour}
              strokeDasharray={innerCirclePerimeter}
              strokeDashoffset={innerCircleInitialFill}
              strokeLinecap={"round"}
              strokeWidth={1.25}
            />
          </G>
        </Svg>
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Text style={{
            fontSize: 24,
            fontFamily: "PoppinsBold"
          }}>GOALS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: width * 0.5,
  },
});

export default FitImage;