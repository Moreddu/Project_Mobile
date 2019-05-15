import React from "react";
import{
    Scrollview,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Platform,
    Image
} from "react-native";


export default class ReusableScreen extends React.Component { //devo allocare component
    //costruttore nuovo
    constructor(props) {//passo i props, dei paramentri, prima alla superclasse poi posso anche tenerne e usarne se voglio
        super(props);
        console.log("Constcruct");
        this.state= {username: "Gianni"}; //qui ci prepariamo lo state, ovvero le variabili
    }

    //Attenzione è deprecato (usare constructor)
    //Vecchio costruttore di react molte colte si trova non si usa più, ma si usa quello di sopra
    //come il constructor ma non viene piu usato, si usa quello sopra   
    componentWillMount(){
        console.log("WillMount");
        this.setState({username : "Giovanni"});
    }
    render(){ //trasforma elementi in grafica, bisogna avere elemento view. è il metodo che aggiorna la grafica
        console.log("Render " + this.state.username);
        return (
            <View style={styles.reusable}>
                <Text>{this.state.username}</Text>
                <Image
                    style= {styles.image}
                    source={{
                        uri:
                        "https://images2.corriereobjects.it/methode_image/2019/04/09/Spettacoli/Foto%20Spettacoli/Alberto-Angela4.jpg?v=201904100848"
                    }}
                    />
            </View>

        );
    }
    // dopo il render viene fatto una volta sola il didMount, quando chiamiamo questo rilancia il render
    componentDidMount(){
        console.log("DidMount");
        this.setState({ username : "Alberto"});
    }
    //viene chiamato ogni volta che lo stato viene aggiornato. Quando chiamiamo lo state viene aggiornato
    omponentDidUpdate(){
        console.log("DidUpdate");
        this.setState({ username : "Mario"});
    }
    //Smonta il componente liberando memoria
    componentWillUnmount(){ //smontaggio, una volta sola, memoria pulita e il componente non esiste piu
        console.log("WillUnmount");
    }

}
//Stile tipo css per la view.
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FF0"
    },

    reusable: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingHorizontal: 30
    },

    image:{width: "100%", height: 250, resizeMode: "cover"}
});

/*
import React from "react";
import{
    Scrollview,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Platform,
    Image
} from "react-native";


export default class ReusableScreen extends React.Component { //devo allocare component

    //viene fatto una sola volta
    constructor(props) { 
        super(props);
        console.log("Constcruct"); 
        this.state= {username: "Gianni"}; 
    }

componentWillMount(){ //viene fatto una sola volta, crea lo stato
    console.log("WillMount");
    this.setState({ username: "Giovanni"});
}

render(){   
    console.log("Render " + this.state.username);
    return(
        <View style={styles.reusable}>
            <Text>{this.state.username}</Text>
            <Image
            style={styles.image}
            source={{
                uri: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiXqpH3pJ3iAhVCCuwKHbNICr0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.mammamarsupio.eu%2Fnovita-sulla-prova-supporti%2F&psig=AOvVaw2a9aQIWTB8TYSfhlbmAGGu&ust=1558001201864629"

            }}
            />
        </View>
    )
}

componentDidMount(){
    console.log("DidMount");
    this.setState({username: "Alberto"});
}
componentDidUpdate(){ 
    console.log("DidUpdate");
    this.setState({username: "Mario"});
}
componentWillUnmount(){ 
    console.log("WillUnmount");
}
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF0"
    },
    reusable:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column",
        paddingHorizontal:30    
    },
    image: {width: "100%", height:250, resizeMode:"cover"}
});
*/