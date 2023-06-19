import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useCallback, useContext, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import LocationContainer from '../components/LocationContainer';
import SummaryHeader from '../components/SummaryHeader';
import { CategoryContext } from './CategoryContext';
import { UserContext } from './UserContext';

SplashScreen.preventAutoHideAsync();

export default function MyWedding({ navigation }) {
  const { categories } = useContext(CategoryContext);
  const { userInfo } = useContext(UserContext);
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    QwitcherGrypen: require('../assets/fonts/QwitcherGrypen-Bold.ttf'),
  });
  const [selectedShop, setSelectedShop] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ctgs, setCtgs] = useState(categories);

  useEffect(() => {
    setCtgs(categories);
  }, [categories]);

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
        if (
          category.userIdSelected === userInfo.username &&
          category.id === selectedShop.id
        ) {
          return {
            ...category,
            userIdSelected: null,
          };
        }
        return category;
      });
      const filteredCategories = updatedCategories.filter(
        (category) => category.userIdSelected === userInfo.username
      );

      setCtgs(filteredCategories);
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
    position: 'absolute',
    bottom: '24%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    margin: 20,
    width: '92%',
    height: 412,
    backgroundColor: 'rgba(220, 197, 163, 0.88)',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'AbhayaLibre',
    color: 'white',
  },
  modalButtons: {
    width: '100%',
    height: 150,
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalButton: {
    backgroundColor: 'rgba(164, 135, 93, 0.86)',
    width: '35%',
    elevation: 2,
    padding: 10,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'AbhayaLibre',
    fontSize: 23,
    letterSpacing: 2,
  },
});
