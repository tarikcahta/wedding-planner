import { View, ScrollView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import SummaryHeader from '../components/SummaryHeader';
import CategoryButton from '../components/CategoryButton';

const AdminPanelMain = () => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.pageContainer}>
      <SummaryHeader title={'ADMIN'} />
      <View style={styles.mainBody}>
        <ScrollView style={styles.scrollStyle}>
          <CategoryButton
            title={'Dresses'}
            onPress={() => navigation.navigate('Dresses')}
          />
          <CategoryButton
            title={'Suits'}
            onPress={() => navigation.navigate('Suits')}
          />
          <CategoryButton
            title={'Venues'}
            onPress={() => navigation.navigate('Venues')}
          />
          <CategoryButton
            title={'Photo / Video'}
            onPress={() => navigation.navigate('PhotoVideo')}
          />
          <CategoryButton
            title={'Music'}
            onPress={() => navigation.navigate('Music')}
          />
          <CategoryButton
            title={'Catering'}
            onPress={() => navigation.navigate('Catering')}
          />
          <CategoryButton
            title={'Decoration'}
            onPress={() => navigation.navigate('Decoration')}
          />
          <CategoryButton
            title={'Invitations'}
            onPress={() => navigation.navigate('Invitations')}
          />
          <CategoryButton
            title={'Cake'}
            onPress={() => navigation.navigate('Cake')}
          />
          <CategoryButton
            title={'Car rental'}
            onPress={() => navigation.navigate('CarRental')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default AdminPanelMain;

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
});
