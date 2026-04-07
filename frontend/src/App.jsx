import { Routes , Route } from "react-router-dom";
import  Home from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage";

const app =()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<ProjectPage/>}/>
        </Routes>
    )
}
export default app;