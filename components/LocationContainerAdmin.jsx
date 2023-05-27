import { useFonts } from 'expo-font';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LocationContainerAdmin = ({
  title,
  address,
  hoursOpened,
  hoursClosed,
  workHoursTime,
  phoneNumber,
  image,
}) => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  //   const isOpen = (hoursOpened, hoursClosed) => {
  //     let currentTime = new Date().getHours();
  //     if (currentTime >= hoursOpened && currentTime < hoursClosed) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };

  return (
    <View style={styles.locations}>
      <View style={styles.locationContainer}>
        <Image source={image} />

        <View style={styles.rightSideLocationsStyles}>
          <View style={styles.headerTextStylesContainer}>
            <Text style={styles.headerTextStyles}>{title}</Text>
          </View>
          <View style={styles.infoBody}>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnText}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnText}>DELETE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LocationContainerAdmin;

const styles = StyleSheet.create({
  locations: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    width: '92%',
    height: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(196, 157, 98, 0.59)',
  },
  headerTextStylesContainer: {
    marginTop: 10,
    width: '100%',
  },
  infoBody: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnStyle: {
    width: '36%',
    backgroundColor: 'rgba(255, 255, 255, 0.59);',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'rgba(196, 157, 98, 1)',
    fontSize: 18,
    fontFamily: 'AbhayaLibre',
    letterSpacing: 2,
  },
  headerTextStyles: {
    color: 'white',
    fontFamily: 'AbhayaLibre',
    fontSize: 15,
    letterSpacing: 2,
  },
  rightSideLocationsStyles: {
    width: '65%',
  },
});
