import { Accelerometer } from "expo-sensors";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [acc, setAcc] = useState({ x: 0, y: 0, z: 0 });
  const [isAvailable, setIsAvailable] = useState(false);
  let sub: ReturnType<typeof Accelerometer.addListener> | null = null;

  useEffect(() => {
    Accelerometer.isAvailableAsync().then(
      (result) => {
        setIsAvailable(result);
      },
      (error) => console.error(error)
    );

    if (isAvailable) {
      Accelerometer.setUpdateInterval(1000);
      sub = Accelerometer.addListener((coord) => {
        setAcc(coord);
      });
    }

    return () => {
      sub && sub.remove();
    };
  }, [isAvailable]);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(acc)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
