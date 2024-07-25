import{ configureStore }  from "@reduxjs/toolkit";
import drawerReducer from "./slices/drawerSlice";




const store = configureStore({
    reducer:{
       drawerReducer : drawerReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})


export default store;