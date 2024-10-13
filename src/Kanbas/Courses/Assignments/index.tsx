// export default function Assignments() {
//     return (
//         <div id="wd-assignments">
//             <input id="wd-search-assignment"
//                 placeholder="Search for Assignments" />
//             <button id="wd-add-assignment-group">+ Group</button>
//             <button id="wd-add-assignment">+ Assignment</button>
//             <h3 id="wd-assignments-title">
//                 ASSIGNMENTS 40% of Total <button>+</button>
//             </h3>
//             <ul id="wd-assignment-list">
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A1 - ENV + HTML
//                     </a>
//                     <div className="wd-assignment-details">
//                         <span>Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
//                         <br />
//                         <b>Due</b> May 13 at 11:59pm | 100 pts</span>
//                     </div>
//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A2 - CSS + BOOTSTRAP
//                     </a>
//                     <div className="wd-assignment-details">
//                         <span>Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
//                         <br />
//                         <b>Due</b> May 20 at 11:59pm | 100 pts</span>
//                     </div>
//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A3 - JAVASCRIPT + REACT
//                     </a>
//                     <div className="wd-assignment-details">
//                         <span>Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
//                         <br />
//                         <b>Due</b> May 27 at 11:59pm | 100 pts</span>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     );
// }




// import { FaPenSquare } from "react-icons/fa";
// import { BsGripVertical } from "react-icons/bs";
// import AssignmentsControls from "./AssignmentsControls";
// import AssignmentHeader from "./AssignmentHeader";
// import LessonControlButtons from "../Modules/LessonControlButtons";  
 
// export default function Assignments() {
//   return (
//     <div id="wd-assignments" className="container mt-4">
//       <AssignmentsControls /><br />
//       <AssignmentHeader />
//       <ul id="wd-assignment-list" className="list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
//         <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
//           <div className="col-1 d-flex align-items-center justify-content-start">
//             <a className="wd-assignment-link d-flex align-items-center p-2" href="#/Kanbas/Courses/1234/Assignments/123">
//               <BsGripVertical className="me-2 fs-3 " style={{ color: 'black' }}/>
//               <FaPenSquare className="fs-3 " style={{ color: 'green' }} />
//             </a>
//           </div>
//           <div className="col-7 pt-3 pb-3">
//             <div><strong>A1</strong></div>
//             <div>
//               <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Oct 6 at 12:00am |
//               <strong> Due</strong> Oct 16 at 11:59pm | 100 pts
//             </div>
//           </div>
//           <div className="col-3 d-flex align-items-center justify-content-end p-3">
//             <LessonControlButtons />
//           </div>
//         </li>

//         <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
//           <div className="col-1 d-flex align-items-center justify-content-start me-2">
//             <a className="wd-assignment-link d-flex align-items-center p-2" href="#/Kanbas/Courses/1234/Assignments/124">
//               <BsGripVertical className="me-2 fs-3" style={{ color: 'black' }}/>
//               <FaPenSquare className="fs-3" style={{ color: 'green' }} />
//             </a>
//           </div>
//           <div className="col-7 pt-3 pb-3">
//             <div><strong>A2</strong></div>
//             <div>
//               <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Oct 15 at 12:00am |
//               <strong> Due</strong> Oct 25 at 11:59pm | 100 pts
//             </div>
//           </div>
//           <div className="col-3 d-flex align-items-center justify-content-end p-3">
//             <LessonControlButtons />
//           </div>
//         </li>
//         <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
//           <div className="col-1 d-flex align-items-center justify-content-start me-2">
//             <a className="wd-assignment-link d-flex align-items-center p-2" href="#/Kanbas/Courses/1234/Assignments/125">
//               <BsGripVertical className="me-2 fs-3" style={{ color: 'black' }}/>
//               <FaPenSquare className="fs-3" style={{ color: 'green' }} />
//             </a>
//           </div>
//           <div className="col-7 pt-3 pb-3">
//             <div><strong>A3</strong></div>
//             <div>
//               <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Oct 20 at 12:00am |
//               <strong> Due</strong> Oct 30 at 11:59pm | 100 pts
//             </div>
//           </div>
//           <div className="col-3 d-flex align-items-center justify-content-end p-3">
//             <LessonControlButtons />
//           </div>
//         </li>

//       </ul>
//     </div>
//   );
// }





import { FaPenSquare } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeader from "./AssignmentHeader";
import LessonControlButtons from "../Modules/LessonControlButtons";  
import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database";


export default function Assignments() {
  const { cid } = useParams(); 
  const courseAssignments = db.assignments.filter(assignment => assignment.course === cid);

  return (
    <div id="wd-assignments" className="container mt-4">
      <AssignmentsControls /><br />
      <AssignmentHeader />
      <ul id="wd-assignment-list" className="list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
        {courseAssignments.map(assignment => (
          <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
          <div className="col-1 d-flex align-items-center justify-content-start">
            <Link className="wd-assignment-link d-flex align-items-center p-2" to={`${assignment._id}`}>
              <BsGripVertical className="me-2 fs-3 " style={{ color: 'black' }}/>
              <FaPenSquare className="fs-3 " style={{ color: 'green' }} />
            </Link>
          </div>
          <div className="col-7 pt-3 pb-3">
            <div><strong>{assignment.title}</strong></div>
            <div>
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableDate} |
              <strong> Due</strong> {assignment.dueDate} | {assignment.points} pts
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end p-3">
            <LessonControlButtons />
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
}