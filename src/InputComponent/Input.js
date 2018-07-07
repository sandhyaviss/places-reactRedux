import React,{Component} from 'react';
import { View,TextInput,Button,StyleSheet} from 'react-native';

class InputComponent extends Component {
    state = {
       placeName: ""
      };
 
      placeNameChangedHandler=(val)=>{
             this.setState({placeName:val});
         };

         placeSubmitHandler = () => {
            if (this.state.placeName.trim() === "") {
              return;
            }
           this.props.onPlaceAdded(this.state.placeName);
          };

    render(){

        return (
            <View style={ styles.inputContainer}>
            <TextInput style={ styles.placeInput}
    value={this.state.placeName}
    onChangeText= {this.placeNameChangedHandler}
    placeholder= "An awesome place" 
      style={styles.placeInput}>
</TextInput>
<Button style={ styles.placeButton}
 title="Add"
 onPress={this.placeSubmitHandler}></Button>
</View>
        );
    }
}


const styles = StyleSheet.create({
    inputContainer:{
        alignItems:"center",
        width: " 100%",
        flexDirection:"column",
        justifyContent: "space-between"
       },
       placeInput:{
        width:"70%"
      },
      placeButton:{
        width:"30%"
      },
});
export default InputComponent;