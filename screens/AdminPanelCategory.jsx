import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import SummaryHeader from '../components/SummaryHeader';
import LocationContainerAdmin from '../components/LocationContainerAdmin';
import { useEffect, useState } from 'react';
import { getItemsByCategory } from './requests';

const AdminPanelCategory = ({ route, navigation }) => {
  const [shopItems, setItems] = useState([])

  useEffect(() => {
    const loadData = async () => {

      const res = await getItemsByCategory(route.params?.categoryName)
      setItems(res)
    };
    loadData();
  }, [route.params]);



  const paramData = route.params
  const categoryName = paramData ? paramData.categoryName : 'ADMIN'

  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const onEditItemInfo = (itemId) => {
    navigation.navigate('admin/edit', {
      categoryId: itemId,
      categoryName
    })
  }


  return (
    <View style={styles.pageContainer}>
      <SummaryHeader title={categoryName.toUpperCase()} onPress={() => navigation.navigate('AdminPanel')} />
      <View style={styles.mainBody}>
        <ScrollView>
          {shopItems.length > 0 && shopItems.map((loc) => (
            <LocationContainerAdmin
              key={loc.id}
              title={loc.companyName}
              imageUrl={loc.imageUrl}
              itemId={loc.id}
              onEditPress={onEditItemInfo}
            />
          ))}

        </ScrollView>
        <View style={styles.btnPosition}>
          <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate(`admin/create`)}>
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
