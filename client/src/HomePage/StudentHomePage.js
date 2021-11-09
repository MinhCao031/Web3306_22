import React from 'react';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';

function StudentHomePage() {
    // const [sidebar, setSidebar] = useState(false);
    // const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <Sidebar />
            <NavigationBar />
        </div>
    )
}

export default StudentHomePage
