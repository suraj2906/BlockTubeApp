import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import Logo from "../../../assets/pictures/BlockTubeLogo-small.svg"
import SearchIcon from "../../../assets/logo/search.svg"

const Search = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.left}>
                <Logo />
                <Text style={styles.logotext}>BlockTube</Text>
            </Pressable>
            <View style={styles.right}>
                <SearchIcon />
                <Image source={require("../../../assets/pictures/profile.png")} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 13,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#3d3d3d",
        width: "96%",
        height: 65,
        backgroundColor: "#1b1b1b"
    },
    left: {
        flexDirection: "row",
        alignItems: "center"
    },
    right: {
        flexDirection: "row",
        alignItems: "center"
    },
    logotext: {
        fontFamily: "Kanit-Bold",
        fontSize: 24,
        color: "#c2c2c2",
        paddingLeft: 6
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        border: 1,
        borderColor: "#535353",
        marginLeft: 15
    }
})


export default Search;