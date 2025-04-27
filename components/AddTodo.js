import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const AddTodo = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.NoteButton} onPress={onPress}>
        <AntDesignIcon name="plus" size={24} color={'white'} />
      </TouchableOpacity>
    );
  };

export default AddTodo

const styles = StyleSheet.create({ 
NoteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 40,
    position: 'absolute',

    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#3498db',
    elevation: 3,
},
});