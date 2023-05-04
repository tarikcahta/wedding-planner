import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable, Image, TouchableOpacity } from 'react-native';
import MainButton from '../components/MainButton';
import Button from '../components/Button';
import bgImg from '../assets/images/bg.png';
import HomeHamburger from '../assets/images/HomeHamburger.png';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {
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
        <ImageBackground source={bgImg} resizeMode="cover" style={styles.imageBG}>

        <TouchableOpacity style={styles.Hamburger} onPress={() => navigation.openDrawer()}>
          <Image source={HomeHamburger} />
        </TouchableOpacity>

        <Text style={{fontFamily: 'QwitcherGrypen', fontSize: 90, lineHeight: 100, color: 'white', marginTop: 100, width: '100%', textAlign:'center'}}>Mia</Text>
        <Text style={{fontFamily: 'QwitcherGrypen', fontSize: 90, lineHeight: 100, color: 'white', width: '100%', textAlign:'center'}}>&</Text>
        <Text style={{fontFamily: 'QwitcherGrypen', fontSize: 90, lineHeight: 100, marginBottom: 50, color: 'white', width: '100%', textAlign:'center'}}>Mark</Text>

        <Text style={{fontFamily: 'AbhayaLibre', fontSize: 20, marginBottom: 50, color: 'white'}}>Are getting married in</Text>

        <View style={{width:'100%', flex: 1, flexDirection:'row', justifyContent:'center'}}>
            <View style={{width: '33%', height: 150, alignItems:'center', justifyContent:'space-between'}}>
                <View style={{width: 100, height: 100, borderRadius: 100, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontFamily: 'AbhayaLibre', fontSize: 30, textAlign:'center', color:'#974d32'}}>11</Text>
                </View>
                <Text style={{fontFamily: 'AbhayaLibre', fontSize: 20, textAlign:'center', color:'#ececec'}}>months</Text>
            </View>

            <View style={{width: '33%', height: 150, alignItems:'center', justifyContent:'space-between'}}>
                <View style={{width: 100, height: 100, borderRadius: 100, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontFamily: 'AbhayaLibre', fontSize: 30, textAlign:'center', color:'#974d32'}}>22</Text>
                </View>
                <Text style={{fontFamily: 'AbhayaLibre', fontSize: 20, textAlign:'center', color:'#ececec'}}>days</Text>
            </View>

            <View style={{width: '33%', height: 150, alignItems:'center', justifyContent:'space-between'}}>
                <View style={{width: 100, height: 100, borderRadius: 100, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontFamily: 'AbhayaLibre', fontSize: 30, textAlign:'center', color:'#974d32'}}>8</Text>
                </View>
                <Text style={{fontFamily: 'AbhayaLibre', fontSize: 20, textAlign:'center', color:'#ececec'}}>hours</Text>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',  
    backgroundImage: {bgImg},
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%", 
    width: "100%", 
  },
  Hamburger: {
    position: "absolute",
    top: 50,
    right: 20,
  },
});
