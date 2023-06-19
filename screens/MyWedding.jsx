import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useCallback, useContext, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import LocationContainer from '../components/LocationContainer';
import SummaryHeader from '../components/SummaryHeader';
import { CategoryContext } from './CategoryContext';
import { UserContext } from './UserContext';

SplashScreen.preventAutoHideAsync();

export default function MyWedding({ navigation }) {
  // const categories = [
  //   {
  //     category: 'Dresses',
  //     title: 'Salon vjenčanica i svečanih haljina',
  //     address: 'Otoka, Džemala Bijedića 25/E Sarajevo',
  //     openingHour: 8,
  //     closingHour: 20,
  //     workHoursTime: ' closes 8pm',
  //     phoneNumber: '061 143 950',
  //     image: require('../assets/images/salon1.jpg'),
  //   },
  //   {
  //     category: 'Venues',

  //     title: 'Restaurant Tavola',
  //     address: 'Maršala Tita 50',
  //     openingHour: 8,
  //     closingHour: 23,
  //     workHoursTime: ' closes 11pm',
  //     phoneNumber: '033 222 207',
  //     image: require('../assets/images/venues1.jpg'),
  //   },
  // ];

  const { categories } = useContext(CategoryContext);
  const { userInfo } = useContext(UserContext);
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    QwitcherGrypen: require('../assets/fonts/QwitcherGrypen-Bold.ttf'),
  });
  const [selectedShop, setSelectedShop] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ctgs, setCtgs] = useState(categories);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleShopPress = (shop) => {
    setSelectedShop(shop);
    setIsModalVisible(true);
  };

  const handleDelete = () => {
    if (selectedShop) {
      const updatedCategories = categories.map((category) => {
        if (category.userIdSelected === userInfo.username) {
          return {
            ...category,
            userIdSelected: null,
          };
        }
        return category;
      });
      setCtgs(updatedCategories);
    }
    setIsModalVisible(false);
  };

  const handlePress = () => {
    navigation.navigate('Home');
  };

  const filteredCategories = ctgs.filter(
    (category) => category.userIdSelected === userInfo.username
  );

  return (
    <View style={styles.pageContainer} onLayout={onLayoutRootView}>
      <SummaryHeader
        title={'My wedding'}
        onPress={handlePress}
        onPressDrawer={() => navigation.openDrawer()}
      />
      <View style={styles.mainBody}>
        <ScrollView style={styles.scrollStyle}>
          {filteredCategories.map((category) => (
            <View style={styles.choices} key={category.id}>
              <View style={styles.mBCategories}>
                <Text style={styles.mBCategoriesTxt}>{category.category}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleShopPress(category)}
                style={{ width: '100%' }}
              >
                <LocationContainer
                  title={category.companyName}
                  address={category.location}
                  hoursOpened={8}
                  hoursClosed={17}
                  workHoursTime={category.workHoursTime}
                  phoneNumber={category.phoneNumber}
                  image={category.image}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* Modal */}
      {/* Modal */}
      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Do you want to delete this from My Wedding list?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleDelete}
              >
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  scrollStyle: {
    width: '100%',
  },
  choices: {
    width: '98%',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
