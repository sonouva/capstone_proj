import React, { Component, useState, setState, useEffect } from "react";
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
  Label,
  InputGroup,
  List,
  ListItem,
  CheckBox,
  Textarea,
} from "native-base";
import { TouchableOpacityBase } from "react-native";
import firebase from "../database/firebaseDB";
import { render } from "react-dom";

const Stack = createStackNavigator();

export default function ProfileStack() {
  const db = firebase.firestore().collection("listings");
  const [listingData, setListingData] = useState([]);

  function ListingSecond({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        {renderListingSecond(listingData)}
      </View>
    );
  }

  const renderListingSecond = (array, navigation) =>
    array.map(({ description, title, image, likes, reviews, id }) => {
      return (
        <View>
          <Text>{title}</Text>
        </View>
      );
    });

  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AddService" component={AddService} />
      <Stack.Screen name="ListingSecond" component={ListingSecond} />
    </Stack.Navigator>
  );

  function deleteListing() {
    console.log("Deleting" + id);
    db.doc(id).delete();
  }

  function ProfileScreen({ navigation }) {
    return (
      <ScrollView>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              }}
            />
            <Body>
              <Text>Kevin</Text>
              <Text note>Programmer</Text>
              <Text note>Looking to date</Text>
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
        <Button
          block
          info
          style={styles.addButton}
          onPress={() => navigation.navigate("AddService")}
          title="Add Service"
        >
          <Text>Edit Profile</Text>
        </Button>
      </ScrollView>
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
    const [listingTitle, setListingTitle] = useState("");
    const [listingImage, setListingImage] = useState("");
    const [listingDes, setListingDes] = useState("");

    useEffect(() => {}, [listingTitle, listingDes]);

    //put the codes below as a function then use useeffect
    function addListing() {
      console.log(`adding${listingTitle}`);
      firebase.firestore().collection("listings").add({
        text: listingTitle,
        description: listingDes,
        image: listingImage,
        hearts: 0,
      });
      navigation.navigate("Profile");
    }

    return (
      <Container>
        <Content>
          <Form>
            <Label>Name</Label>
            <InputGroup borderType="regular">
              <Input
                placeholder="Enter title"
                value={listingTitle}
                onChangeText={(input) => setListingTitle(input)}
              />
            </InputGroup>
            <Label>Image URL</Label>
            <InputGroup borderType="regular">
              <Input
                placeholder="Enter image URL"
                value={listingImage}
                onChangeText={(input) => setListingImage(input)}
              />
            </InputGroup>
            <Label>Describe Yourself</Label>

            <Textarea
              rowSpan={5}
              bordered
              placeholder="Enter Description"
              value={listingDes}
              onChangeText={(input) => setListingDes(input)}
            />
          </Form>
        </Content>
        <Right>
          <Button info style={styles.addButton} onPress={addListing}>
            <Text> Upload Profile</Text>
          </Button>
        </Right>
      </Container>
    );
  }
  //for button add onpress function firebase create
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
