import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE} from '../actions/actionType';

const  initialState={
     places:[],
     selectedPlace:null
 }

const reducer= (state=initialState , action) =>{
      switch(action.type){
          case  'ADD_PLACE':
          return {
              ...state,
          places: state.places.concat({
                    key:`${Math.random()}` ,
                    name:action.placeName,
                    image: {
                        uri:"https://picsum.photos/200/300"
                      }
                  })
                }; 
          case 'DELETE_PLACE':
          return{
              ...state,
             places: state.places.filter((info)=>{ 
                     return info.key !== state.selectedPlace.key
                  }),
                  selectedPlace:null
         };

          case 'SELECT_PLACE':
          return{
              ...state,
              selectedPlace: state.places.find((place)=>{
                   return  place.key === action.placekey;
              })
          };

          case 'DESELECT_PLACE' :
          return {
              ...state,
              selectedPlace:null
          }

          default:
             return state;
      }
}
export default reducer;