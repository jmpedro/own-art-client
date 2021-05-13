import React from 'react'
import { Image, Form, Button, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { IMAGE_LOGIN, IMAGE_REGISTER } from '../../utils/constants';
import './Register.scss';
import useTheme from '../../hooks/useTheme';

const Register = () => {

    const { theme } = useTheme();

    return (
        <div className='register'>
            
            {/* Formulario */}
            <div className='register_form'>

                <h1>Bienvenid@ a Own Art</h1>
                <h4>Registro</h4>

                <Form inverted={ theme ? true : false }>

                    <Form.Field>
                        <label>Nombre de usuario</label>
                        <input placeholder='Nombre de usuario' />
                    </Form.Field>

                    <Form.Field>
                        <label>Correo electrónico</label>
                        <input placeholder='Correo electrónico' />
                    </Form.Field>

                    <Form.Field>
                        <label>Contraseña</label>
                        <input placeholder='Contraseña' type='password' />
                    </Form.Field>

                    <Form.Field>
                        <label>Repite tu contraseña</label>
                        <input placeholder='Repite tu contraseña' type='password' />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox label='He leído y acepto la Política de privacidad' />
                    </Form.Field>

                    <div className='register_form_action'>
                        <Button type='submit' >Registrarse</Button>
                        <span>Ya tienes cuenta? <Link to='/login'>Inicia sesión</Link> </span>
                    </div>

                </Form>

            </div>

            {/* Imagen */}
            <div className='register_image'>
                <Image src={IMAGE_REGISTER} />
            </div>

        </div>
    )
}

export default Register

