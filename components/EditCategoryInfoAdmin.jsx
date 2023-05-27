import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const EditCategoryInfoAdmin = ({ objProp, onPress }) => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.btnPosition}>
      <TouchableOpacity onPress={onPress} 
      style={styles.btnStyle}>
        <Text style={styles.btnText}>{objProp}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditCategoryInfoAdmin;

const styles = StyleSheet.create({
  btnPosition: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    width: '87%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    height: 53,
    // paddingVertical: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'AbhayaLibre',
  },
});
