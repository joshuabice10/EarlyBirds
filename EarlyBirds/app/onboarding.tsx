import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Onboarding() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Onboarding page</Text>
      <Pressable style={styles.tempBackBtn} onPress={() => router.back()}>
        <Text>Back Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tempBackBtn: {
    padding: 20,
    backgroundColor: "red",
    alignSelf: "flex-start",
  },
});
