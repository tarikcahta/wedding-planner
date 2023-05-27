import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useFonts } from 'expo-font';
import SummaryHeader from '../components/SummaryHeader';
import LocationContainerAdmin from '../components/LocationContainerAdmin';

const AdminPanelCategory = () => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const location = [
    (locationOne = {
      title: 'Salon vjenčanica i svečanih haljina',
      address: 'Otoka, Džemala Bijedića 25/E Sarajevo',
      workHoursOpened: 'Open',
      workHoursTime: ' close 8pm',
      phoneNumber: '061 143 950',
      image: require('../assets/images/salon1.jpg'),
    }),
    (locationTwo = {
      title: 'Atelier Sposa',
      address: 'Azize Šaćirbegović 80c',
      workHoursOpened: 'Open',
      workHoursTime: ' close 8pm',
      phoneNumber: '060 30 30 388',
      image: require('../assets/images/salon2.jpg'),
    }),
    (locationThree = {
      title: 'Salon vjenčanica Graziosa Sposa',
      address: 'Zagrebačka 75',
      workHoursOpened: 'Open',
      workHoursTime: ' close 8pm',
      phoneNumber: '062 014 708',
      image: require('../assets/images/salon3.jpg'),
    }),
  ];

  return (
    <View style={styles.pageContainer}>
      <SummaryHeader title={'ADMIN'} />
      <View style={styles.mainBody}>
        {location.map((loc) => (
          <LocationContainerAdmin
            key={loc.title}
            title={loc.title}
            image={loc.image}
          />
        ))}
        <View style={styles.btnPosition}>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnText}>ADD NEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdminPanelCategory;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 4,
    width: '100%',
  },
  btnPosition: {
    width: '96%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnStyle: {
    marginTop: 20,
    width: '36%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'AbhayaLibre',
    letterSpacing: 2,
  },
});
