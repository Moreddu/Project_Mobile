import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { Icon } from "expo";
import { DrawerActions } from "react-navigation";
import { MonoText } from "../components/StyledText";
import users from "../database/users.json";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Icon.Ionicons
          name="ios-menu"
          size={24}
          style={{ color: "#000", marginHorizontal: 10 }}
        />
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);
    console.log(users);
    this.state = { isLoading: true, users: users };
  }

  componentWillMount() {
    return fetch("https://5cddb863b22718001417ca62.mockapi.io/users")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          users: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
      <ImageBackground
          source={{ uri: "https://www.ispazio.net/wp-content/uploads/2013/06/iOS_7_Space_Wallpaper_iSpazio.png.jpg" }}
          style={styles.background}
        >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
        
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require("../assets/images/logo.png") 
                  : require("../assets/images/logo.png")
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Schermata home</Text>

            <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate("Utenti")
            }}>
            <Text style={styles.helpLinkText}>
              Elenco Utenti
            </Text>

            </TouchableOpacity> 
           

            {/*this.state.users.map((user, i) => (
              <View key={i} style={styles.helpContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Profilo", {
                      name: user.name,
                      surname: user.surname,
                      username: user.username,
                      city: user.city,
                      uri: user.uri
                    });
                  }}
                  style={styles.helpLink}
                >
                  <Text style={styles.helpLinkText}>
                    Clicca qui per vedere il profilo di {user.name}{" "}
                    {user.surname}
                  </Text>
                </TouchableOpacity>
              </View>
            ))*/} 
      
          </View>
          
        </ScrollView>
        </ImageBackground>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 25,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 22,
    color: "#2e78b7",
    textAlign: "center"
  },
  background: {
    paddingVertical: 30,
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center"
  },
});
