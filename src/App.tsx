import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from "@mui/material"
import { NavigationComponent } from "./components"
import { Outlet } from "react-router-dom"

function App() {

	return (
		<>
			<CssBaseline />
			<NavigationComponent />
			<Outlet />
		</>
	)
}

export default App
