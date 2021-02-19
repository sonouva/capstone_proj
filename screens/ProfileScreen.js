import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
  Accordion,
  Form,
  Input,
  Item,
} from "native-base";
import { TouchableOpacityBase } from "react-native";

function ProfileScreen({ navigation }) {
  return (
    <ScrollView>
      <Image
        source={{
          uri:
            "https://www.mof.gov.sg/images/default-source/default-album/spor2020_c.jpg?sfvrsn=3707a67e_1",
        }}
        style={{ height: 150, width: null, flex: 1 }}
      />
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://e7.pngegg.com/pngimages/93/292/png-clipart-social-media-marketing-logo-blog-advertising-instagram-instagram-logo-rectangle-social-media-thumbnail.png",
            }}
          />
          <Body>
            <Text>Admin</Text>
            <Text note>Admin Profile</Text>
          </Body>
        </Left>
        <Right>
          <Button transparent style={styles.setting}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Settings")}
              title="Settings"
            >
              <Icon active name="settings-outline" />
            </TouchableOpacity>
          </Button>
        </Right>
      </CardItem>
      <Container>
        <Text style={styles.description}>Work in Progress!</Text>
      </Container>
      <Button
        block
        info
        style={styles.addButton}
        onPress={() => navigation.navigate("AddService")}
        title="Add Service"
      >
        <Text>Add Service</Text>
      </Button>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AddService" component={AddService} />
    </Stack.Navigator>
  );
}

function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Settings!</Text>
    </View>
  );
}

function AddService({ navigation }) {
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Input placeholder="Title" />
          </Item>
          <Item>
            <Input placeholder="Description" />
          </Item>
        </Form>
      </Content>
      <Right>
      <Button info style = {styles.addButton}>
        <Text> List Service</Text>
        </Button>
        </Right>
    </Container>
    
  );
}

const styles = StyleSheet.create({
  description: {
    borderColor: "black",
    paddingTop: 200,
    paddingBottom: 200,
    textAlign: "center",
  },
  setting: {
    paddingRight: 10,
  },
  addButton: {
    marginBottom: 20,
  },
});
