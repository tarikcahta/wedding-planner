import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import { useFonts } from 'expo-font';
import SummaryHeader from '../components/SummaryHeader';
import AddCategoryBtnAdmin from '../components/AddCategoryBtnAdmin';
import EditCategoryInfoAdmin from '../components/EditCategoryInfoAdmin';
import EditCategoryImageAdmin from '../components/EditCategoryImageAdmin';
import SubmitBtnAdmin from '../components/SubmitBtnAdmin';
import { useState } from 'react';

const AdminPanelAddNewObject = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState('');
  const [formData, setFormData] = useState({});

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
    // const locationData = {
    //   name,
    //   address,
    //   phoneNumber,
    // };
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
    // return formData.hasOwnProperty(property) ? formData[property] : property;
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
          <AddCategoryBtnAdmin />
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
          <EditCategoryInfoAdmin objProp={'Image'} />
          {/* <Text>Name: {formData.name}</Text>
            <Text>Address: {formData.address}</Text>
            <Text>Phone Number: {formData.phoneNumber}</Text>
            {console.log(formData)} */}
          {/* <EditCategoryImageAdmin
              objProp={require(`../assets/images/salon1.jpg`)}
            /> */}
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
});