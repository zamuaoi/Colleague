import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSingleUser } from "../store/usersReducer";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem, Avatar } from "react-native-elements";
import SearchBar from "../components/SearchBar/searchBar";

export default function Home(props) {
  const dispatch = useDispatch();
  const usersByTitle = useSelector((state) => state.usersByTitle);
  const inputValue = useSelector((state) => state.searchValue);
  
  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.header}>
        <View>
          <Image
            source={{
              uri: `https://secure.meetupstatic.com/photos/event/6/e/2/5/clean_488248197.jpeg`,
            }}
            style={styles.img}
          />
          <Text style={styles.text}>Where Is My Colleague?</Text>
        </View>
      </View>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <View style={styles.users}>
        {inputValue.length > 2 ? (
          usersByTitle.length > 0 && inputValue.length > 2 ? (
            usersByTitle.map((user) => (
              <ListItem bottomDivider key={user.id}>
                <Avatar
                  rounded
                  source={{
                    uri: `${user.avatar}`,
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title
                    onPress={() => {
                      dispatch(setSingleUser(user.id))
                      props.navigation.navigate("UserDetails")
                    }}
                  >
                    {user.firstName}
                  </ListItem.Title>
                  <ListItem.Subtitle>{user.lastName}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          ) : (
            <ListItem bottomDivider>
              <Text>"No hay match"</Text>
            </ListItem>
          )
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  img: {
    resizeMode: "contain",
    width: 160,
    height: 100,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  search: {
    marginTop: 30,
  },
  users: {
    marginTop: 10,
    backgroundColor: "yellowgreen",
  },
  text: {
    fontWeight: "bold",
  },
});
