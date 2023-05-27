import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';

const AddCategoryBtnAdmin = ({ onPress }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

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

  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.btnPosition}>
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.btnStyle}
      >
        <Text style={styles.btnText}>{selectedOption || 'Category'}</Text>
      </TouchableOpacity>

      {/* Modal to display options */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* List of options */}
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionsStyle}
                  // key={option}
                  onPress={() => handleOptionSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddCategoryBtnAdmin;

const styles = StyleSheet.create({
  btnPosition: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    width: '87%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AbhayaLibre',
    letterSpacing: 4,
  },
  optionsStyle: {
    width: '100%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    padding: 8,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
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
    height: 500,
  },
});
