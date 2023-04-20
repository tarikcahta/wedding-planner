import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SummaryHeader from '../components/SummaryHeader';

SplashScreen.preventAutoHideAsync();

export default function WishList({ navigation }) {
  const [text, setText] = useState('');

  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    QwitcherGrypen: require('../assets/fonts/QwitcherGrypen-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SummaryHeader title={'WISH LIST'} />
      <View style={styles.notesBlock}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notesBlock: {
    width: '85%',
    flex: 4,
    backgroundColor: 'rgba(196, 157, 98, 0.85)',
    marginBottom: 20,
  },
});
