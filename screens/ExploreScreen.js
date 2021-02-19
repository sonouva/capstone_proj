//for card, under touchableOpacity use key = {item.id}
//for image to interact with database, add require() - pcmob2, pg178
//use map to add items - pcmob2, pg184

import React, { Component, useState } from "react";
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
} from "native-base";

function ExploreScreen({ navigation }) {
  return (
    <ScrollView>
      <Container>
        <Item rounded style={styles.search}>
          <Input placeholder="Search" />
        </Item>
        <Content>
          <TouchableOpacity
            onPress={() => navigation.navigate("ExploreSecond")}
            title="Second Screen"
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
                    <Text note>Admin Description</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      "https://www.mof.gov.sg/images/default-source/default-album/spor2020_c.jpg?sfvrsn=3707a67e_1",
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
                      <Text>15 LIKES</Text>
                    </TouchableOpacity>
                  </Button>
                </Left>
                <Body>
                  <Button transparent title="Comment Screen">
                    <Icon active name="chatbubbles" />
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ExploreComments")}
                    >
                      <Text>8 COMMENTS</Text>
                    </TouchableOpacity>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Content>
      </Container>
    </ScrollView>
  );
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

export default function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="ExploreSecond" component={ExploreSecondScreen} />
      <Stack.Screen name="ExploreLikes" component={ExploreLikeScreen} />
      <Stack.Screen name="ExploreComments" component={ExploreCommentScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "lightgrey",
  },
  box: {},
});
