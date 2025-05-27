// se establecera un router
import {
    createBrowserRouter,

} from "react-router";

import { ListStudents } from "./pages/listStudents/ListStudents";
import { StudentDetail } from "./pages/studentDetail/StudentDetail";
import App from "./App";
import { CreateStudent } from "./pages/createStudent/CreateStudent";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/list-students",
        Component: ListStudents,
        children: [
            { path: "student/:id", Component: StudentDetail },
        ]
    }, {
        path: "/create-student",
        Component: CreateStudent
    }
]);