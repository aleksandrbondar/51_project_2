import { createSlice } from "@reduxjs/toolkit";

export interface HeroStorageInterface {
  storage: string
  heroState: string
  data?: []
  imgUrl: string[]
  allImgLoadStatus: boolean
  heroHover: {
    [key: string]: {
      [key: string]: {
        [key: string]: string
      }
    }
  }
  [key: string]: string | boolean | object | [] | undefined | number | Error | null
}

const initialState: HeroStorageInterface = {
  storage: 'heroStateStorage',
  heroState: 'default',
  imgUrl: [
    '/src/assets/img/hero-1.jpg',
    '/src/assets/img/hero-2.jpg',
    '/src/assets/img/hero-3.jpg',
  ],
  allImgLoadStatus: false,
  heroHover: {
    default: {
      hero1: {
        clipPath: `polygon(0 0, 100% 0, 100% 50%, 0 100%, 0 100%)`,
      },
      hero2: {
        clipPath: `polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 50%)`,
      },
      hero3: {
        clipPath: `polygon(50% 0, 100% 100%, 100% 100%, 0 100%, 0 100%)`,
      },
    },
    hero1: {
      hero1: {
        clipPath: `polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)`,
      },
      hero2: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 100% 50%, 0 50%)',
      },
      hero3: {
        clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%, 50% 100%)',
      },
    },
    hero2: {
      hero1: {
        clipPath: `polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 100%)`,
      },
      hero2: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%)',
      },
      hero3: {
        clipPath: 'polygon(50% 0, 50% 100%, 100% 100%, 0 100%, 0 0)',
      },
    },
    hero3: {
      hero1: {
        clipPath: `polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 100%)`,
      },
      hero2: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 100% 50%, 0 50%)',

      },
      hero3: {
        clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 0)',
      },
    },
  }
};

export const heroSlice = createSlice({
  name: initialState.storage,
  initialState,
  reducers: {
    setHeroState(state, action) {
      state.heroState = action.payload
    },
    setImgLoadStatus(state, action) {
      state.allImgLoadStatus = action.payload
    }
  },
})

const { storage, imgUrl } = initialState
export const heroStorageOptions = { ...heroSlice.actions, storage, imgUrl }
export default heroSlice.reducer