const ListItem = (props) => {
    return(

        <DrawerItem 
        style={{width: "90%", height: 47, paddingLeft: 10, backgroundColor: "#515151", borderRadius: 10, borderWidth: 1, borderColor: "#616161", marginBottom: 2}} 
        label="Home"
        labelStyle={{color: "#c3c3c3", fontFamily:"Kanit-Regular", left: -25, marginTop: 1}}
        icon={()=><MaterialCommunityIcons name="home" color="#d6d6d6" size={23}/>}
      >

      </DrawerItem>
          );
}