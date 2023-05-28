import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable, ScrollView } from 'react-native';
import MainButton from '../components/MainButton';
import Button from '../components/Button';
import bgImg from '../assets/images/bg.png';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react'
import { signUp } from './requests';

SplashScreen.preventAutoHideAsync();

export default function Registration({ navigation }) {
  const [userData, setUserData] = useState({
    name: '',
    surename: '',
    username: '',
    fianceName: '',
    weddingDate: null,
    budget: null
  })

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
    <ScrollView style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.imageBG}>
        <TextInput
          style={styles.textInput}
          placeholder='Name'
          onChangeText={(text) =>
            setUserData({
              ...userData,
              name: text
            })
          }
        />

        <TextInput
          style={styles.textInput}
          placeholder='Surname'
          onChangeText={(text) => setUserData({
            ...userData,
            surename: text
          })}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Username'
          onChangeText={(text) => setUserData({
            ...userData,
            username: text
          })}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Fiances name'
          onChangeText={(text) => setUserData({
            ...userData,
            fianceName: text
          })}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Wedding date'
          onChangeText={(text) => setUserData({
            ...userData,
            weddingDate: text
          })}
        />

        <TextInput
          style={styles.textInput}
          placeholder='Budget'
          onChangeText={(text) => setUserData({
            ...userData,
            budget: text
          })}
        />
        <MainButton title="Save" style={{ fontFamily: 'AbhayaLibre', marginBottom: 10 }} onPress={() => signUp(userData)} />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10000,
    backgroundImage: { bgImg },
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  textInput: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    fontFamily: 'AbhayaLibre',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    padding: 8,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 77,
    backgroundColor: 'transparent',
    color: 'white',
  }
});
