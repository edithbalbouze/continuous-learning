import {render, screen} from "@testing-library/react";
import {LoginForm} from "../../../src/sections/auth/LoginForm";

describe( "Test Login Form", () => {
    it('should show the component', () => {
        render(<LoginForm/>)
        expect(screen.getByLabelText("Correo Electrónico")).toBeDefined()
        expect(screen.getByLabelText("Contraseña")).toBeDefined()

    })
});