import { navigationConstants } from "../_constants";
const initialState = {
    pages: [
        { pageName: '/', link: '/', icon: '', title: '/',main:true}
    ]
};
export function navigation(state = initialState, action) {
    switch (action.type) {
        case navigationConstants.FEED_DASHBOARD_NAVIGATIONS:
            if(action.navigationData.role === "student") {
                return {
                    pages: [
                        { pageName: 'Dashboard', link: '/student/dashboard', icon: 'fa fa-fw fa-tachometer', title: 'Dashboard',main:true},
                        { pageName: 'Profile',link:'', icon: 'fa fa-fw fa-user', title: 'Profile',subMenu:[
                            {pageName: 'Personal Details', link: '/student/personal-details',title: 'Personal Details'},
                            {pageName: 'Account Details', link: '/student/account-details',title: 'Account Details'},
                            {pageName: 'My Courses', link: '/student/my-courses',title: 'My Courses'},
                            {pageName: 'My Documents', link: '/student/my-documents',title: 'My Documents'}
                        ],main:false},
                        { pageName: 'Courses', link: '/student/courses', icon: 'fa fa-fw fa-book', title: 'Courses',main:true },
                        { pageName: 'Tutor', link: '/student/tutors', icon: 'fa fa-fw fa-mortar-board', title: 'Tutor' ,main:true},
                        { pageName: 'Doctor', link: '/student/doctors', icon: 'fa fa-fw fa-stethoscope', title: 'Doctor' ,main:true},
                        { pageName: 'Chat', link: '/student/chat', icon: 'fa fa-fw fa-comments', title: 'Chat' ,main:true},
                        { pageName: 'My Bookings', link: '/student/my-bookings', icon: 'fa fa-fw fa-calendar', title: 'My Bookings',main:true },
                        { pageName: 'Support Center', link: '/student/support-center', icon: 'fa fa-fw fa-headphones', title: 'Support Center',main:true },
                        { pageName: 'About Us', link: '/student/about-us', icon: 'fa fa-fw fa-th', title: 'About Us',main:true}
                    ]
                }
            }else if(action.navigationData.role === "teacher"){
                return {
                    pages: [
                        { pageName: 'Dashboard', link: '/teacher/dashboard', icon: '', title: 'Dashboard' },
                        { pageName: 'Profile', link: '/teacher/profile', icon: '', title: 'Profile' },
                        { pageName: 'Courses', link: '/teacher/courses', icon: '', title: 'Courses' },
                        { pageName: 'Tutor', link: '/teacher/tutor', icon: '', title: 'Tutor' },
                        { pageName: 'Doctor', link: '/teacher/doctor', icon: '', title: 'Doctor' },
                        { pageName: 'Chat', link: '/teacher/chat', icon: '', title: 'Chat' },
                        { pageName: 'My Bookings', link: '/teacher/my-bookings', icon: '', title: 'My Bookings' },
                        { pageName: 'Support Center', link: '/teacher/support-center', icon: '', title: 'Support Center' },
                        { pageName: 'About Us', link: '/teacher/about-us', icon: '', title: 'About Us' }
                    ]
                }
            }
         break;  
        case navigationConstants.UNFEED_DASHBOARD_NAVIGATIONS:
            return initialState
        default:
            return state
    }
}

