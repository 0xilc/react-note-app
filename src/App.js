import React from "react";
import { Header, Notes, EditNote , CreateNote} from "./components";
import { useState , useEffect} from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import "./style/App.css";


const App = () => {

    const [keyword,setKeyword] = useState();

    return(
        <BrowserRouter>
            <div className="main" >
                <Header/>
                <Routes>
                    <Route path="/" element={<Notes/>}></Route>
                    <Route path="editnote/:id" element={<EditNote/>}></Route>
                    <Route path="createnote" element={<CreateNote/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );

}


export default App;