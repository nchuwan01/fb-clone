import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed";
import "./App.css"
import Widgets from "./Widgets";
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {
    const [{user},dispatch]= useStateValue();
  return (
    <div className="app">
        {!user?(
            <Login/>
        ):(
            <>
                {/*Header */}
                <Header />

                <div className="app_body">

                    <Sidebar/>
                    <Feed />
                    <Widgets />
                    {/* Sidebar */}
                    {/* Feed */}
                    {/* widgets */}
                </div>
            </>


            )}

        {/*Body */}


        {/* sidebar*/}


        {/* feed */}


    </div>
  );
}

export default App;
