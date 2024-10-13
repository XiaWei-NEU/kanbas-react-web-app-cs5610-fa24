// import { Link } from "react-router-dom";
// export default function Dashboard() {
//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//             <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//             <div id="wd-dashboard-courses" className="row">
//                 {/* <div className="col-md-4 col-lg-3"> */}
//                     {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}> */}
//                     <div className="col-md-3" style={{ width: "300px" }}>
//                         <div className="card rounded-3 overflow-hidden">
//                             <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 to="/Kanbas/Courses/1234/Home">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS1234 React JS
//                                     </h5>
//                                     <p className="wd-dashboard-course-title card-text">
//                                         Full Stack software developer
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 {/* </div> */}
//                 {/* <div className="col-md-4 col-lg-3">
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }}> */}
//                     <div className="col-md-3" style={{ width: "300px" }}>
//                         <div className="card rounded-3 overflow-hidden">
//                             <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 to="/Kanbas/Courses/1235/Home">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS1235 Node JS
//                                     </h5>
//                                     <p className="wd-dashboard-course-title card-text   ">
//                                         Full Stack software developer
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 {/* </div> */}
//                 {/* <div className="col-md-4 col-lg-3">
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }}> */}
//                     <div className="col-md-3" style={{ width: "300px" }}>
//                         <div className="card rounded-3 overflow-hidden">
//                             <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 to="/Kanbas/Courses/1236/Home">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS1236 Angular JS
//                                     </h5>
//                                     <p className="wd-dashboard-course-title card-text">
//                                         Full Stack software developer
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 {/* </div> */}
//                 {/* <div className="col-md-4 col-lg-3">
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }} > */}
//                     <div className="col-md-3" style={{ width: "300px" }}>
//                         <div className="card rounded-3 overflow-hidden">
//                             <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 to="/Kanbas/Courses/1237/Home">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS1237 VUE JS
//                                     </h5>
//                                     <p className="wd-dashboard-course-title card-text">
//                                         Full Stack software developer
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 {/* </div> */}
//                 {/* <div className="col-md-4 col-lg-3">
//                     <div className="wd-dashboard-course" style={{ width: "300px" }}> */}
//                     <div className="col-md-3" style={{ width: "300px" }}>
//                         <div className="card rounded-3 overflow-hidden">
//                             <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 to="/Kanbas/Courses/1238/Home">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title"    >
//                                         CS1238 JavaScript
//                                     </h5>
//                                     <p className="wd-dashboard-course-title card-text   ">
//                                         Full Stack software developer
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 {/* </div> */}
//                 {/* <div className="col-md-4 col-lg-3">
//                     <div className="wd-dashboard-course" style={{ width: "300px" }}> */}
//                     <div className="col-md-3" style={{ width: "300px" }}>
//                         <div className="card rounded-3 overflow-hidden">
//                             <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 to="/Kanbas/Courses/1239/Home">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title"    >
//                                         CS1239 JS
//                                     </h5>
//                                     <p className="wd-dashboard-course-title card-text   ">
//                                         Full Stack software developer
//                                     </p>
//                                     <button className="btn btn-primary" > Go </button>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 {/* </div> */}
//                 {/* <div className="col-md-4 col-lg-3">
//                     <div className="wd-dashboard-course" style={{ width: "300px" }} > */}
//                     <div className="col-md-3" style={{ width: "300px" }}>
//                         <div className="card rounded-3 overflow-hidden">
//                             <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 to="/Kanbas/Courses/1240/Home">
//                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title"    >
//                                         CS1240 JS
//                                     </h5>
//                                     <p className="wd-dashboard-course-title card-text   ">
//                                         Full Stack software developer
//                                     </p>
//                                     <button className="btn btn-primary" > Go </button>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 {/* </div> */}
//             </div>
//         </div>
//     );
// }

import { Link } from "react-router-dom";
import { courses } from './Database';

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course: { _id: string; name: string; description: string }) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`} state={{ courseName: course.name }} 
                                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <img src={`/images/${course._id}.jpg`} width="100%" height={160} alt={course.name} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description}
                                        </p>
                                        <button className="btn btn-primary"> Go </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}