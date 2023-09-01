export const LoginForm = () => {
    return (
        <>
            <section>
                <label htmlFor={"email"} className="email"  >Correo Electrónico</label>
                <input id={"email"}/>
            </section>
            <section>
                <label htmlFor={"password"} className="password"  >Contraseña</label>
                <input id={"password"}/>
            </section>
        </>
    )
}