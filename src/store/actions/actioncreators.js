import {ADD_PLACE,SELECT_PLACE,DELETE_PLACE,DESELECT_PLACE} from './actionType';

//action should return action type to reducers along paramaters
export const addPlace=( placeName) =>{
    return {
       type: ADD_PLACE,
       placeName: placeName
    }
}
export const deletePlace=() =>{
    return {
       type:DELETE_PLACE
         }
}

export const selectPlace=(key) =>{
    return {
       type:SELECT_PLACE,
        placekey:key 
    }
}

export const deselectPlace=()=>{
    return {
        type:DESELECT_PLACE
    }
}