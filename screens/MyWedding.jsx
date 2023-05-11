import { StyleSheet, View, Text } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LocationContainer from '../components/LocationContainer';
import SummaryHeader from '../components/SummaryHeader';

SplashScreen.preventAutoHideAsync();

export default function MyWedding({ navigation }) {
  const categories = [
    {
      name: 'Dresses',
      choices: {
        title: 'Salon vjenčanica i svečanih haljina',
        address: 'Otoka, Džemala Bijedića 25/E Sarajevo',
        openingHour: 8,
        closingHour: 20,
        workHoursTime: ' closes 8pm',
        phoneNumber: '061 143 950',
        image: require('../assets/images/salon1.jpg'),
      },
    },
    {
      name: 'Venues',
      choices: {
        title: 'Restaurant Tavola',
        address: 'Maršala Tita 50',
        openingHour: 8,
        closingHour: 23,
        workHoursTime: ' closes 11pm',
        phoneNumber: '033 222 207',
        image: require('../assets/images/venues1.jpg'),
      },
    },
  ];

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

  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.pageContainer} onLayout={onLayoutRootView}>
      <SummaryHeader
        title={'My wedding'}
        onPress={handlePress}
        onPressDrawer={() => navigation.openDrawer()}
      />
      <View style={styles.mainBody}>
        {categories.map((category) => (
          <View style={styles.choices} key={category.name}>
            <View style={styles.mBCategories}>
              <Text style={styles.mBCategoriesTxt}>{category.name}</Text>
            </View>
            <TouchableOpacity style={{ width: '100%' }}>
              <LocationContainer
                title={category.choices.title}
                address={category.choices.address}
                hoursOpened={category.choices.openingHour}
                hoursClosed={category.choices.closingHour}
                workHoursTime={category.choices.workHoursTime}
                phoneNumber={category.choices.phoneNumber}
                image={category.choices.image}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 4,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  choices: {
    width: '103%',
    marginBottom: 35,
  },
  mBCategories: {
    width: '90%',
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  mBCategoriesTxt: {
    color: '#C49D62',
    letterSpacing: 4,
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
});
