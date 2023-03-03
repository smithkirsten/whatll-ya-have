import { configureStore } from '@reduxjs/toolkit'
import browseReducer from '../components/Browse/BrowseSlice'
import { apiSlice  } from '../apicalls'

export default configureStore({
  reducer: {
    browse: browseReducer,
  },
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
})