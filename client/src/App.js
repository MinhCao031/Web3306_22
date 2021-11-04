import React from 'react';
import SignInForm from './SignInPage/SignInForm';
import StudentHomePage from './HomePage/StudentHomePage';
import TeacherHomePage from './HomePage/TeacherHomePage';
import ChangeInfoTeacher from './NavigationMenu/ChangeInfo/ChangeInfoTeacher';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Route path="/teacherHomepage/changeInfo" exact>
          <ChangeInfoTeacher />
        </Route>
        <Route path="/teacherHomepage/forum" exact>
          <div>Đây là Diễn Đàn</div>
        </Route>
        <Route path="/teacherHomepage/class-list" exact>
          <div>Đây là danh sách lớp</div>
        </Route>
        <Route path="/teacherHomepage/dashboard" exact>
          <div>Đây là Dashboard</div>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
