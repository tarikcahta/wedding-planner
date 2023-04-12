import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import CategoryButton from '../components/CategoryButton';
import SummaryHeader from '../components/SummaryHeader';

const App = () => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
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
          <Text style={styles.mBCategoriesTxt}>CATEGORY</Text>
        </View>

        <View style={styles.scrollStyle}>
          <CategoryButton onPress={handlePress} title={'Location'} />
          <CategoryButton onPress={handlePress} title={'Budget'} />
        </View>
      </View>
    </View>
  );
};

export default App;

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
    marginTop: 20,
    marginBottom: 30,
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
});
