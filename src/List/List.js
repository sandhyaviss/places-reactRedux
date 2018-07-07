import React from 'react';
import { Alert,FlatList,StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const List =(props) => {
         return ( 
          <FlatList style= {styles.listContainer} 
           data={props.place}
           renderItem={ (info)=>(
            <ListItem key={info.item.key} placeName={info.item.name} 
             placeImage={info.item.image}
            onItemPressed={()=> props.onItemSelected(info.item.key)} />
           )}
          />
       )};

    const styles= StyleSheet.create({
        listContainer: {
            width: "100%"
        }
    });
export default List ;