import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232f3e",
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    amazonLogoImg: {
        marginTop: -37,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
    },

    categoryText: {
        fontSize: 15,
        margin: 15,
        fontWeight: 700,
        color: "#fff",
    },

    movieImageThumbnail: {
        width: "100%",
        alignItems: "center",
    },
    contentList:{
        paddingLeft: 18,
        paddingTop: 10, 
    },
    movieText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "700",
        padding: 15,
    }
});
