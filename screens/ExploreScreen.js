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
  DeckSwiper,
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
  const db = firebase.firestore().collection("people");
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    const unsubscribe = db.orderBy("text").onSnapshot((people) => {
      const updatedData = people.docs.map((doc) => {
        // create our own object that pulls the ID into a property
        const listingObject = {
          ...doc.data(),
          id: doc.id,
        };
        return listingObject;
      });
      setPeopleData(updatedData);
    });
    return unsubscribe; // return the cleanup function
  }, []);

  const renderItem = (array, navigation) =>
    array.map(({ hearts, image, text, id }) => {
      const cards = [
        {
          text: { hearts },
          name: { text },
          image: { image },
        },
      ];
    });
  class DeckSwiperExample extends Component {
    render() {
      return (
        <Container>
          <Header />
          <View>
            <DeckSwiper
              dataSource={cards}
              renderItem={(item) => (
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={item.image} />
                      <Body>
                        <Text>{item.text}</Text>
                        <Text note>NativeBase</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      style={{ height: 300, flex: 1 }}
                      source={item.image}
                    />
                  </CardItem>
                  <CardItem>
                    <Icon name="heart" style={{ color: "#ED4A6A" }} />
                    <Text>{item.name}</Text>
                  </CardItem>
                </Card>
              )}
            />
          </View>
        </Container>
      );
    }
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Expore" component={ExploreScreen} />
    </Stack.Navigator>
  );
  function ExploreScreen({ navigation }) {
    return (
      <Container>
        <Content>
          <View>{renderItem(peopleData, navigation)}</View>
        </Content>
      </Container>
    );
  }
}

const Stack = createStackNavigator();
