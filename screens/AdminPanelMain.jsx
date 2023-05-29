import { View, ScrollView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import SummaryHeader from '../components/SummaryHeader';
import CategoryButton from '../components/CategoryButton';

const AdminPanelMain = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const onSelectCategory = (categoryName) => {
    navigation.navigate('admin/category', {
      categoryName
    })
  }

  return (
    <View style={styles.pageContainer}>
      <SummaryHeader title={'ADMIN'} />
      <View style={styles.mainBody}>
        <ScrollView style={styles.scrollStyle}>
          <CategoryButton
            title={'Dresses'}
            onPress={() => onSelectCategory('Dresses')}
          />
          <CategoryButton
            title={'Suits'}
            onPress={() => onSelectCategory('Suits')}
          />
          <CategoryButton
            title={'Venues'}
            onPress={() => onSelectCategory('Venues')}
          />
          <CategoryButton
            title={'Photo / Video'}
            onPress={() => onSelectCategory('PhotoVideo')}
          />
          <CategoryButton
            title={'Music'}
            onPress={() => onSelectCategory('Music')}
          />
          <CategoryButton
            title={'Catering'}
            onPress={() => onSelectCategory('Catering')}
          />
          <CategoryButton
            title={'Decoration'}
            onPress={() => onSelectCategory('Decoration')}
          />
          <CategoryButton
            title={'Invitations'}
            onPress={() => onSelectCategory('Invitations')}
          />
          <CategoryButton
            title={'Cake'}
            onPress={() => onSelectCategory('Cake')}
          />
          <CategoryButton
            title={'Car rental'}
            onPress={() => onSelectCategory('CarRental')}
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
