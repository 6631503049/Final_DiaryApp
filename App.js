import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import HomeScreen from './screens/HomeScreen';
import TodoListScreen from './screens/TodoListScreen';
import QuoteScreen from './screens/QuoteScreen';


const Tab = createBottomTabNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#3498db',   
          tabBarInactiveTintColor: 'gray', 
          tabBarStyle: { backgroundColor: 'white' }
        }}
      >
        <Tab.Screen 
          name="Diary" 
          component={HomeScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcon name="book" size={size} color={color} />
            ) 
          }}
        />
        <Tab.Screen 
          name="TodoList" 
          component={TodoListScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcon name="bars" size={size} color={color} />
            ) 
          }}
        />
        <Tab.Screen 
          name="Quote" 
          component={QuoteScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcon name="smileo" size={size} color={color} />
            ) 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;


