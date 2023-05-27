import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useFonts } from 'expo-font';
import SummaryHeader from '../components/SummaryHeader';
import EditCategoryBtnAdmin from '../components/EditCategoryBtnAdmin';
import EditCategoryInfoAdmin from '../components/EditCategoryInfoAdmin';
import EditCategoryImageAdmin from '../components/EditCategoryImageAdmin';

const AdminPanelEditObject = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = () => {
    navigation.navigate('Summary');
  };

  const handleSearch = () => {
    navigation.navigate('SearchResults');
  };

  return (
    <View style={styles.pageContainer}>
      <SummaryHeader
        onPress={handlePress}
        onPressDrawer={() => navigation.openDrawer()}
      />

      <View style={styles.mainBody}>
        <View style={styles.mBCategories}>
          <Text style={styles.mBCategoriesTxt}>EDIT</Text>
        </View>

        <View>
          <EditCategoryBtnAdmin title={'DRESSES'} />
          <EditCategoryInfoAdmin
            objProp={'Salon vjenčanica i svečanih haljina'}
          />
          <EditCategoryInfoAdmin
            objProp={'Otoka, Džemala Bijedića 25/E Sarajevo'}
          />
          <EditCategoryInfoAdmin objProp={'061 143 950'} />
          <EditCategoryImageAdmin
            objProp={require(`../assets/images/salon1.jpg`)}
          />
        </View>
        <View style={styles.btnPosition}>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnText}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdminPanelEditObject;

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
  btnPosition: {
    width: '93%',
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
