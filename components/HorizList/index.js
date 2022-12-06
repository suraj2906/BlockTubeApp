import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Slides from '../../assets/data/slides';
import OnBoardingItem from '../HorizListItem';

const index = () => {
  return (
    <View style = {styles.container}>
      <FlatList data={Slides} renderItem={({item}) => <OnBoardingItem item = {item}/>}
      horizontal
      bounces={false}
      pagingEnabled/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        height: "50%",
        alignItems: "flex-start"
    }
})