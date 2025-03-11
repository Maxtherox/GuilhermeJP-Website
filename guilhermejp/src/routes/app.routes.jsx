import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Website } from "../pages/Website";
import { Hobbies } from "../pages/Hobbies";
import {NotFound} from "../pages/NotFound";

export function AppRoutes(){
    return(
        <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/projects" element={<Projects />}/>
            <Route  path="/website" element={<Website />}/>
            <Route  path="/hobbies" element={<Hobbies />}/>

            <Route path="*" element={<NotFound />}  />
        </Routes>
    )
}