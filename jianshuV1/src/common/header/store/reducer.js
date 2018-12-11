import * as constants from './constants';
import {fromJS} from 'immutable';
const defaultState=fromJS({
        focused:false,
        mouseIn:false,
        list:[],
        page:1,
        totalPage:1
});
export  default (state=defaultState,action)=>{
    // if(action.type==constants.SEARCH__FOCUS)
    // {
    //     //immutable对象的set方法，会结合之前的immutable对象的值
    //     //和设置的值，返回一个全新的对象
    //     return state.set('focused',true);
    //     // return{
    //     //     focused:true
    //     // }
    // }
    // if(action.type==constants.SEARCH__BLUR)
    // {
    //     return state.set('focused',false);
    // }
    // if(action.type==constants.CHANGE__LIST){
    //     //console.log("test");
    //     return state.set('list',action.data);
    // }
    switch (action.type){
        case constants.SEARCH__FOCUS:
            return state.set('focused',true);
        case constants.SEARCH__BLUR:
            return state.set('focused',false);
        case constants.CHANGE__LIST:
            //return state.set('list',action.data).set('totalPage',action.totalPage);
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            });
        case constants.MOUSE__ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE__LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE__PAGE:
            return state.set('page',action.page);
        default:
           return state;
    }
    return state;
}