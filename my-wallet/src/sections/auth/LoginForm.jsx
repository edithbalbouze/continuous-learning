import {useState} from "react";
import axios from "axios";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = ({target}) => setEmail(target.value);
    const onChangePassword = ({target}) => setPassword(target.value);

    const handleLogin = async (event) => {
        event.preventDefault();

        const { data } = await axios.post('https://implementaciones.pensanomica.com/clientes/flexio/API_Flexio/login_master', {
            email,
            password
        });
        const apiToken = data.data.api_token;

        localStorage.setItem('token', apiToken);
    };


    return (
        <div className="login">
            <div className="form-container">
                <img className="logo"  alt="logo" src='src/assets/logo-svg.svg'/>
                <form className="form" onSubmit={handleLogin}>

                    <label htmlFor={"email"} className="label"  >Correo Electrónico</label>
                    <input className="input" id={"email"} placeholder="ejemplo@medine.tech" value={email} onChange={onChangeEmail} />

                    <label htmlFor={"password"} className="label"  >Contraseña</label>
                    <input  className="input" type="password" id={"password"} placeholder="************" value={password} onChange={onChangePassword} />

                    <button className="primary-button">Iniciar sesión</button>

                </form>
            </div>
        </div>
    )
}