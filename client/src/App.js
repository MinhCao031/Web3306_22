import React from 'react';
import SignInForm from './SignInPage/SignInForm';
import StudentHomePage from './HomePage/StudentHomePage';
import TeacherHomePage from './HomePage/TeacherHomePage';
import ChangeInfoTeacher from './NavigationMenu/ChangeInfo/ChangeInfoTeacher';
import ChangePass from './NavigationMenu/ChangePass/ChangePass';
import Navbar from './HomePage/components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignInForm} />
        <Route path="/studentHomepage" exact component={StudentHomePage} />
        <Route path="/teacherHomepage" exact component={TeacherHomePage} />
        <Route path="/teacherHomepage/changeInfo" component={ChangeInfoTeacher} />
        <Route path="/teacherHomepage/forum">
          <div>Đây là Diễn Đàn</div>
        </Route>
        <Route path="/teacherHomepage/class-list">
          <div>Đây là danh sách lớp</div>
        </Route>
        <Route path="/teacherHomepage/dashboard">
          <div>Đây là Dashboard</div>
        </Route>
        <Route path="/changePassWord">
          <ChangePass />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;