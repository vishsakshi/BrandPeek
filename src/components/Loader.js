import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

export default function Loader({ message }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
      {/* Optional loading message */}
      {message && <Text style={styles.text}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    marginTop: 16,
    fontSize: 14,
    opacity: 0.7,
  },
});
