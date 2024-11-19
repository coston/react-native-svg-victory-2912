import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text as RNText } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { Text, Svg } from "react-native-svg";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <RNText style={{ fontFamily: "Roboto" }}>
        react-native: キロ, メートル coston
      </RNText>

      <Svg height="100" width="300">
        <Text x="0" y="40" fontFamily="Roboto">
          react-native-svg: キロ, メートル coston
        </Text>
      </Svg>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 16,
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: "center",
  },
});
