import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import SummaryHeader from '../components/SummaryHeader';
import EditCategoryBtnAdmin from '../components/EditCategoryBtnAdmin';
import EditCategoryInfoAdmin from '../components/EditCategoryInfoAdmin';
import EditCategoryImageAdmin from '../components/EditCategoryImageAdmin';
import SubmitBtnAdmin from '../components/SubmitBtnAdmin';
import { editItem } from './requests';
import { Toast } from 'toastify-react-native';

const AdminPanelEditObject = ({ navigation, route }) => {
  const [name, setName] = useState('Salon vjenčanica i svečanih haljina');
  const [address, setAddress] = useState(
    'Otoka, Džemala Bijedića 25/E Sarajevo'
  );
  const [phoneNumber, setPhoneNumber] = useState('061 143 950');
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState('');
  const [formData, setFormData] = useState({});
  const [selectedImg, setSelectedImg] = useState(null);

  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = () => {
    navigation.navigate('Summary');
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

  const handleSubmit = async (navigation) => {
    const targetId = route.params?.categoryId
    const ctgName = route.params?.categoryName

    if (name && address && phoneNumber) {
      const fullFormData = {
        ...formData,
        name,
        address,
        phoneNumber,
        selectedImg,
      };



      const formattedData =
      {
        companyName: fullFormData.name,
        location: fullFormData.address,
        phoneNumber,
        imageUrl: '',
        isExpensive: true,
      }

      const response = await editItem(formattedData, targetId)

      if (response.success) {
        navigation.navigate('AdminPanel', {
          categoryName: ctgName
        })
        Toast.success('Form data changed successfully!')
      }
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
    if (property === 'phoneNumber') return (property = phoneNumber);
    if (property === 'address') return (property = address);
    if (property === 'name') return (property = name);

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
      console.log(imageResult.uri);
    }
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
          <EditCategoryBtnAdmin title={'Dresses'} />
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

          <View style={styles.btnPosition}>
            {selectedImg ? (
              <TouchableOpacity
                style={styles.imgBtn}
                onPress={handleImagePicker}
              >
                <Image source={{ uri: selectedImg }} style={styles.img} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.btnStyleImg}
                onPress={handleImagePicker}
              >
                <Text style={styles.btnText}>Image</Text>
              </TouchableOpacity>
            )}
          </View>
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
          <TouchableOpacity onPress={() => handleSubmit(navigation)} style={styles.btnStyle}>
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
  img: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  btnStyle: {
    marginTop: 20,
    width: '36%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyleImg: {
    width: '93%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBtn: {
    width: '100%',
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
    marginTop: 30,
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
});
