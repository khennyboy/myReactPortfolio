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
import 'aos/dist/aos.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Allpage />}>
            </Route >
        </>

    ))
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 3600
        }
    }
})

const App = () => {
    return (
        <DarkModeProvider>
            <QueryClientProvider client={queryClient}>
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
            </QueryClientProvider>

        </DarkModeProvider>

    )
}

export default App