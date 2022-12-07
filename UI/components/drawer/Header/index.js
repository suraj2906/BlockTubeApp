import { View, Text } from 'react-native'
import BlockTubeLogo from '../../../../assets/pictures/BlockTubeLogo.svg'

const Header = () => {
    return (
        <View style={{ marginTop: 25, marginLeft: 10, marginBottom: 31, flex: 1, flexDirection: "row", alignItems: "center" }}>
            <BlockTubeLogo width={34} height={30} />
            <Text style={{ fontFamily: "Kanit-SemiBold", fontSize: 32, color: "#f4f4f4", marginLeft: 10 }}>BLOCKTUBE</Text>
        </View>
    );
}

export default Header;