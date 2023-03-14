import { createSlice } from '@reduxjs/toolkit';
import langPack from '../../components/languages';

const initialState = { langPack: langPack.english };

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLangPack: (state, { payload }) => {
      if (payload === 'DE') {
        return { ...state, langPack: langPack.german };
      }
      return { ...state, langPack: langPack.english };
    },
  },
});

export const { setLangPack } = languageSlice.actions;
export default languageSlice.reducer;
