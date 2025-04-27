import { View, Text, Platform, StatusBar, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import AllQuote from '../database/AllQuote.json';

const QuoteScreen = () => {
    const [randomQuote, setRandomQuote] = useState('');

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * AllQuote.length);
        setRandomQuote(AllQuote[randomIndex].quote);
  };

  useEffect(() => {
    getRandomQuote(); }, []);

  return (
    <SafeAreaView style={styles.SafeContainer}>
      <View style={styles.Container}>
      <View style={styles.HeaderBox}>
          <Text style={styles.HeaderText}>Quote</Text>
        </View>

        <Image 
            source={require('../database/CatMeme.jpg')}
            style={{ width: 350, height: 300, alignSelf: 'center', borderRadius: 10, marginTop: 10, marginBottom: 10 }}/>
        
        <View style={styles.QuoteWrapper}>
            <Text style={styles.quoteText}>"{randomQuote}"</Text>
        </View>
        

        <TouchableOpacity style={styles.ReloadButton} onPress={getRandomQuote}>
            <AntDesignIcon name="reload1" size={24} color={'white'} /> 
        </TouchableOpacity>

      </View>      
    </SafeAreaView>
  )
}

export default QuoteScreen

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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
  },
  ReloadButton: {
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
  QuoteWrapper: {
    marginTop: 10,
    marginHorizontal: 30,
    padding: 10,

    borderRadius: 10,
    
    backgroundColor: 'white',

    width: 'auto',
    height: 100,
    
    textAlign: 'center',
    justifyContent: 'center'
  }
  
});
