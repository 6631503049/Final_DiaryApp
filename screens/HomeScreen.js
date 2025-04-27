import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import AddNewDiary from '../components/AddNewDiary';
import AddNewDiaryScreen from '../components/AddNewDiaryScreen';


const HomeScreen = () => {  

  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [diaries, setDiaries] = useState([]);


  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddDiary = (newDiary) => {
    if (editingIndex !== null) {
      const updated = [...diaries];
      updated[editingIndex] = newDiary;
      setDiaries(updated);
      setEditingIndex(null); 
    } else {
      setDiaries(prev => [...prev, newDiary]);
    }
    setOpen(false);
  };

  const handleDeleteDiary = (index) => {
    const updated = diaries.filter((_, i) => i !== index);
    setDiaries(updated);
  };

  const handleEditDiary = (index) => {
    setEditingIndex(index);
    setOpen(true);
  };

  return (
    <SafeAreaView style={styles.SafeContainer}>
      <View style={styles.Container}>
        <View style={styles.HeaderBox}>
          <Text style={styles.HeaderText}>Today Diary</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {diaries.map((item, index) => (
      <View key={index} style={styles.MainContainer}>
      <View style={styles.TextWrapper}>
      <Text style={{ fontSize: 20, fontWeight: '600', paddingBottom: 5,}}>{item.title}</Text>
      <Text style={{ fontSize: 18, fontWeight: '400', paddingBottom: 5, }}>{item.description}</Text>
      <Text style={{ fontSize: 18, fontWeight: '500' }}>Feel: {item.feel}</Text>

      <Text style={{ fontSize: 16, fontWeight: '400', color: 'gray' }}>
        {item.date ? new Date(item.date).toDateString() : ''}
      </Text>
    </View>

    <View style={styles.IconWrapper}>
      <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={() => handleEditDiary(index)}>
        <FeatherIcon name="edit" size={22} color={'black'} />
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={() => handleDeleteDiary(index)}>
        <FontAwesomeIcon name="trash" size={24} color={'red'} />
      </TouchableOpacity>
        </View>
      </View>
        ))}
      </ScrollView>

        <AddNewDiary onPress={() => { 
          setEditingIndex(null); 
          setOpen(true);
        }} />

        <AddNewDiaryScreen
          isActive={open}
          onClose={() => {
            setOpen(false);
            setEditingIndex(null); 
          }}
          onSubmit={handleAddDiary}
          editingDiary={editingIndex !== null ? diaries[editingIndex] : null} // ⭐ ส่งข้อมูลที่แก้ไป
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  SafeContainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  Container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  HeaderBox: {
    textAlign: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',

    padding: 10,
    backgroundColor: '#ecf0f1',
  },
  HeaderText: {
    marginLeft: 20,
    fontSize: 28,
    fontWeight: '700',
  },
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderRadius: 10,

    backgroundColor: 'white',

    marginHorizontal: 30,
    marginTop: 10,
    padding: 5,
  },
  TextWrapper: {
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1, 
  },
  IconWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',

    paddingTop: 10,
    position: 'absolute',
    right: 15,
    top: 5,
  },
});
