// {
//    type:'ADD_MOVIES';
// }
// {
//    type:'DECREASE_COUNT'
// }


//action types

export const  ADD_MOVIES = 'ADD_MOVIES';
export const  ADD_FAVOURITE = 'ADD_FAVOURITE';
export const  REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const  SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';

//action creators
export function addMovies(movies,id){
   return{
      type:ADD_MOVIES,
      movies,
      id
   }
}

export function addFavourite (movie,id){
   return{
      type:ADD_FAVOURITE,
      movie,
   
   }
}


export function removeFromFavourite (movie,id){
   return{
      type:REMOVE_FROM_FAVOURITE,
      movie,
   
   }
}

export function setShowFavourite(val){
   return{
      type:SET_SHOW_FAVOURITE,
      val
   }
}