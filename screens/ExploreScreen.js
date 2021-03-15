//for card, under touchableOpacity use key = {item.id}
//for image to interact with database, add require() - pcmob2, pg178
//use map to add items - pcmob2, pg184
import React, { Component, useEffect, useState } from "react";
import { Font } from "expo";
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
  Input,
  Item,
  InputGroup,
} from "native-base";
import firebase from "../database/firebaseDB";
import { render } from "react-dom";

export default function ExploreStack() {
  const db = firebase.firestore().collection("listings");
  const [listingData, setListingData] = useState([]);

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
                <Body>
                  <Text>{title}</Text>
                  <Text note>{description}</Text>
                </Body>
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
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="ExploreSecond" component={ExploreSecondScreen} />
      <Stack.Screen name="ExploreLikes" component={ExploreLikeScreen} />
      <Stack.Screen name="ExploreComments" component={ExploreCommentScreen} />
    </Stack.Navigator>
  );

  function ExploreScreen({ navigation }) {
    return (
      <Container>
        <Content>
          <InputGroup borderType="underline">
            <Icon name="search-circle-outline" style={{ color: "#384850" }} />
            <Input placeholder="Search" />
          </InputGroup>
          <View>{renderListing(listingData)}</View>
        </Content>
      </Container>
    );
  }
}

const Stack = createStackNavigator();

function ExploreSecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Second Screen!</Text>
    </View>
  );
}

function ExploreLikeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Like Screen!</Text>
    </View>
  );
}

function ExploreCommentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Comment Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "lightgrey",
  },
  box: {},
});
