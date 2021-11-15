import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignInForm from './SignInPage/SignInForm';
import StudentHomePage from './HomePage/StudentHomePage';
import TeacherHomePage from './HomePage/TeacherHomePage';
import ChangeInfoTeacher from './NavigationMenu/ChangeInfo/ChangeInfoTeacher';
import ChangePass from './NavigationMenu/ChangePass/ChangePass';
import ListOfStudents from './Lists/ListOfStudents/ListOfStudents';
import DropdownAva from './HomePage/components/DropdownAva';
import DashBoard from './Dashboard/Dashboard';
import Forum from './Forum/Forum';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignInForm />
        </Route>
        <Route path="/studentHomepage" exact>
          <StudentHomePage />
        </Route>
        <Route path="/teacherHomepage" exact>
          <TeacherHomePage />
        </Route>
        <Route path="/teacherHomepage/forum">
          <Forum />
        </Route>
        <Route path="/teacherHomepage/class-list">
          <ListOfStudents />
        </Route>
        <Route path="/teacherHomepage/dashboard">
          <DashBoard />
        </Route>
        <Route path="/teacherHomepage/changeInfo">
          <ChangeInfoTeacher />
        </Route>
        <Route path="/teacherHomepage/FileInput">
          <div>Day la FileInput</div>
        </Route>
        <Route path="/teacherHomepage/changePassword">
          <ChangePass />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
