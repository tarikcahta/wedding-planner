import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable, ScrollView } from 'react-native';
import MainButton from '../components/MainButton';
import Button from '../components/Button';
import bgImg from '../assets/images/bg.png';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function WishList({ navigation }) {
  const [fontsLoaded] = useFonts({
    'AbhayaLibre': require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    'QwitcherGrypen': require('../assets/fonts/QwitcherGrypen-Bold.ttf'),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
        
        <MainButton title="WishList" style={{height: 60, Color: 'black', fontFamily: 'AbhayaLibre', backgroundColor:'#bdbdbd'}} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0b0b0',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%", 
  },
});

