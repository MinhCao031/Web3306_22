import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import SignInForm from './SignInPage/SignInForm';
import StudentHomePage from './HomePage/StudentHomePage';
import TeacherHomePage from './HomePage/TeacherHomePage';
import ChangeInfoTeacher from './NavigationMenu/ChangeInfo/ChangeInfoTeacher';
import ChangePass from './NavigationMenu/ChangePass/ChangePass';
import ListOfStudents from './Lists/ListOfStudents/ListOfStudents';
import DashBoard from './Dashboard/Dashboard';
import Forum from './Forum/Forum';
import ListOfClasses from './Lists/ListOfClasses/ListOfClasses';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignInForm />
        </Route>
        <Route
          exact
          path="/teacherHomepage"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) &&
              JSON.parse(sessionStorage.getItem('user')).role === 'Teacher' ? (
              <TeacherHomePage />
            ) : (
              <>
                {sessionStorage.clear()}
                <Redirect to="/" />
              </>
            );
          }}
        />
        <Route
          path="/teacherHomepage/forum"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) &&
              JSON.parse(sessionStorage.getItem('user')).role === 'Teacher' ? (
              <Forum />
            ) : (
              <>
                {sessionStorage.clear()}
                <Redirect to="/" />
              </>
            );
          }}
        />
        <Route
          exact
          path="/teacherHomepage/classList"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) &&
              JSON.parse(sessionStorage.getItem('user')).role === 'Teacher' ? (
              <ListOfClasses />
            ) : (
              <>
                {sessionStorage.clear()}
                <Redirect to="/" />
              </>
            );
          }}
        />
        <Route
          path="/teacherHomepage/classList/studentList"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) &&
              JSON.parse(sessionStorage.getItem('user')).role === 'Teacher' ? (
              <ListOfStudents />
            ) : (
              <>
                {sessionStorage.clear()}
                <Redirect to="/" />
              </>
            );
          }}
        />
        <Route
          path="/teacherHomepage/dashboard"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) &&
              JSON.parse(sessionStorage.getItem('user')).role === 'Teacher' ? (
              <DashBoard />
            ) : (
              <>
                {sessionStorage.clear()}
                <Redirect to="/" />
              </>
            );
          }}
        />
        <Route
          path="/changeInfo"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) ? (
              <ChangeInfoTeacher />
            ) : (
              <>
                {sessionStorage.clear()}
                <Redirect to="/" />
              </>
            );
          }}
        />
        <Route
          path="/changePassword"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) ? (
              <ChangePass />
            ) : (
              <>
                {sessionStorage.clear()}
                <Redirect to="/" />
              </>
            );
          }}
        />
        <Route
          exact
          path="/studentHomepage"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) &&
              JSON.parse(sessionStorage.getItem('user')).role === 'Student' ? (
              <StudentHomePage />
            ) : (
              <>
                {sessionStorage.clear()}
                <Redirect to="/" />
              </>
            );
          }}
        />
        <Route
          path="*"
          render={() => {
            return (
              <>
                {sessionStorage.clear()}
                <Redirect to="/" />
              </>
            );
          }}
        />
      </Switch>
    </Router>
  );
};
export default App;
