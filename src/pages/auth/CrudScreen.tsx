import { Container } from "@mui/material";
import { CrudTableComponent, HeaderComponent } from "../../components";

export const CrudScreen = () => {
    return (
        <>
            <HeaderComponent
                title="Users CRUD"
                bgColor="#eeab6c"
                height={200}
                colorTitle="#1c1c1c"
                showButton={false}
            />
            <Container sx={{ mt: 4 }}>
                <CrudTableComponent />
            </Container>
        </>
    );
};