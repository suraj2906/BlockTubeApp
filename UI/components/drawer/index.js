import ListItem from '@components/drawer/ListItem'
import Header from '@components/drawer/Header'

function CustomDrawerContent(props) {
    const width = useWindowDimensions().width * 0.3;
  
    return (
      <DrawerContentScrollView {...props}>
        <Header />
        <ListItem label="Home" />
      </DrawerContentScrollView>
    );
}

export default CustomDrawerContent; 