
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";

function ActivityScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Activities come here</Text>
      </View>
    ); 
  }

  const Stack = createStackNavigator();

  export default function ActivityStack(){
    return (
      <Stack.Navigator>
        <Stack.Screen name = "Activity" component = {ActivityScreen} />
      </Stack.Navigator>
    );
  }