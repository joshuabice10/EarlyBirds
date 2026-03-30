import { useRouter } from "expo-router";
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from './_layout';

export default function Index() {
  const router = useRouter();
  const { colors } = useTheme();
  const [ isAsleep, setIsAsleep ] = useState(false);
  const [ btnColor, setBtnColor ] = useState(colors.primary);

  function buttonSwap() {
    setIsAsleep(!isAsleep);

    if(isAsleep) {
      setBtnColor(colors.primary);
    } else {
      setBtnColor(colors.secondary);
    }
  }

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      <View style={[styles.topBar, { backgroundColor: colors.primary }]}>
        <Text style={styles.heading}>Early Birdz</Text>
        <Pressable
          style={[styles.button2, { backgroundColor: colors.secondary }]}
          onPress={() => router.push("/onboarding")}
        >
          <Text>Go to Onboarding</Text>
        </Pressable>
      </View>
      <View>
        <Text>Edit app/index.tsx to edit this screen.</Text>

        <Pressable
          style={[styles.button1, { backgroundColor: btnColor }]}
          onPress={() => buttonSwap() }
        >
          { isAsleep ? <Text>To Sleep</Text> : <Text>Awake</Text> }
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: 120,
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  page: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  button1: {
    padding: 20,
    width: 200,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button2: {
    padding: 20,
    width: 160,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
