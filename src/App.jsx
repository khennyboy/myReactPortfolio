import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"
import Allpage from "./pages/Allpage"
import { Toaster } from "react-hot-toast"
import './index.css'
import DarkModeProvider from "./pages/DarkmodeProvider"


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Allpage />}>
            </Route >
        </>

    ))
const App = () => {
    return (
        <DarkModeProvider>
            <RouterProvider router={router} />
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                    },
                }}
            />
        </DarkModeProvider>

    )
}

export default App