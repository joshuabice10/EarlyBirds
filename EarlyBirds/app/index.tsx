import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={[styles.page, { backgroundColor: "gold" }]}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Pressable
        style={styles.tempBtn}
        onPress={() => router.push("/onboarding")}
      >
        <Text>Go to Onboarding</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempBtn: {
    padding: 20,
    backgroundColor: "red",
    borderRadius: 20,
  },
});
