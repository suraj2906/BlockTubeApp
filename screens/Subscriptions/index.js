import ListCard from '@components/ListCard';
import { StyleSheet, View } from 'react-native'
import Search from 'UI/core/Search';

const Subscription = ()=>{
    return (
        <View style={styles.container}>
            <Search />
            <ListCard />
        </View>
    );
}

export default Subscription;

const styles = StyleSheet.create({
    container: {
        display:"flex",
        minHeight: "100%",
        width:"100%",
        backgroundColor: "#0c0c0c"
    }
})