import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignInForm from './SignInPage/SignInForm';
import StudentHomePage from './HomePage/StudentHomePage';
import TeacherHomePage from './HomePage/TeacherHomePage';

import Navbar from './HomePage/components/Navbar';
import ChangeInfoTeacher from './NavigationMenu/ChangeInfo/ChangeInfoTeacher';
import ChangePass from './NavigationMenu/ChangePass/ChangePass';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignInForm />
        </Route>
        <Route path="/teacherHomepage/forum">
          <TeacherHomePage />
        </Route>
        <Route path="/teacherHomepage/class-list">
          <TeacherHomePage />
        </Route>
        <Route path="/teacherHomepage/dashboard">
          <TeacherHomePage />
        </Route>
        <Route path="/teacherHomepage/changeInfo">
          <TeacherHomePage />
        </Route>
        <Route path="/teacherHomepage/FileInput">
          <TeacherHomePage />
        </Route>
        <Route path="/teacherHomepage/changePassword">
          <ChangePass /> 
        </Route>        
        <Route path="/studentHomepage" exact>
          <StudentHomePage />
        </Route>
        <Route path="/teacherHomepage" exact>
          <TeacherHomePage />
        </Route>
//         <Route path="/teacherHomepage/changeInfo">
//           <ChangeInfoTeacher />
//         </Route>
//         <Route path="/teacherHomepage/forum">
//           <div>Đây là Diễn Đàn</div>
//         </Route>
//         <Route path="/teacherHomepage/class-list">
//           <div>Đây là danh sách lớp</div>
//         </Route>
//         <Route path="/teacherHomepage/dashboard">
//           <div>Đây là Dashboard</div>
//         </Route>
//         <Route path="/changePassWord">
//           <ChangePass />
//         </Route>
      </Switch>
    </Router>
  );
};
export default App;
