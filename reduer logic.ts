///history

import { createBrowserHistory } from 'history';

export default createBrowserHistory();

//index.js

import {DashBoard} from '../dashboard-container/connect/dashboard-container-connect';
export default DashBoard;

//conatner compont
import React from 'react';
import './dashboard-container-component.scss';
import donutchart2 from '../../assets/images/dashboard/donut2.PNG';
import livechart from '../../assets/images/dashboard/livechart.PNG';
import livechartjobs from '../../assets/images/dashboard/livechart-jobs.PNG';
import roichartjobs from '../../assets/images/dashboard/roi-charts.PNG';
import tcocharts from '../../assets/images/dashboard/tco-charts.PNG';
import savingschart from '../../assets/images/dashboard/savingschart.PNG';

import { Link } from 'react-router-dom';
import { APP_ROUTE_CONSTANT } from "../../router/router-constant";
import DonutChart from '../../common/component/charts/donutchart/donutchart.js';
import NissanUlDropdown from '../../common/component/react-dropdown/ul-dropdown';

import PropTypes from 'prop-types';
import { APP_CONATANTS } from '../../common/constants/app-constants';

class DashboardContainerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            totalCount:0,
        }
    }
    componentDidMount() {
        this.props.actions.getIdeaCount()
    }
    totalCountIdeas(ideas){
      if(ideas!==undefined)
      {
         
          let total=0;
          for(let val in ideas)
          {
           
            total+=Number(ideas[val]);
          }
          return total;
      }
       
      
    }
   
    render() {
     
        const { ideas } = this.props.data;
       
        const totIdea=this.totalCountIdeas(ideas);
       
        const noIdeaChart={'NoIdea':'100'}
        const chartProps = {

            height: 224,
            width: 224,
            trheight: 100,
            trwidth: 100,
            chartdata: totIdea!==0?(ideas):(noIdeaChart),
            innerRadius: 60,
            outerRadius: 100,
            withValue: totIdea!==0?true:false,
            total_count: totIdea,
            innerlabel: 'IDEAS',
            color_code: totIdea!==0? APP_CONATANTS.DASHBOARD.ASSESSMENT_CHART_COLOR :APP_CONATANTS.DASHBOARD.NO_DATA_CHART,
        }
        return (
            <div className={"row"}>
                <div className={"col-lg-12"}>
                    <div className={"dashboard-container"}>
                        <div className={"row mg-btm-10"}>
                            <div className={"col-md-3"}>
                                <h5>Data Representation</h5>
                            </div>
                            <div className={"col-md-6"}>
                                <NissanUlDropdown uldropdownlabelprops={{className: 'nisssan-dd-menu', primarylabel: 'Location',ddvalue :[ 'India']}}/>
                                <NissanUlDropdown uldropdownlabelprops={{className: 'nisssan-dd-menu mg-lft-30', primarylabel: 'Function',ddvalue : ['All']}}/>
                            </div>
                        </div>
                        <hr />
                        <div className={"row mg-top-20"}>
                            <div className={"col-md-4"}>
                                <h4>
                                    <Link to={APP_ROUTE_CONSTANT.ASSESSMENT}>Assessment</Link>
                                </h4>
                                <div className={"nissan-donut-chart"}>
                                    {ideas.length!== 0 ? <DonutChart chartProps={chartProps} /> : ''}
                                    <ul>
                                        <li><span>{ideas!==undefined?ideas.underReview:0}</span> Under Review</li>
                                        <li><span>{ideas!==undefined?ideas.approved:0}</span>  Approved</li>
                                        <li><span>{ideas!==undefined?ideas.onHold:0}</span>  On Hold</li>
                                        <li><span>{ideas!==undefined?ideas.rejected:0}</span>  Rejected</li>
                                    </ul>
                                </div>
                                <div className={"nissan-dashboard-bdr"}></div>
                            </div>
                            <div className={"col-md-4"}>
                                <h4>
                                    <Link >Build</Link>
                                </h4>
                                <div className={"nissan-chart-placeholder"}>
                                    <img src={donutchart2} alt="donutchart2" />
                                    <ul className={"build-chart mg-top-30"}>
                                        <li><span>70</span> Analysis</li>
                                        <li><span>80</span> Design</li>
                                        <li><span>30</span> Develop</li>
                                        <li><span>25</span> Testing</li>
                                        <li><span>20</span> Deploy</li>
                                    </ul>
                                </div>
                                <div className={"nissan-dashboard-bdr"}></div>
                            </div>
                            <div className={"col-md-4"}>
                                <h4>
                                    <Link >Live</Link>
                                </h4>
                                <div className={"nissan-jobs-chart-placeholder"}>
                                    <img src={livechart} alt="donutchart2" />
                                    <ul className={"robot-chart"}>
                                        <li><span>32</span>Success</li>
                                        <li><span>03</span>Failed</li>
                                        <li><span>23</span>Stopped</li>
                                    </ul>
                                    <img className={"jobs-chart"} src={livechartjobs} alt="donutchart2" />
                                    <ul className={"jobs-chart"}>
                                        <li><span>32</span>Success</li>
                                        <li><span>03</span>Failed</li>
                                        <li><span>23</span>Stopped</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"dashboard-container"}>
                        <div className={"row mg-btm-17"}>
                            <div className={"col-md-12"}>
                                <h5>Data Representation <span>76 Live Projects</span></h5>
                            </div>
                        </div>
                        <hr />
                        <div className={"row mg-top-20"}>
                            <div className={"col-md-4"}>
                                <h4>
                                    <Link>ROI</Link>
                                </h4>
                                <div className={"nissan-live-project-placeholder"}>
                                    <ul>
                                        <li>Target</li>
                                        <li>Actuals</li>
                                    </ul>
                                    <img src={roichartjobs} alt="donutchart2" />
                                </div>
                                <div className={"nissan-dashboard-bdr"}></div>
                            </div>
                            <div className={"col-md-4"}>
                                <h4>
                                    <Link >TCO</Link>
                                </h4>
                                <div className={"nissan-live-project-placeholder"}>
                                    <ul className={"build-chart mg-top-30 pull-right"}>
                                        <li>Fixed</li>
                                        <li>Operating</li>
                                        <li>Variables</li>
                                    </ul>
                                    <img src={tcocharts} alt="donutchart2" />

                                </div>
                                <div className={"nissan-dashboard-bdr"}></div>
                            </div>
                            <div className={"col-md-4"}>
                                <h4>
                                    <Link >SAVINGS</Link>
                                </h4>
                                <div className={"nissan-live-project-placeholder"}>
                                    <ul className={"build-chart mg-top-30 pull-right"}>
                                        <li><span>70</span> Analysis</li>
                                        <li><span>80</span> Design</li>
                                        <li><span>30</span> Develop</li>
                                        <li><span>32</span> Testing</li>
                                    </ul>
                                    <img src={savingschart} alt="donutchart2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

DashboardContainerComponent.propTypes = {
    actions: PropTypes.object,
    getIdeaCount: PropTypes.func,
    ideas: PropTypes.array,
    data: PropTypes.object

}

export default DashboardContainerComponent;

//connect


action.js
import {GET_ASSESSMENT_IDEA_COUNT} from "../../../action-type";
import {getAssessmentCount} from "../../../services/dashboard-service";

export const getIdeaCount=()=>dispatch=>{
    getAssessmentCount().then(res=>{
       
        dispatch({type:GET_ASSESSMENT_IDEA_COUNT,

            payload:res})
    })
   

}

connect.js
////////

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getIdeaCount} from './dashboard-container-action'; 
import DashboardContainerComponent from '../dashboard-container-component'
import {withRouter} from 'react-router-dom';

