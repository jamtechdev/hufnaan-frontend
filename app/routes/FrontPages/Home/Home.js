/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import  React from 'react'
import {
    EmptyLayout
} from './../../../components'
import './../../../styles/front/home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import background from "../../././images/front/hero-img.png"
// import backgroundTwo from "../../../images/front/hero-img-2.png"

import backgroundthree from "../../../images/front/hero-img-3.png"
import bgshapeone from "../../../images/front/bg-shape-1.png"
import bgshapetwo from "../../../images/front/bg-shape-2.png"
import bgshapethree from "../../../images/front/bg-shape-3.png"
import bgshapefour from "../../../images/front/bg-shape-4.png"
import arrowround from "../../../images/front/arrow-round.svg"
import arrowround2 from "../../../images/front/arrow-round2.svg"
import arrowstraight from "../../../images/front/arrow-straight.svg"
import arrowstraight2 from "../../../images/front/arrow-straight2.svg"
//import bullseye1 from "../../../images/front/bullseye-1.svg"
import logo from '../../../images/front/logo.png'
//import videoimg from '../../../images/front/video-img.png'
import videoimg2 from '../../../images/front/img-1.jpeg'
import greenbgshape from '../../../images/front/green-bg-shape.svg'
import playicon from '../../../images/front/play-icon.svg'
import hours from '../../../images/front/icon-2.png'
import studyanywhere from '../../../images/front/icon-3.png'
import bettergrades from '../../../images/front/icon-1.png'
import whiteboard from '../../../images/front/icon-5.png'
import studysession from '../../../images/front/icon-6.png'
import homework from '../../../images/front/icon-4.png'
import studentbg from '../../../images/front/people.jpg'
import tutor1 from '../../../images/front/tutor-1.png'
import tutor from '../../../images/front/tutor-2.png'
import tutor3 from '../../../images/front/tutor-3.png'
import tutor4 from '../../../images/front/tutor-4.png'
import tutor6 from '../../../images/front/tutor-6.png'
import tutor7 from '../../../images/front/tutor-7.png'
import studentimg from '../../../images/front/student-img-1.jpg'
import subscribeillustration from '../../../images/front/subscribe-illustration.svg'
function Home() {
    return (
        <EmptyLayout>
            <EmptyLayout.Section>
            <Header />
            <div className="main-wrap">
                <section className="banner-img" style={{ backgroundImage: `url(${backgroundthree})` }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-9 col-12">
                                <div className="banner-text">
                                    <h1 className="sub-title">Result-Oriented</h1>
                                    <h1 className="main-title">Online Tutoring Services!</h1>
                                    <p className="description">Get highest quality personalized 1:1 online tutoring, based on your needs & learning style, at honest prices. 100% learning & satisfaction delivered to students.</p>
                                    <div className="form-text">
                                        <p className="need-text"> I need help with: </p>
                                        <div className="search-box">
                                            <div className="row-c">
                                                <input type="text"></input>
                                                <button className="btn btn-default button-custom">GO</button>
                                            </div>
                                        </div>
                                        <div className="trail">
                                            <a href="#" className="btn btn-dark btn-signup">Sign Up for Free Trial </a>
                                            <p className="free-trail">Get a demo session now to resolve your queries !!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="how-to-work">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="heading"> How does online tutoring at TutorEye works? </h1>
                                <div className="how-work-art web-block">
                                    <div className="hwa-abso hwa-1">
                                        <h3>  Sign up </h3>
                                    </div>
                                    <div className="hwa-abso hwa-2">
                                        <h3> Live Study </h3>
                                        <p> Online tutoring services designed to meet the needs of the students!
                                            It’s so easy to find a specialized tutor in subjects you need help with. Choose TutorEye to improve academically and get ready to ace the className.
                                        </p>
                                    </div>
                                    <div className="hwa-abso hwa-3">
                                        <h3>  Written Help </h3>
                                        <p>
                                            Connect with some of the best tutors around the world to get 24/7 <a href="#">homework help</a>. Get step-by-step written assistance depending on your study needs. Set your own budget by discussing it with the tutor of your choice.
                                        </p>
                                    </div>
                                    <div className="hwa-abso hwa-4">
                                        <img className="" src={arrowstraight} />
                                    </div>
                                    <div className="hwa-abso hwa-5">
                                        <img className="" src={arrowstraight2} />
                                        <p>
                                        </p>
                                    </div>
                                    <div className="hwa-abso hwa-6">
                                        <h4> Connect Collaborate Learn </h4>
                                    </div>
                                    <div className="hwa-abso hwa-7">
                                        <h4> UpGRADE Now </h4>
                                    </div>
                                    <div className="hwa-abso hwa-8"> <img className="" src={arrowround} /> </div>
                                    <div className="hwa-abso hwa-9"> <img className="" src={arrowround2} /> </div>
                                    <div className="hwa-abso hwa-10"> <img className="" src={logo} /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="check-img">
                    <span className="bg-shape1"> <img className="" src={bgshapeone} /></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>  Checkout our online tutoring platform</h2>
                            </div>
                            <div className="col-md-8">
                                <div className="right-img">
                                    <img className="" src={videoimg2} />
                                    <div className="play-icon">
                                        <img src={playicon} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="green-bg" style={{ backgroundImage: `url(${greenbgshape})` }}>
                                    <div className="video-text">
                                        <p> Choose your plan and make
                                            us your study partner in your journey. Try one-on-one Live session with our trusted
                                            online tutors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="why-benefits">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="why-benefits-title">Benefits of online Tutoring Services at TutorEye</h1>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-box">
                                            <div className="crad-box-img">
                                                <img src={bettergrades} />
                                            </div>
                                            <h3>Interactive Whiteboard</h3>
                                            <p>Our digital whiteboard equipped with audio-video-chat features is the best way to enjoy learning at home!
                                                Whiteboard tutoring sessions help you voice your query instantly. What’s more, you can share files, upload textbook questions, draw diagrams and ask your tutor to review your homework. With Whiteboard learning - say ‘Yes’ to active learning today!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-box">
                                            <div className="crad-box-img">
                                                <img src={hours} />
                                            </div>
                                            <h3>24/7 Tutor Availability</h3>
                                            <p>24/7 tutor availability assured at TutorEye matched to your learning style!
                                                Whether it’s morning or late at night, professional tutors in Math, Physics or English and many more are here for round the clock help. Schedule a session based on your need or opt for instant tutoring in case you are stuck with a difficult problem. Our expert tutors are happy to fit your schedule anytime of the day!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-box">
                                            <div className="crad-box-img">
                                                <img src={studyanywhere} />
                                            </div>
                                            <h3>Lifetime Access to Session Recordings</h3>
                                            <p>You just bring the brain and we will take care of the rest.
                                                Are you ready to bring the lesson home? Whether you prefer your dorm room, home or a cafe, just make sure you have a wi-fi connection to start your session. Study anytime, anywhere by making the most of one-on-one live study sessions to get clarity on difficult topics. Choose a location of your convenience or wherever you feel most comfortable to begin learning.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-box">
                                            <div className="crad-box-img">
                                                <img src={homework} />
                                            </div>
                                            <h3>Personalized to your needs</h3>
                                            <p>We provide one-on-one sessions with expert tutors to focus on your individual study needs.
                                                You are the one incharge and each session is designed according to your learning pace. Your tutor can tailor your curriculum so that it suits you. Our personalized tutoring sessions have helped thousands of students reach for better grades in the className. Besides, you have the liberty to address specific questions to help you gain much needed insights over a topic.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-box">
                                            <div className="crad-box-img">
                                                <img src={whiteboard} />
                                            </div>
                                            <h3>Assistance from highly qualified tutors</h3>
                                            <p>Avail written help and we will work with you to help you rise to the challenge of writing assignments and doing daily homework. Our tutors are qualified professionals who can help you with your projects, term papers and homework questions. Review worksheets or get step-by-step explanations for the assigned work, whenever you need assistance. Master the skill set and complete your homework on time by partnering with us today!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-box">
                                            <div className="crad-box-img">
                                                <img src={studysession} />
                                            </div>
                                            <h3>Help available in vast variety of subjects</h3>
                                            <p> Our tutors are subject specialists providing one-on-one tutoring sessions, for K-12 to the College level students.</p>
                                            <p className="f18">We provide help with a wide array of subjects and are available 24/7 to help you with any topic - <a href="#" target="_blank">Math</a>, <a href="#" target="_blank">Physics</a>, <a href="#" target="_blank">Chemistry</a>, <a href="#" target="_blank">Statistics</a>, <a href="#" target="_blank">Calculus</a>, English.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="we-pr">
                    <span className="bg-shape2"> <img src={bgshapetwo} /></span>
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <div className="student-box" style={{ backgroundImage: `url(${studentbg})` }}>
                                    <h4>We are proud of</h4>
                                    <div className=" d-flex proud-flex">
                                        <div className=" proud-loop">
                                            <h6> 25k </h6>
                                            <p> Happy Students </p>
                                        </div>
                                        <div className=" proud-loop">
                                            <h6> 750k+ </h6>
                                            <p> Minutes of Live Study
                                                Help
                                            </p>
                                        </div>
                                        <div className=" proud-loop">
                                            <h6> 700+ </h6>
                                            <p> 5 star avg. ratings
                                                teachers
                                            </p>
                                        </div>
                                    </div>
                                    <div className="getlive-session"> <a href="#" title="Sign up for Demo Session" className="btn btn-dark btn-signup"> GET LIVE STUDY SESSION NOW </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="bg-shape3"> <img className="" src={bgshapethree} /> </span>
                </section>
                <section className="profile-t">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="maxcoach-timeline style-01">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-list maxcoach-entrance-animation-queue">
                                        <div className="timeline-item item animate">
                                            <div className="timeline-dot">
                                                <img className="" src={tutor} />
                                            </div>
                                            <div className="content-wrap">
                                                <div className="content-header">
                                                    <div className="content-inner">

                                                        <div className="maxcoach-image image">
                                                            <img className="" src={tutor3} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-main">
                                                    <div className="content-inner">
                                                        <div className="profile-repeat pr1">
                                                            <div className="pr-txt">
                                                                <h4> Beat the Study Blues. </h4>
                                                                <p> Chin up and book your live interactive session with our online tutor now. We are here for you 24/7. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item item animate">
                                            <div className="timeline-dot">
                                                <img className="" src={tutor1} />
                                            </div>
                                            <div className="content-wrap">
                                                <div className="content-header">
                                                    <div className="content-inner">

                                                        <div className="maxcoach-image image">
                                                            <img className="" src={tutor6} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-main">
                                                    <div className="content-inner">
                                                        <div className="description-2">
                                                            <div className="profile-repeat pr2">
                                                                <div className="pr-txt">
                                                                    <h4> Exams around the corner.</h4>
                                                                    <p> Don't worry! Our online tutors are here to help you in the nick of time. Connect instantly to get instant help. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item item animate">
                                            <div className="timeline-dot">
                                                <img className="" src={tutor4} />
                                            </div>
                                            <div className="content-wrap">
                                                <div className="content-header">
                                                    <div className="content-inner">

                                                        <div className="maxcoach-image image">
                                                            <img className="" src={tutor7} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-main">
                                                    <div className="content-inner">
                                                        <div className="description-2">
                                                            <div className="profile-repeat pr3">
                                                                <div className="pr-txt">
                                                                    <h4>Your journey to Better Grades starts here.</h4>
                                                                    <p>Make it happen. Right now. Right away. Our team of expert online tutors are at your service.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item item animate">
                                            <div className="timeline-dot">
                                                <img className="" src={tutor} />
                                            </div>
                                            <div className="content-wrap">
                                                <div className="content-header">
                                                    <div className="content-inner">
                                                        <div className="description-2">
                                                            <div className="profile-repeat pr5">
                                                                <div className="pr-txt">
                                                                    <h4>Is your search for an elusive 'x' still on?</h4>
                                                                    <p>Try out any Math problem on our whiteboard with our online math tutor right away. We will help you to find that 'x' with our expert in no time.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-main">
                                                    <div className="content-inner">
                                                        <div className="description-2">
                                                            <div className="profile-repeat pr4">
                                                                <div className="pr-txt">
                                                                    <h4>Be the Crowned Champion of the Queen's English.</h4>
                                                                    <p>Let's tap the inner writer in you, our online English tutor is here to help.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <span className="bg-shape4"> <img className="" src={bgshapefour} /> </span>
                </section>
                <section className="what-aboutus">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="why-benefits-title"> What students say about us? </h2>
                                <p>98% of our students love us…</p>
                                <div className="row aboutus-content">
                                    <div className="col-md-4">
                                        <div className="abt-lt-img"> <img className="" height="600px" width="350px" src={studentimg} />
                                            <div className="aboutus-signup"> <a href="#" title="Sign up for demo session" className="btn btn-dark btn-signup"> Sign up for demo session </a> </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="students-common">
                                                    <div className="student-detail">
                                                        <span className="student-name pb-2"> Martin Cohle </span>
                                                        <div className="star-rating orange"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>                      <span className="student-date"> Aug 1, 2021 </span>
                                                    </div>
                                                    <p className="student-pehra"> Subarsha was super in helping me with Calculus! He was very kind and always made sure I understood how to solve a problem and explained very step if I had questions. Recommended! </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="students-common">
                                                    <div className="student-detail">
                                                        <span className="student-name pb-2"> Martin Cohle </span>
                                                        <div className="star-rating orange"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>                      <span className="student-date"> Aug 1, 2021 </span>
                                                    </div>
                                                    <p className="student-pehra"> Subarsha was super in helping me with Calculus! He was very kind and always made sure I understood how to solve a problem and explained very step if I had questions. Recommended! </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="students-common">
                                                    <div className="student-detail">
                                                        <span className="student-name pb-2"> Martin Cohle </span>
                                                        <div className="star-rating orange"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>                      <span className="student-date"> Aug 1, 2021 </span>
                                                    </div>
                                                    <p className="student-pehra"> Subarsha was super in helping me with Calculus! He was very kind and always made sure I understood how to solve a problem and explained very step if I had questions. Recommended! </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="students-common">
                                                    <div className="student-detail">
                                                        <span className="student-name pb-2"> Martin Cohle </span>
                                                        <div className="star-rating orange"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>                      <span className="student-date"> Aug 1, 2021 </span>
                                                    </div>
                                                    <p className="student-pehra"> Subarsha was super in helping me with Calculus! He was very kind and always made sure I understood how to solve a problem and explained very step if I had questions. Recommended! </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ready-started">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="readyget-form">
                                    <h2 className="f46 font-weight-800 heading_1"> Ready to try online tutoring with us? </h2>
                                    <div className="started-form">
                                        <div className="search-container">

                                            <form id="w0" action="tutor-eye-faq" method="post">
                                                <input type="hidden" name="_csrf" />
                                                <input type="email" id="newsletter-email" className="flex-grow-1 col-md-8 col-sm-6 col-lg-10 col-xs-12 mb-xl-0 mb-3 Subscribebtn" placeholder="Enter email" required="required" />
                                                <button type="submit" className="Subscribebtn">Subscribe</button>                </form>              </div>

                                    </div>
                                    <span className="readyget-graphic d-none d-lg-block"> <img className="" src={subscribeillustration} /> </span> </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer">
                    <Footer />
                </section>
            </div>
            </EmptyLayout.Section>
            </EmptyLayout>
    )
}
export default Home