/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
//import logo from '../../../logo.svg'
import  React from 'react'
import logo from '../../../images/front/logo.png'
import app1 from '../../../images/front/app-1.png'
import app2 from '../../../images/front/app-2.png'
import './../../../styles/front/home.css'
import './../../../styles/front/footer.css'
// import login from '../../../../images/front/login.svg'
function Footer() {
  return (
  <div className="footer-inner">
		<div className="container">
			<div className="row">
            <div className="col-md-3">
                    <div className="footer-box">
                        <img src={logo}/>
                        <p className="copyright">Pushpinder was the best tutor I've worked with on this site. Exponentially quicker than anyone else. Concise. Communicative. Obviously knowledgeable. He'll work for your money. Thank you again!</p>
						<div className="followus">
                                <h3>Follow Us:</h3>
                                <ul>
                            <li><a href="#"><span className="f-icon facebook"><i className="fa fa-facebook" aria-hidden="true"></i></span></a></li>
                            <li><a href="#"><span className="f-icon twitter"><i className="fa fa-twitter" aria-hidden="true"></i></span></a></li>
                            <li><a href="#"><span className="f-icon linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></span></a></li>
                            <li><a href="#"><span className="f-icon youtube"><i className="fa fa-youtube" aria-hidden="true"></i></span></a></li>
                        </ul>
                        </div>
                    </div>
				</div>
                <div className="col-md-3">
                    <div className="footer-box">
                        <h3> Services</h3>
                        <ul>
                            <li><a href="#">Live Study</a></li>
                            <li><a href="#">ASSIGNMENT HELP</a></li>
                            <li><a href="#"> HOMESCHOOLING</a></li>
                            <li><a href="#"> SAT TEST PREPARATION </a></li>
                            <li><a href="#">SCHOOL</a></li>
                            <li><a href="#">UNIVERSITY</a></li>
                            <li><a href="#">CORPORATE</a></li>
                            <li><a href="#">NON PROFIT</a></li>
                        </ul>
                    </div>
				</div>
				<div className="col-md-3">
                    <div className="footer-box">
                        <h3> Top Subjects </h3>
                        <ul>
                            <li><a href="#"> MATH TUTOR ONLINE</a></li>
                            <li><a href="#">ALGEBRA TUTOR ONLINE</a></li>
                            <li><a href="#">TRIGONOMETRY TUTOR ONLINE</a></li>
                            <li><a href="#">PHYSICS TUTOR ONLINE</a></li>
                            <li><a href="#">CHEMISTRY TUTOR ONLINE</a></li>
                            <li><a href="#">BIOLOGY TUTOR ONLINE </a></li>
                            <li><a href="#">SUBSCRIBE NOW</a></li>
                            <li><a href="#">STUDENT AMBASSADOR</a></li>
                         
                        </ul>
                    </div>
				</div>
                <div className="col-md-3">
                    <div className="footer-box">
                        <h3>Download </h3>
                        <div className="app-img">
                        <img src={app1}/>
                        </div>
                        <div className="app-img">
                        <img src={app2}/>
                        </div>
                    </div>
				</div>
			</div>
		</div>
        </div>
  )
}

export default Footer