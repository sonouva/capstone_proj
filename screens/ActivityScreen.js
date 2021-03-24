import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

const Stack = createStackNavigator();

function messagePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Hi</Text>
    </View>
  );
}

export default function ActivityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Activity" component={ActivityScreen} />
      <Stack.Screen name="messagePage" component={messagePage} />
    </Stack.Navigator>
  );
}

function ActivityScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CardItem style={styles.description}>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
            }}
          />
          <Body>
            <Text>Harry</Text>
            <Text note>A proud hustler</Text>
          </Body>
        </Left>
        <Right>
          <Button transparent style={styles.setting}>
            <TouchableOpacity
              onPress={() => navigation.navigate("messagePage")}
              title="messagePage"
            >
              <Icon active name="chatbubbles-outline" />
            </TouchableOpacity>
          </Button>
        </Right>
      </CardItem>
      <CardItem style={styles.description}>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            }}
          />
          <Body>
            <Text>Hannah</Text>
            <Text note>A silent thinker</Text>
          </Body>
        </Left>
        <Right>
          <Button transparent style={styles.setting}>
            <TouchableOpacity
              onPress={() => navigation.navigate("messagePage")}
              title="messagePage"
            >
              <Icon active name="chatbubbles-outline" />
            </TouchableOpacity>
          </Button>
        </Right>
      </CardItem>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    borderColor: "black",
    paddingTop: 50,
    paddingBottom: 50,
    textAlign: "center",
  },
  setting: {
    paddingRight: 10,
  },
  addButton: {
    marginBottom: 5,
  },
});
