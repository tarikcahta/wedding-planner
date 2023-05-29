import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  Alert,
  FlatList,
} from 'react-native';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import SummaryHeader from '../components/SummaryHeader';
import EditCategoryInfoAdmin from '../components/EditCategoryInfoAdmin';
import SubmitBtnAdmin from '../components/SubmitBtnAdmin';
import { useState } from 'react';

const AdminPanelAddNewObject = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState('');
  const [formData, setFormData] = useState({});
  const [selectedImg, setSelectedImg] = useState(null);

  // category button picker
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleBtnPress = (buttonLabel) => {
    setSelectedBtn(buttonLabel);
    setInputModalVisible(true);
  };

  const handleInputChange = (text) => {
    if (selectedBtn === 'Name') {
      setName(text);
    } else if (selectedBtn === 'Address') {
      setAddress(text);
    } else if (selectedBtn === 'Phone Number') {
      setPhoneNumber(text);
    }
  };

  const handlePropertySubmit = () => {
    if (selectedBtn === 'Name') {
      setFormData((prevData) => ({ ...prevData, name }));
    } else if (selectedBtn === 'Address') {
      setFormData((prevData) => ({ ...prevData, address }));
    } else if (selectedBtn === 'Phone Number') {
      setFormData((prevData) => ({ ...prevData, phoneNumber }));
    }
    setInputModalVisible(false);
    setSelectedBtn('');
  };

  const handleSubmit = async () => {
    if (name && address && phoneNumber) {
      const fullFormData = { ...formData, name, address, phoneNumber };
      Alert.alert('Success', 'Form data submitted successfully!');
    } else {
      Alert.alert('Error', 'Please fill in all fields!');
    }
    // send location data to server
    // -- CODE --
  };

  const getBtnTitle = (property) => {
    if (formData.hasOwnProperty(property)) {
      const value = formData[property];
      if (value) {
        return value;
      }
    }
    if (property === 'phoneNumber') return (property = 'Phone Number');
    if (property === 'address') return (property = 'Address');
    if (property === 'name') return (property = 'Name');

    return property;
  };

  const handleImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult === false) {
      console.log('Permission to access gallery is required!');
      return;
    }

    const imageResult = await ImagePicker.launchImageLibraryAsync();

    if (!imageResult.cancelled) {
      setSelectedImg(imageResult.uri);
    }
  };

  const options = [
    'Dresses',
    'Suits',
    'Venues',
    'Photo / Video',
    'Music',
    'Catering',
    'Decorations',
    'Invitations',
    'Cake',
    'Car rental',
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.pageContainer}>
      <SummaryHeader
        title={'ADMIN'}
        onPress={handlePress}
        onPressDrawer={() => navigation.openDrawer()}
      />

      <View style={styles.mainBody}>
        <View style={styles.mBCategories}>
          <Text style={styles.mBCategoriesTxt}>ADD NEW</Text>
        </View>

        <View>
          {/* <AddCategoryBtnAdmin /> */}
          <View style={styles.catBtnStyle}>
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              style={styles.catBtnStyling}
            >
              <Text style={styles.catBtnTextStyle}>
                {selectedOption || 'Category'}
              </Text>
            </TouchableOpacity>

            {/* Modal to display options */}
            <Modal
              visible={isModalVisible}
              animationType="slide"
              transparent={true}
            >
              <View style={styles.modalContainerCatBtn}>
                <View style={styles.modalContentCatBtn}>
                  {/* List of options */}
                  <FlatList
                    data={options}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.optionsCatStyle}
                        // key={option}
                        onPress={() => handleOptionSelect(item)}
                      >
                        <Text style={styles.optionCatText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                  />
                </View>
              </View>
            </Modal>
          </View>
          <EditCategoryInfoAdmin
            objProp={getBtnTitle('name')}
            onPress={() => handleBtnPress('Name')}
          />
          <EditCategoryInfoAdmin
            objProp={getBtnTitle('address')}
            onPress={() => handleBtnPress('Address')}
          />
          <EditCategoryInfoAdmin
            onPress={() => handleBtnPress('Phone Number')}
            objProp={getBtnTitle('phoneNumber')}
          />
          <EditCategoryInfoAdmin
            onPress={handleImagePicker}
            objProp={'Image'}
          />
        </View>
        <Modal
          visible={inputModalVisible}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.optionsStyle}
                placeholder={`Enter ${selectedBtn}`}
                value={
                  selectedBtn === 'Name'
                    ? name
                    : selectedBtn === 'Address'
                    ? address
                    : phoneNumber
                }
                onChangeText={handleInputChange}
              />
              <SubmitBtnAdmin onPress={() => handlePropertySubmit()} />
            </View>
          </View>
        </Modal>
        <View style={styles.btnPosition}>
          <TouchableOpacity onPress={handleSubmit} style={styles.btnStyle}>
            <Text style={styles.btnText}>ADD NEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdminPanelAddNewObject;

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
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'rgb(228, 220, 220)',
    padding: 20,
    borderRadius: 5,
    width: '90%',
    height: 180,
    justifyContent: 'space-around',
  },
  optionsStyle: {
    width: '100%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    padding: 8,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catBtnStyle: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catBtnStyling: {
    width: '87%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catBtnTextStyle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AbhayaLibre',
    letterSpacing: 4,
  },
  optionsCatStyle: {
    width: '100%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    padding: 8,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionCatText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
  modalContainerCatBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentCatBtn: {
    backgroundColor: 'rgb(228, 220, 220)',
    padding: 20,
    borderRadius: 5,
    width: '90%',
    height: 500,
  },
});
