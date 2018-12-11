import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';
export const searchFocus=()=>({
   type:constants.SEARCH__FOCUS
});
export const searchBlur=()=>({
   type:constants.SEARCH__BLUR
});
const changeList=(data)=>({
    type:constants.CHANGE__LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const mouseEnter=()=>({
    type:constants.MOUSE__ENTER
});
export const mouseLeave=()=>({
    type:constants.MOUSE__LEAVE
});
export const changePage=(page)=>({
    type:constants.CHANGE__PAGE,
    page
});
export const getList =()=>{
  return (dispatch)=>{
     axios.get('/api/headerList.json').then((res)=>{
        const data=res.data;
        //const action=changeList(data.data);
        dispatch(changeList(data.data));
     }).catch(()=>{
        console.log('error');
     })
  }
};