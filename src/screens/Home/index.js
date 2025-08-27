import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

export const Home = () =>{
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={PrimeVideoLogo} style={styles.PrimeVideoLogo}></Image>
            <Image source={AmazonLogo} style={styles.AmazonLogoImg}></Image>
    </View>
    
    <View style = {styles.category}>
        <TouchableOpacity>
            <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
    </View>
    
    <View>
        <TouchableOpacity>
            <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity>
            <Text style={styles.categoryText}>Movie</Text>
        </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity>
            <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
    </View>

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "Black"
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center"
    },

    AmazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    categoryText: {
        fontSize: 14,
        fontWeight: 700,
        color: "#fff",
    },
});