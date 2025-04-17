import { Container } from "@mui/material"
import { HeaderComponent, MarsPhotosComponent } from "../../components"

export const HomeScreen = () => {
    return (
        <>
            <HeaderComponent
                title="Mars Curiosity Rover Photos"
                bgColor="#e2ebe1"
                height={200}
                colorTitle="#1c1c1c"
                buttonText="Go to Details"
                onButtonClick={() => alert('Button clicked!')}
                showButton={true}
                sx={{ padding: 2, borderRadius: 2 }}
            />
            <Container sx={{ padding: 4 }} maxWidth="lg">
                <MarsPhotosComponent />
            </Container>
        </>
    )
}