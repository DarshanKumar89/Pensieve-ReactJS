import React from 'react';

export default class Header extends React.Component {
	render () {  
		return (


<nav className="navbar navbar-static-top bs-docs-nav">
    <div className="container-fluid">
        <div className="navbar-header">
              <img src="images/logo.jpg" className="img m-b" alt="logo"/>
        </div>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-search"></span></a></li>
            <li><a href="#"><i class="fa fa-database"></i></a></li>
            <li><a href="#"><span className="glyphicon glyphicon-cog"></span></a></li>
            <li><a href="#"><i className="fa fa-question"></i></a></li>
        </ul>
    </div>
</nav>



    );  
	}
	
}
