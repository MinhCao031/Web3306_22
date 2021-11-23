import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Messenger from "./messenger/Messenger";
import SignInForm from './SignInPage/SignInForm';
import StudentHomePage from './HomePage/StudentHomePage';
import TeacherHomePage from './HomePage/TeacherHomePage';
import ChangeInfoTeacher from './NavigationMenu/ChangeInfo/ChangeInfoTeacher';
import ChangePass from './NavigationMenu/ChangePass/ChangePass';
import ListOfStudents from './Lists/ListOfStudents/ListOfStudents';
import DashBoard from './Dashboard/Dashboard';
import TeacherForum from './Forum/TeacherForum';
import StudentForum from './Forum/StudentForum';
import ListOfClasses from './Lists/ListOfClasses/ListOfClasses';
import ClassList from './Lists/ClassList/ClassList';
const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/messenger">
          <Messenger />
        </Route>
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
              <TeacherForum />
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
          path="/studentHomepage/forum"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) &&
              JSON.parse(sessionStorage.getItem('user')).role === 'Student' ? (
              <StudentForum />
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
          path="/studentHomepage/classList"
          render={() => {
            return JSON.parse(sessionStorage.getItem('user')) &&
              JSON.parse(sessionStorage.getItem('user')).role === 'Student' ? (
              <ClassList />
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
