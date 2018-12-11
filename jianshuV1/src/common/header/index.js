import React ,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store/';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfo,
    SearchInfoList,
    SearchInfoTitle,
    SearchWrapper
} from './style';

class Header extends Component{
    getListArea(){
        const {focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage}=this.props;
        const newList=list.toJS();//转换为普通数组
        const pageList=[];
        if(newList.length){
            for(let i=((page-1)*10);i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused||mouseIn){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
                        >
                            <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe61f;</i>
                            换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {pageList}
                            {/*{*/}
                                {/*list.map((item)=>{*/}
                                    {/*return <SearchInfoItem>{item}</SearchInfoItem>*/}
                                {/*})*/}
                            {/*}*/}
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            );
        }else{
            return null;
        }
    }
    render(){
        const {focused,handleInputFocus,handleInputBlur}=this.props;
        return (
            <div>
                <HeaderWrapper>
                    <Logo/>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch className={focused?'focused':''}
                                           onFocus={handleInputFocus}
                                           onBlur={handleInputBlur}
                                >

                                </NavSearch>

                            </CSSTransition>
                            <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe60b;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='writing'>
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
        //state.get('header').get('focused')第一种方法
    }
}
const mapDispathToProps=(dispatch)=>{
    return{
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            //console.log(spin);
            // let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            // //console.log(originAngle);
            // if(originAngle){
            //     originAngle=parseInt(originAngle,10);
            // }else{
            //     originAngle=0;
            // }
            //console.log(originAngle);
           // spin.style.transform='rotate+('+(originAngle+360)+'deg)';
            //transform:rotate(0deg);
            //console.log(spin.style.transform);
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
          //dispatch(actionCreators.changePage());
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps) (Header);