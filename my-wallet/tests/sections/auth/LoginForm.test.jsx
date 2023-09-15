import {render, screen} from "@testing-library/react";
import {LoginForm} from "../../../src/sections/auth/LoginForm";
import userEvent from "@testing-library/user-event";
describe( "Test Login Form", () => {
    it('should show the component', async () => {
        render(<LoginForm/>)

        const email = await screen.findByLabelText(/Correo Electrónico/i);
        await  userEvent.type(email, "email@email.com")

        const password = await screen.findByLabelText(/Contraseña/i);
        await  userEvent.type(password, "123456")

        const button = await screen.findByRole("button", {name: /Iniciar sesión/i});
        await  userEvent.click(button)

        expect(await screen.getByAltText("logo")).toBeDefined()

    });
});
