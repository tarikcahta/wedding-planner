import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import CategoryButton from '../../components/CategoryButton';
import SummaryHeader from '../../components/SummaryHeader';
import SearchButton from '../../components/SearchButton';
import LocationParamBtn from '../../components/LocationParamBtn';

const Cake = () => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = () => {
    console.log('Icon pressed');
  };

  return (
    <View style={styles.pageContainer}>
      <SummaryHeader onPress={handlePress} />

      <View style={styles.mainBody}>
        <View style={styles.mBCategories}>
          <Text style={styles.mBCategoriesTxt}>CAKE</Text>
        </View>

        <View style={styles.scrollStyle}>
          <LocationParamBtn onPress={handlePress} />
          <CategoryButton onPress={handlePress} title={'Budget'} />
        </View>
        <View style={styles.searchBtn}>
          <SearchButton onPress={handlePress} title={'Search'} />
        </View>
      </View>
    </View>
  );
};

export default Cake;

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
  scrollStyle: {
    flex: 4,
    marginTop: 20,
  },
  mBCategories: {
    width: '90%',
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
  searchBtn: {
    flex: 1,
  },
});