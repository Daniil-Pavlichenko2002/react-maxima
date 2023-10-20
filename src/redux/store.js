// import { configureStore } from "@reduxjs/toolkit";
import calculator from "./slices/calculatorSlices";
import personalArea from "./slices/personalAreaSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        calculator,
        personalArea,
    },
  })

