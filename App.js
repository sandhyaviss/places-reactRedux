import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputComponent from "./src/InputComponent/Input";
import List from  './src/List/List';
import PlaceModal from './src/Modal/ModalPlace';
import { addPlace,deletePlace,selectPlace,deselectPlace } from './src/store/actions/index';
import { connect } from 'react-redux';

 class App extends React.Component  {
    
  placeAddedHandler = placeName => {
      this.props.onAddPlace(placeName);
    };

    deleteHandler=()=>{
      this.props.onDeletePlace();
}
onSelected=(key)=>{
  this.props.onSelectPlace(key);
  console.log('onselecthandler' +this.props.onSelectPlace(key));
}

closeModelHandler=()=>{
  this.props.onDeselectPlace();
}
  render() {
    return (
      <View style={styles.container}>
      <InputComponent 
      onPlaceAdded={this.placeAddedHandler} />

      <List place={this.props.place} onItemSelected={this.onSelected} />

      <PlaceModal selectedPlace={this.props.selectedPlace} 
         onDelete={this.deleteHandler}
         closeModal={this.closeModelHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
   }
});
//connect pass the state in to this function
const mapStateToProps=(state)=>{
 return{ place:state.places.places,
  selectedPlace:state.places.selectedPlace
};
}
//dispatch argument will pass the argument dispatch to this function
const mapDispatchToProps=(dispatch)=>{
  return{
    onAddPlace: (name)=>dispatch(addPlace(name)),
    onSelectPlace:(key)=> dispatch(selectPlace(key)),
    onDeletePlace:()=>dispatch(deletePlace()),
  onDeselectPlace:()=>dispatch(deselectPlace())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);