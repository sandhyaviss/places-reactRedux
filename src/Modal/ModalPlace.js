import React from 'react';
import {Alert, Modal,Text,View,Button,Image,StyleSheet} from 'react-native';

const PlaceModal =(props)=>{
  
    let modalContent= null;
    
    if(props.selectedPlace){
        console.log('ModalPLace' + props.selectedPlace);
             modalContent=(
          <View>
        <Image style={styles.imageStyle} source={props.selectedPlace.image}/>
        <Text style={styles.text}> {props.selectedPlace.name} </Text>
        </View>
         );
}
      
    return(    <Modal animationType="slide" 
                      onRequestClose={props.closeModal}
           visible={props.selectedPlace!==null} >
        <View style={styles.modalContainer}>
                 {modalContent} 
             <View >
                 
              <Button title="Clear" color="red" onPress={props.onDelete}></Button>
              <Button title="Close" onPress={props.closeModal}></Button>
          
              </View>
         </View>
       </Modal>);
    
}

const styles= StyleSheet.create({
    modalContainer:{
        alignContent: 'center',
        marginTop:8,
        marginLeft:10,
        marginRight:10,
        borderWidth:2,
        borderColor: 'black',
        width:200
    },
    imageStyle:{
        height:200,
        width: 200
    },
    text:{
        fontSize:23,
        fontWeight:'bold'
    }

})

export default PlaceModal;