//renderimage for card view

import React, { Component, useState, setState } from "react";
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
      <InputGroup borderType='underline' >
                        <Icon name= 'search-circle-outline' style={{color:'#384850'}}/>
                        <Input placeholder='Search your listings' />
                    </InputGroup>
        <Content>
          <TouchableOpacity
            onPress={() => navigation.navigate("ExploreSecond")}
            title="Second Screen"
          >
            <Card>
              <CardItem>
                <Left>

                  <Body>
                    <Text>Listing Title</Text>
                    <Text note>Listing Description</Text>
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
  const [listingTitle, setListingTitle] = useState("");
  const [listingDes, setListingDes] = useState("");

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
        <Button info style={styles.addButton} onPress={() => navigation.navigate("Profile")}>
          <Text> List Service</Text>
        </Button>
      </Right>
    </Container>
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
