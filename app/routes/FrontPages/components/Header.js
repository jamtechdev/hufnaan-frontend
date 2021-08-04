/* eslint-disable react/react-in-jsx-scope */
//import logo from '../../../logo.svg'
import  React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../images/front/logo.png'
// import login from '../../../../images/front/login.svg'
function Header() {
  return (
    <div className="navigation-wrap start-header start-style">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-md">
					
						<a className="navbar-brand" href="https://front.codes/" target="_blank" rel="noreferrer">
                         <img src={logo} alt="Logo" />
                            </a>	
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto py-4 py-md-0">
							
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to="login">
									<i className="fa fa-sign-in icon-login" aria-hidden="true"></i>	Login
									</Link>
									
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to="signup"><i className="fa fa-user-plus icon-login" aria-hidden="true"></i> Sign up</Link>
								</li>
							</ul>
						</div>
						
					</nav>		
				</div>
			</div>
		</div>
	</div>
  )
}

export default Header