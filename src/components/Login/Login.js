import React from 'react'
import { Image, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { IMAGE_LOGIN } from '../../utils/constants';
import './Login.scss';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import useTheme from '../../hooks/useTheme';

const Login = props => {

    const goHome = () => {

        props.history.push('/');

    }

    const { theme } = useTheme();

    return (
        <div className='login'>
            
            {/* Formulario */}
            <div className='login_form'>

                <h1>Bienvenid@ a Own Art</h1>

                <h4>Inicio de sesión</h4>

                <Form inverted={ theme ? true : false }>

                    <Form.Field>
                        <label>Correo electrónico</label>
                        <input placeholder='Correo electrónico' />
                    </Form.Field>

                    <Form.Field>
                        <label>Contraseña</label>
                        <input placeholder='Contraseña' />
                    </Form.Field>

                    <div className='login_form_action'>
                        <Button type='submit' onClick={goHome}>Iniciar sesión</Button>
                        <span>No tienes cuenta? <Link to='/register'>Regístrate</Link> </span>
                    </div>

                </Form>

            </div>

            {/* Imagen */}
            <div className='login_image'>
                <Image src={IMAGE_LOGIN} />
            </div>

        </div>
    )
}

export default withRouter(Login)
