import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../util/theme";
import { useTheme } from "./_layout";

export default function Index() {
  const router = useRouter();
  const { colors } = useTheme();
  const [isAsleep, setIsAsleep] = useState(false);
  const [btnColor, setBtnColor] = useState(colors.primary);
  const [fontColor, setFontColor] = useState("white");
  const insets = useSafeAreaInsets();

  function buttonSwap() {
    setIsAsleep(!isAsleep);

    if (isAsleep) {
      setBtnColor(colors.primary);
      setFontColor("white");
    } else {
      setBtnColor(colors.secondary);
      setFontColor("black");
    }
  }

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.topBar,
          { backgroundColor: colors.primary, paddingTop: insets.top },
        ]}
      >
        <Text style={styles.heading}>Early Birds</Text>
        <Pressable
          style={[styles.onboardingBtn, { backgroundColor: colors.secondary }]}
          onPress={() => router.push("/onboarding")}
        >
          <Text>Go to Onboarding</Text>
        </Pressable>
      </View>
      <View>
        <Text>Edit app/index.tsx to edit this screen.</Text>

        <Pressable
          style={[styles.sleepWakeBtn, { backgroundColor: btnColor }]}
          onPress={() => buttonSwap()}
        >
          {isAsleep ? (
            <Text style={[styles.subheading, { color: fontColor }]}>
              To Sleep
            </Text>
          ) : (
            <Text style={[styles.subheading, { color: fontColor }]}>Awake</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
  },
  page: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  sleepWakeBtn: {
    padding: 20,
    width: 200,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  onboardingBtn: {
    padding: 20,
    width: 160,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  heading: {
    color: "white",
    fontSize: 25,
    fontFamily: theme.fonts.header,
  },
  subheading: {
    fontSize: 18,
    fontFamily: theme.fonts.subheader,
  },
});
