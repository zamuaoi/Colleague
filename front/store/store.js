import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { usersByTitleReducer, setUsersReducer, setSingleUserReducer } from "./usersReducer";
import { searchValueReducer } from "./searchbar/searchValue";
import empresasReducer from "./empresasReducer";

const store = configureStore({
/*   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), */
  reducer: {
    //Aca irian los reducer de cada estado que necesitemos
    usersByTitle: usersByTitleReducer,
    empresas: empresasReducer,
    searchValue: searchValueReducer,
    singleUser: setSingleUserReducer
  },
});

export default store;
