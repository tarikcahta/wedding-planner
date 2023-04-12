import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import backIcon from '../assets/images/goBackIcon.png';
import hamburgerIcon from '../assets/images/hamburgerIconSumm.png';

const SummaryHeader = ({ onPress }) => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.pageHeader}>
      <TouchableOpacity onPress={onPress}>
        <Image source={backIcon} />
      </TouchableOpacity>
      <View>
        <Text style={styles.pageHeaderText}>SUMMARY</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image source={hamburgerIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SummaryHeader;

const styles = StyleSheet.create({
  pageHeader: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pageHeaderText: {
    color: '#C49D62',
    letterSpacing: 2,
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
});
