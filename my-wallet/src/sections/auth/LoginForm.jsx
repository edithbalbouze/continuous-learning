import {useState} from "react";
import axios from "axios";
import Home from "../../components/Home";
import { useForm } from "react-hook-form";

export const LoginForm = () => {

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async ({email, password}) => {
        const { data } = await axios.post('https://implementaciones.pensanomica.com/clientes/flexio/API_Flexio/login_master', {
            email,
            password
        });
        const apiToken = data.data.api_token;

        localStorage.setItem('token', apiToken);
    }



    return (
        <div className="login">
            <div className="form-container">
                <img className="logo"  alt="logo" src='src/assets/logo-svg.svg'/>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor={"email"} className="label"  >Correo Electrónico</label>
                    <input className="input" id={"email"} placeholder="ejemplo@medine.tech" {...register("email")} />

                    <label htmlFor={"password"} className="label"  >Contraseña</label>
                    <input  className="input" type="password" id={"password"} placeholder="************" {...register("password")}/>

                    <button className="primary-button">Iniciar sesión</button>

                </form>
            </div>
        </div>
    )
}