const mapStateToProps=state=>{
   return{ data:state.assessmentCountReduces.data}
}

const mapDispatchToProps=dispatch=> {
    const actions = bindActionCreators(
    {
        getIdeaCount
    },
    dispatch
);


return { actions };
}

 export const DashBoard=withRouter(connect(mapStateToProps,mapDispatchToProps)(DashboardContainerComponent));

?//reducer.js

import {GET_ASSESSMENT_IDEA_COUNT} from '../../../action-type';

const initialState = {
   data:{
       ideas:[]
   },
}
 export default function(state=initialState,action){
    
    switch(action.type){
        case GET_ASSESSMENT_IDEA_COUNT:
           return Object.assign({}, state, {
                     data: action.payload.data
              })
        default:
             return state;
    }
} 


//assesment service

import assessmentcount from "../mockresponse/assessmentideacount";
import {IDEA_COUNT,BASE_URL} from '../common/constants/url-constant';

const parseJSON = response => ({ body: response, success: true });
export const  getAssessmentCount=  function(){
    //  here api call happen using args are url,args,type
  let data= fetch(BASE_URL+IDEA_COUNT,{
    
        headers: {
            
            'Accept': "*/*",
            'Access-Control-Allow-Origin': '*',
            'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE1ODI5NjY1Mzh9.aTysX_IIibfdAPMr9U6WXxTYnB7zTjX91BYpwppTHA8X0uWoeM_1VypTi3Idywtc0n5ZwPk-9b51hy147WzzMQ'
           
          }
    }).then(
        res=>{
            return res.json();
        }
        ).then(
          data=>{  
            return data;
          }
    ).catch(function (err){
        console.log(err)
    })
  return data;
    
}


// async getRequest(url){
//   let data = await (await (fetch(url)
//     .then(res => {
//       return res.json()
//     })
//     .catch(err => {
//       console.log('Error: ', err)
//     })
//   ))
//   return data
// }
// }

////reducr
//here import your reducer and combine
import {combineReducers} from 'redux';
import assementDeatailsReducer from '../domain/assessment-container/connect/asseement-container-reducer';
import assessmentCountReduces from "../domain/dashboard-container/connect/dashboard-container-reducer";
import ideasubmissionReducer from "../domain/idea-submission-container/connect/ideasubmission-container-reducer"
import loginReducer from "../domain/login-container/connect/login-container-reducer"
export const  reducers= combineReducers({
    assementDeatailsReducer,
    assessmentCountReduces,
    ideasubmissionReducer,
    loginReducer
}) 
  //reducers;
