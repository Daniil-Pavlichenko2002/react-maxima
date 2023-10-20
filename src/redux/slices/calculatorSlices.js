import { createSlice } from '@reduxjs/toolkit'
import house from '../../images/Main/House.png'
import bath from '../../images/Main/Bath.png'
import ironFence from '../../images/Main/железный забор.jpg'
import woodenFence from '../../images/Main/деревянный забор.jpg'
import toilet from '../../images/Main/Унитаз .jpg'
import onTheStreet from '../../images/Main/туалет на улице.jpg'
import plasticWindows from '../../images/Main/пластиковые окна.jpg'
import carvedWindows from '../../images/Main/резные окна.jpg'
import expensive from '../../images/Main/дорой ремонт.jpg'
import simple from '../../images/Main/простой ремон.jpg'

export const slide = [
    {
        title: 'Что будем строить?',
        image: [house, bath],
        price1: 1300000,
        price2: 800000,
        name: ['Дом', 'Баня']
    },
    {
        title: 'Забор',
        image: [ironFence, woodenFence],
        price1: 50000,
        price2: 30000,
        name: ['Железный', 'Деревянный']
    },
    {
        title: 'Туалет',
        image: [toilet, onTheStreet],
        price1: 40000,
        price2: 15000,
        name: ['Дома', 'На улице']
    },
    {
        title: 'Остекленение',
        image: [plasticWindows, carvedWindows],
        price1: 20000,
        price2: 10000,
        name: ['Пластиковые окна', 'Резные окна']
    },
    {
        title: 'Ремонт',
        image: [expensive, simple],
        price1: 200000,
        price2: 100000,
        name: ['Дорогой', 'Простой']
    },
]
    
// вывести в prices в отдельную переменную
const initialState = {
    index: 0,
    prices: [],
    check1: false,
    check2: false,
    totalPrices: 0
  }

export const counterSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    plusSlide: (state) => {
        state.check1 = false;
        state.check2 = false;
        if (state.index !== slide.length - 1) {
            state.index += 1
        }
    },
    minusSlide: (state) => {
        state.prices.pop()
        // state.check1 = false;
        // state.check2 = false; 
        // console.log(state.prices.length === slide.length - 1)
        if (state.prices.length === slide.length - 1) {
            // console.log('prices: ', state.prices.length, 'slide: ', slide.length - 1 )
            state.index = state.prices.length
            return
        }
        if (state.index > 0) {
            state.index -= 1
        }
        
    },
    setCheck1: (state) => {
        if (state.prices.length - 1 === state.index) {
            state.prices.pop() 
        }
        state.check1 = true;
        state.check2 = false;
        // state.prices = [...state.prices, action.payload]
    },
    setCheck2: (state) => {
        if (state.prices.length - 1 === state.index) {
            state.prices.pop() 
        }
        state.check1 = false;
        state.check2 = true;
        // state.prices  = [...state.prices, action.payload]
    },
    setPrice1: (state, action) => {
        // if (state.prices.length - 1 === state.index) {
        //     state.prices.pop() 
        // }
        // state.check1 = true;
        // state.check2 = false;
        state.prices = [...state.prices, action.payload]
    },
    setPrice2: (state, action) => {
        // if (state.prices.length - 1 === state.index) {
        //     state.prices.pop() 
        // }
        // state.check1 = false;
        // state.check2 = true;
        state.prices  = [...state.prices, action.payload]
    },
    setFinalChecks: (state) => {
        state.totalPrices = state.prices.reduce((sum, num) => sum + num)
        console.log(state.totalPrices)
    },
  },
})

export const { plusSlide, minusSlide, setCheck1, setCheck2, setFinalChecks, setPrice1, setPrice2 } = counterSlice.actions

export const selectCalculator = (state) => state.calculator;

export default counterSlice.reducer