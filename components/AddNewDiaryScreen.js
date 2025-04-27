import DateTimePicker from '@react-native-community/datetimepicker';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, StyleSheet, Platform } from 'react-native';
import Modal from 'react-native-modal';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


const AddNewDiaryScreen = ({ isActive, onClose, onSubmit, editingDiary }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [feel, setFeel] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (editingDiary) {
      setTitle(editingDiary.title);
      setDescription(editingDiary.description);
      setFeel(editingDiary.feel);
      setDate(editingDiary.date ? new Date(editingDiary.date) : new Date());
    } else {
      setTitle('');
      setDescription('');
      setFeel('');
      setDate(new Date());
    }
  }, [editingDiary]);

  const handleConfirm = () => {
    if (title.trim() !== '') {
      onSubmit({
        title,
        description,
        feel,
        date,
      });
      setTitle('');
      setDescription('');
      setFeel('');
      setDate(new Date());
    }
  };

  return (
    <DismissKeyboard>
      <Modal isVisible={isActive} style={styles.Model}>
        <View style={styles.MainContainer}>
          <View style={styles.HeaderWrapper}>
            <Text style={{ fontSize: 24, fontWeight: '700' }}>
              {editingDiary ? 'Edit Diary' : 'Add New Diary'}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesignIcon name="closecircle" size={36} color={'red'} />
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, color: 'black', marginLeft: 10, }}>
              {`Today: ${date.toDateString()}`}
            </Text>
          </View>

          <View style={styles.TextInputWrapper}>
            <TextInput
              placeholder="How do you feel today e.g.Good, Bad.."
              style={{ fontSize: 18, fontWeight: '400' }}
              value={feel}
              onChangeText={setFeel}
            />

            <TextInput
              placeholder="Title"
              style={{ fontSize: 20, fontWeight: '600' }}
              multiline
              value={title}
              onChangeText={setTitle}
            />
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />

            <TextInput
              placeholder="Write your diary here..."
              style={{ fontSize: 18, fontWeight: '400' }}
              multiline
              value={description}
              onChangeText={setDescription}
            />
          </View>


          <TouchableOpacity style={styles.SummitButton} onPress={handleConfirm}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </DismissKeyboard>
  );
};

export default AddNewDiaryScreen;


const styles = StyleSheet.create({
  Model: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  MainContainer: {
    padding: 20,
    height: '60%',
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  HeaderWrapper: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SummitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,

    height: 50,
    width: '95%',

    borderRadius: 10,
    backgroundColor: '#3498db'
  },
  TextInputWrapper: {
    paddingHorizontal: 10,
  },
});
