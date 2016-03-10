import React from 'react';

import WelcomeRow from './Widgets/WelcomeWidget';
import LineGraphWidget from './Widgets/LineGraphWidget';
import InfoWidgets from './Widgets/InfoWidgets';
import Activity from './Widgets/Activity';
import Listing from './Widgets/Listing';
import TableWidget from './Widgets/TableWidget';
import Footer from './Widgets/Footer';

export default class MainContent extends React.Component {
    render () {
        return ( 
        	<div>
        	 <div className="tab-content">
            <div role="tabpanel" className="tab-pane fade in active" id="data">
                <h5>Hive @ Cluster - Name </h5>
                <ul>
                    <li><a href="#">- Table -1</a></li>
                    <li><a href="#">- Table -2</a></li>
                    <li><a href="#">- Table -3</a></li>
                    <li><a href="#">- Table -4</a></li>
                    <li><a href="#">- Table -5</a></li>
                </ul>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="models">
                <h3>Hive @ Cluster - Name </h3>
                <ul>
                  <li><a href="#">- Table -1</a></li>
                    <li><a href="#">- Table -2</a></li>
                    <li><a href="#">- Table -3</a></li>
                    <li><a href="#">- Table -4</a></li>
                    <li><a href="#">- Table -5</a></li>
                </ul>

            </div>
        </div>
    </div>

        <div className="panel-body">
               <h3>Your workload</h3>
                <div className="container">
                <div className="row">
                    <div className="col-sm-3 jumbotron" style="margin: 10px;">
                        <div>Queries <span className="pull-right">24</span></div>
                    </div>
                    <div className="col-sm-3 jumbotron" style="margin: 10px;">
                        <div>Tables<span className="pull-right">09</span></div>
                    </div>
                    <div className="col-sm-3 jumbotron" style="margin: 10px;">
                        <div>Columns<span className="pull-right">34</span></div>
                    </div>
                </div>
                </div>
            </div>
           
        	
        );
    }
}
