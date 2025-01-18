import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignUp from "./SignUp";

const { width } = Dimensions.get("window"); // Screen width

const SignIn = () => {
  const navigate = useNavigation();
  const pan = useRef(new Animated.Value(0)).current; // Tracks horizontal movement
  const maxSwipeDistance = width - 150; // Maximum swipe distance for the arrow

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Limit the arrow movement within the button
        if (gestureState.dx >= 0 && gestureState.dx <= maxSwipeDistance) {
          pan.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        // Trigger action if swiped far enough
        if (gestureState.dx > maxSwipeDistance * 0.7) {
          console.log("Swipe Complete!");
          navigate.navigate("SignUp");
          // Add navigation or action logic here
        } else {
          // Reset to starting position if swipe is incomplete
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <ImageBackground
      source={require("@/assets/images/coverimage.jpg")} // Update with your image path
      style={styles.backgroundImage}
    >
      {/* Footer Section */}
      <View style={styles.footerContainer}>
        <Text style={styles.title}>BRINGING GAMING INTO YOUR ROUTINE</Text>
        <Text style={styles.subtitle}>ENDLESS FUN!</Text>

        <View style={styles.swipeButtonContainer}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[
              styles.arrowContainer,
              { transform: [{ translateX: pan }] },
            ]}
          >
            <Text style={styles.arrow}>▶</Text>
          </Animated.View>
          <Text style={styles.swipePrompt}>Swipe to start</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  footerContainer: {
    position: "absolute",
    bottom: 40, // Position footer near the bottom of the screen
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  swipeButtonContainer: {
    width: width - 80, // Swipe button width
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Ensure arrow stays within button bounds
    position: "relative",
  },
  arrowContainer: {
    position: "absolute",
    left: 0,
    height: 60,
    width: 60,
    backgroundColor: "#333",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    color: "#fff",
    fontSize: 24,
  },
  swipePrompt: {
    position: "absolute",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignIn;
