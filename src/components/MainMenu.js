import { MainMenuContainer } from "../styles/MainMenuContainer";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export const MainMenu = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: (
            <MainMenuContainer>
                <ul>
                    <Link to="">
                        <li>Home</li>
                    </Link>
                </ul>
            </MainMenuContainer>
          ),
        }
    ])

    return(
        <RouterProvider router={router} />
    )
};