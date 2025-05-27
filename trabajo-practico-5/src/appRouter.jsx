import {
    createBrowserRouter,
} from "react-router";

import { MainLayout } from "./layouts/MainLayout";
import { ListStudents } from "./pages/listStudents/ListStudents";
import { StudentDetail } from "./pages/studentDetail/StudentDetail";
import { CreateStudent } from "./pages/createStudent/CreateStudent";
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
                children: [
                    {
                        path: "student/:id",
                        element: <StudentDetail />,
                    },
                ],
            },
            {
                path: "create-student",
                element: <CreateStudent />,
            },
        ],
    },
]);
