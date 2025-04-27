import DateTimePicker from '@react-native-community/datetimepicker';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, StyleSheet, Platform } from 'react-native';
import Modal from 'react-native-modal';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


const AddTodoScreen = ({ isActive, onClose, onSubmit, editingDiary }) => {
  const [todoList, setTodoList] = useState('');

  useEffect(() => {
    if (editingDiary) {
        setTodoList(editingDiary.todoList);
    } else {
        setTodoList('');
    }
  }, [editingDiary]);

  const handleConfirm = () => {
    if (todoList.trim() !== '') {
      onSubmit({
        todoList,
        });
        setTodoList('');
    }
  };

  return (
    <DismissKeyboard>
      <Modal isVisible={isActive} style={styles.Model}>
        <View style={styles.MainContainer}>
          <View style={styles.HeaderWrapper}>
            <Text style={{ fontSize: 24, fontWeight: '700' }}>
              {editingDiary ? 'Edit TodoList' : 'Add New TodoList'}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesignIcon name="closecircle" size={36} color={'red'} />
            </TouchableOpacity>
          </View>

          <View style={styles.TextInputWrapper}>

            <TextInput
              placeholder="Add Todo here..."
              style={{ fontSize: 18, fontWeight: '400'}}
              multiline
              value={todoList}
              onChangeText={setTodoList}
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

export default AddTodoScreen;


const styles = StyleSheet.create({
  Model: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  MainContainer: {
    padding: 20,
    height: '30%',
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
    padding: 3,
    marginTop: 12,

    justifyContent: 'center',
    alignSelf: 'center',

    width: '95%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    
  },
});
