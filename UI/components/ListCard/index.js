import { Image, StyleSheet, View, Text } from 'react-native'
import ChevronRight from "../../../assets/logo/chevron_right.svg"

const ListCard = () => {
    return (
        <View style={styles.box}>
            <View style={styles.left}>
                <Image source={require("../../../assets/pictures/pic.png")} style={styles.image} />
                <View style={styles.detail}>
                    <Text style={styles.channelname}>Channel Name</Text>
                    <Text style={styles.subscriptions}>14.7 M</Text>
                    <Text style={styles.activitytitle}>Last Uploaded: 
                        <Text style={styles.activity}>{" "}2 days ago</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.right}>
                <View style={styles.button}>
                    <ChevronRight />
                </View>
            </View>
        </View>
    );
}

export default ListCard;


const styles = StyleSheet.create({
    box: {
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width: "96%",
        height: 90,
        backgroundColor: "#282828",
        borderRadius: 20
    },
    left: {
        display: "flex",
        flexDirection: "row"
    },
    detail: {
        paddingLeft: 10
    },
    image: {
        borderRadius: 200,
        width: 60,
        height: 60
    },
    channelname: {
        fontFamily: "Kanit-Bold",
        color: "white",
        fontSize: 16
    },
    subscriptions: {
        fontFamily: "Kanit-SemiBold",
        color: "#9a9a9a",
        fontSize: 12
    },
    activitytitle: {
        fontFamily: "Kanit-SemiBold",
        color: "#9a9a9a",
        // backgroundColor: "red",
        fontSize: 12
    },
    activity: {
        fontFamily: "Kanit-Regular",
        color: "#9a9a9a",
        fontSize: 12
    },
    icon: {
        width: 15,
        height: 15
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 38,
        height: 38,
        backgroundColor: "#404040",
        borderRadius: 19
    }
})
