import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
  Image,
  ImageBackground
} from "react-native";

export default class ReusableScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Profilo"
  });

  constructor(props) {
    super(props);
    console.log(props);
    console.log("Construct");

    if (props.navigation.state.params !== undefined) {
      this.state = {
        name: props.navigation.state.params.name,
        surname: props.navigation.state.params.surname,
        username: props.navigation.state.params.username,
        city: props.navigation.state.params.city,
        uri: props.navigation.state.params.uri
      };
    } else {
      this.state = {
        name: "Gianni",
        surname: "Casu",
        username: "GianniC94",
        city: "Cagliari",
        uri: "https://www.brighthope.org/wp-content/uploads/2018/09/goat.jpg"
      };
    }
  }

  //ATTENZIONE, è deprecato (usare constructor)
  componentWillMount() {
    console.log("WillMount");
  }
  render() {
    console.log("Render " + this.state.username);
    return (
      <View style={styles.reusable}>
        <ImageBackground
          source={{ uri: "https://www.ispazio.net/wp-content/uploads/2013/06/iOS_7_Space_Wallpaper_iSpazio.png.jpg" }}
          style={styles.background}
        >
          <Image
            style={styles.image}
            source={{
              uri: this.state.uri
            }}
          />

          <Text style={styles.title}>
            {this.state.name} {this.state.surname}
          </Text>
          <Text style={styles.subtitle}>{this.state.username}</Text>
          <Text style={styles.city}>{this.state.city}</Text>
        </ImageBackground>
      </View>
    );
  }
  componentDidMount() {
    console.log("DidMount");
  }
  componentDidUpdate() {
    console.log("DidUpdate");
  }

  componentWillUnmount() {
    console.log("WillUnmount");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    paddingVertical: 30,
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center"
  },
  title: { fontSize: 30, color: "#eee" },
  subtitle: { fontSize: 22, color: "#f0f" },
  city: { fontSize: 18, color: "#eee" },
  image: { width: 160, height: 160, resizeMode: "cover", borderRadius: 80 },
  
reusable:{
    flex: 1    
}
});
