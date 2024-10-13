import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa6";
import * as db from '../Database';

export default function Courses() {
    const { cid } = useParams();
    const courses = db.courses;
    const course = courses.find((course: { _id: string }) => course._id === cid);
    const { pathname } = useLocation();
    return (
        <div id="wd-courses">
            {course ? (
                <><h2 className="text-danger">
                    <FaAlignJustify className="me-4 fs-4 mb-1" />
                    {course.name} &gt; {pathname.split("/")[4]}
                </h2><hr /><div className="d-flex">
                        <div className="d-none d-md-block">
                            <CoursesNavigation />
                        </div>
                        <div className="flex-fill">
                            <Routes>
                                <Route path="/"
                                    element={<Navigate to="Home" />} />
                                <Route path="Home" element={<Home />} />
                                <Route path="Modules" element={<Modules />} />
                                <Route path="Piazza" element={<h3>Piazza</h3>} />
                                <Route path="Zoom" element={<h3>Zoom</h3>} />
                                <Route path="Assignments"
                                    element={<Assignments />} />
                                <Route path="Assignments/:aid"
                                    element={<AssignmentEditor />} />
                                <Route path="Quizzes" element={<h3>Quizzes</h3>} />
                                <Route path="Grades" element={<h3>Grades</h3>} />
                                <Route path="People" element={<PeopleTable />} />
                            </Routes>
                        </div>
                    </div></>
            ) : (
                <h2 className="text-danger">Course dose not be found.</h2>
            )}
        </div>
    );
}