import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChangeInfoTeacher from '../../NavigationMenu/ChangeInfo/ChangeInfoTeacher';
import ChangePass from '../../NavigationMenu/ChangePass/ChangePass';

export default function Content() {
  return (
    <Router>
      <Switch>
        <Route exact path="/teacherHomepage/changeInfo">
            <ChangeInfoTeacher />
        </Route>
        <Route exact path="/teacherHomepage/forum">
            <div>Đây là Diễn Đàn</div>
        </Route>
        <Route exact path="/teacherHomepage/class-list">
            <div>Đây là danh sách lớp</div>
        </Route>
        <Route exact path="/teacherHomepage/dashboard">
            <div>Đây là Dashboard</div>
        </Route>
        <Route exact path="/teacherHomepage/changePassword">
            <ChangePass />
        </Route>
      </Switch>
    </Router>
  );
}