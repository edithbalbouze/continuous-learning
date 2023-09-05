export const LoginForm = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img className="logo"  alt="logo" src='src/assets/logo-svg.svg'/>
                <form className="form">

                    <label htmlFor={"email"} className="label"  >Correo Electrónico</label>
                    <input className="input" id={"email"} placeholder="ejemplo@medine.tech"/>

                    <label htmlFor={"password"} className="label"  >Contraseña</label>
                    <input  className="input" id={"password"} placeholder="************"/>

                    <button className="primary-button">Iniciar sesión</button>

                </form>
            </div>
        </div>
    )
}