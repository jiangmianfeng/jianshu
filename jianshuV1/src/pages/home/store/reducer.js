
import {fromJS} from 'immutable';
const defaultState=fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
        id:2,
        title:'高考',
        imgUrl:'//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }],
    articleList:[{
        id:1,
        title:'晒清华通知书被踢出群：穷人为什么穷，是有原因的' ,
        desc:'序 最近，有这么一个社会新闻，一个妈妈在同学群晒出女儿考上清华的录取通知书，本想得到大家的赞扬，结果，却被群主踢出了群...... 事情的经过大..',
        imgUrl:'//upload-images.jianshu.io/upload_images/7084955-9fa3c697d209a32e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:2,
        title:'晒清华通知书被踢出群：穷人为什么穷，是有原因的' ,
        desc:'序 最近，有这么一个社会新闻，一个妈妈在同学群晒出女儿考上清华的录取通知书，本想得到大家的赞扬，结果，却被群主踢出了群...... 事情的经过大..',
        imgUrl:'//upload-images.jianshu.io/upload_images/7084955-9fa3c697d209a32e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:3,
        title:'晒清华通知书被踢出群：穷人为什么穷，是有原因的' ,
        desc:'序 最近，有这么一个社会新闻，一个妈妈在同学群晒出女儿考上清华的录取通知书，本想得到大家的赞扬，结果，却被群主踢出了群...... 事情的经过大..',
        imgUrl:'//upload-images.jianshu.io/upload_images/7084955-9fa3c697d209a32e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList:[{
        id:1,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
    },{
        id:2,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
    },{
        id:3,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
    },{
        id:4,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
    }]
});
export  default (state=defaultState,action)=>{

    switch (action.type){

        default:
            return state;
    }
    return state;
}