import { View, StyleSheet, Text } from 'react-native';
import SummaryHeader from '../components/SummaryHeader';
import LocationContainer from '../components/LocationContainer';

const SearchResults = () => {
  const location = {
    locationOne: {
      title: 'Salon vjenčanica i svečanih haljina',
      address: 'Otoka, Džemala Bijedića 25/E Sarajevo',
      workHoursOpened: 'Open',
      workHoursTime: ' close 8pm',
      phoneNumber: '061 143 950',
      image: require('../assets/images/salon1.jpg'),
    },
    locationTwo: {
      title: 'Atelier Sposa',
      address: 'Azize Šaćirbegović 80c',
      workHoursOpened: 'Open',
      workHoursTime: ' close 8pm',
      phoneNumber: '060 30 30 388',
      image: require('../assets/images/salon2.jpg'),
    },

    locationThree: {
      title: 'Salon vjenčanica Graziosa Sposa',
      address: 'Zagrebačka 75',
      workHoursOpened: 'Open',
      workHoursTime: ' close 8pm',
      phoneNumber: '062 014 708',
      image: require('../assets/images/salon3.jpg'),
    },
  };

  return (
    <View style={styles.pageContainer}>
      <SummaryHeader title={'SUMMARY'} />
      <View style={styles.mainBody}>
        <View style={styles.mBCategories}>
          <Text style={styles.mBCategoriesTxt}>DRESSES</Text>
        </View>
        <LocationContainer
          title={location.locationOne.title}
          address={location.locationOne.address}
          workHoursOpened={location.locationOne.workHoursOpened}
          workHoursTime={location.locationOne.workHoursTime}
          phoneNumber={location.locationOne.phoneNumber}
          image={location.locationOne.image}
        />
        <LocationContainer
          title={location.locationTwo.title}
          address={location.locationTwo.address}
          workHoursOpened={location.locationTwo.workHoursOpened}
          workHoursTime={location.locationTwo.workHoursTime}
          phoneNumber={location.locationTwo.phoneNumber}
          image={location.locationTwo.image}
        />
        <LocationContainer
          title={location.locationThree.title}
          address={location.locationThree.address}
          workHoursOpened={location.locationThree.workHoursOpened}
          workHoursTime={location.locationThree.workHoursTime}
          phoneNumber={location.locationThree.phoneNumber}
          image={location.locationThree.image}
        />
      </View>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mBCategories: {
    width: '98%',
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  mBCategoriesTxt: {
    color: '#C49D62',
    letterSpacing: 2,
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
});
