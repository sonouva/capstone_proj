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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Second Listing Screen</Text>
      </View>
    );
  }

  useEffect(() => {
    const unsubscribe = db.orderBy("title").onSnapshot((listings) => {
      const updatedListings = listings.docs.map((doc) => {
        // create our own object that pulls the ID into a property
        const listingObject = {
          ...doc.data(),
          id: doc.id,
        };
        return listingObject;
      });
      setListingData(updatedListings);
    });
    return unsubscribe; // return the cleanup function
  }, []);

  const renderListing = (array) =>
    array.map(({ description, title, image, likes, reviews, id }) => {
      return (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListingSecond")}
            title="ListingSecond"
          >
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{title}</Text>
                    <Text note>{description}</Text>
                  </Body>
                </Left>
                <Right>
                  <Button transparent style={styles.setting}>
                    <TouchableOpacity onPress={() => deleteListing(id)}>
                      <Icon active name="trash-outline" />
                    </TouchableOpacity>
                  </Button>
                </Right>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: image,
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem style={styles.box}>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ExploreLikes")}
                      title="Like Screen"
                    >
                      <Text>{likes} LIKES</Text>
                    </TouchableOpacity>
                  </Button>
                </Left>
                <Body>
                  <Button transparent title="Comment Screen">
                    <Icon active name="chatbubbles" />
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ExploreComments")}
                    >
                      <Text>{reviews} REVIEWS</Text>
                    </TouchableOpacity>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
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

    // firebase
    //   .firestore()
    //   .collection("listings")
    //   .where("id", "=", id)
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => doc.ref.delete());
    //   });
  }

  function ProfileScreen({ navigation }) {
    return (
      <ScrollView>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
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
          <InputGroup borderType="underline">
            <Icon name="search-circle-outline" style={{ color: "#384850" }} />
            <Input placeholder="Search your listings" />
          </InputGroup>
          <Content>
            <View>{renderListing(listingData)}</View>
          </Content>
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
        title: listingTitle,
        description: listingDes,
      });
      navigation.navigate("Profile");
    }

    return (
      <Container>
        <Content>
          <Form>
            <Label>Service Title</Label>
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
            <Label>Description</Label>

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
            <Text> List Service</Text>
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
