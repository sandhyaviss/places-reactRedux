import React from 'react';
import {Alert,View, Text,StyleSheet,TouchableHighlight,Image} from 'react-native';

const ListItem= (props) =>(
    <TouchableHighlight onPress={props.onItemPressed}>
      <View style={styles.listItem}>
       <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage}/>
       <Text>{props.placeName}</Text>
         </View>
         </TouchableHighlight>
    );

const styles= StyleSheet.create({
    listItem:{
        width: " 100%",
        marginBottom:5,
        borderColor: "black",
        padding :10,
        backgroundColor:"#eee",
        flexDirection:"row",
        alignItems:"center"
    },
    placeImage:{
        marginRight:8,
        height: 30,
        width:30,
        }
})
export default ListItem;