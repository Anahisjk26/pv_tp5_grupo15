import {
    createBrowserRouter,
} from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { ListStudents } from "./pages/listStudents/ListStudents";
import { StudentDetail } from "./pages/studentDetail/StudentDetail";
import { CreateStudent } from "./pages/createStudent/CreateStudent";
import { EditStudent } from "./pages/editStudent/EditStudent";
import App from "./App";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "list-students",
                element: <ListStudents />,

            },
            {
                path: "list-students/detail-student/:id",
                element: <StudentDetail />,
            },
            {
                path: "list-students/edit-student/:id",
                element: <EditStudent />
            },
            {
                path: "create-student",
                element: <CreateStudent />,
            }


        ],
    },
]);
