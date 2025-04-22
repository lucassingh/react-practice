import { Container } from "@mui/material"
import { HeaderComponent, MarsPhotosComponent } from "../../components"

export const ReactAdvancedScreen = () => {
    return (
        <div>
            <HeaderComponent
                title="React advanced"
                bgColor="#b494d3"
                height={200}
                colorTitle="#1c1c1c"
                showButton={true}
                buttonText="Go to Details"
                onButtonClick={() => alert('Button clicked!')}
            />
            <Container sx={{ padding: 4 }} maxWidth="lg">
                <MarsPhotosComponent />
            </Container>
        </div>
    )
}
