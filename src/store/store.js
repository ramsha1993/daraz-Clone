import { configureStore } from "@reduxjs/toolkit";
import searchvalue from './search'

const store= configureStore({
    reducer:{search:searchvalue
   
        
    }
});

export default store;