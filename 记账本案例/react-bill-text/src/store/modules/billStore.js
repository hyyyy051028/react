import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

const { setBillList } = billStore.actions;

// 异步 action：获取账单列表
const getBillList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:8888/ka');
      dispatch(setBillList(res.data));
    } catch (error) {
      console.error('Failed to fetch bill list:', error);
    }
  };
};

export { getBillList };
const reducer = billStore.reducer;
export default reducer;
