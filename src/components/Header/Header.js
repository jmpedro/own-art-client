import React from 'react'
import { withRouter } from 'react-router'
import './Header.scss';
import { Menu, Input, Button, Icon, Label, Dropdown, Image } from 'semantic-ui-react'
import useTheme from '../../hooks/useTheme';
import logo_dark from '../../assets/logo_dark.png';
import logo_light from '../../assets/logo_light.png';


const Header = (props) => {
    
    const { theme, setTheme } = useTheme();
    const { user } = props;

    // INICIO
    const goHome = () => {
        props.history.push('/')
    }

    // PERFIL DEL USUARIO
    const goToProfile = () => {

       props.history.push(`/${user.user.name}/projects`);

    }

    // DESCUBRIR
    const goDiscover = () => {

        props.history.push('/discover');

    }

    // CREAR NUEVA PUBLICACION
    const goToNewPost = () => {

        props.history.push(`/${user.user.name}/new`);

    }

    // PERSONAS QUE SIGUES
    const goToFollowing = () => {

        props.history.push(`/${user.user.name}/following`);

    }

    // CERRAR SESION
    const logout = () => {

        props.history.push('/login')

    }

    return(
        <div>
            <Menu className='header' stackable>

                <Menu.Item className='header_logo' >
                    <Logo theme={theme} />
                </Menu.Item>

                <Menu.Item className='header_search'>
                    <Search goHome={goHome} goDiscover={goDiscover} goToFollowing={goToFollowing} />
                </Menu.Item>

                
                <Menu.Item className='header_account'>
                    
                    <Button onClick={goToNewPost}>
                        Nuevo
                    </Button>

                    <Account theme={theme} setTheme={setTheme} user={user.user} goToProfile={goToProfile} logout={logout} />
                    
                </Menu.Item>

            </Menu>
        </div>
    );

}

// LOGO
function Logo( props ) {

    const { theme} = props

    return(
        <div >
            <img src={ theme ? logo_dark : logo_light } alt='Logo OwnArt'/>
        </div>
    );
}

function Search(props) {

    const { goHome, goDiscover, goToFollowing } = props;

    return(
        <div className='header_search_container'>

            <div>
                <Input icon={{ name: "search", color: "blue" }}  iconPosition="left" placeholder="Busca en Own Art..." />
            </div>

            <div>
                <Label onClick={goHome}>Inicio</Label>
                <Label onClick={goDiscover}>Descubrir</Label>
                <Label onClick={goToFollowing}>Siguiendo</Label>
            </div>

        </div>
    );
}

function Account(props) {

    const { theme, setTheme, user, goToProfile, logout } = props;

    const { name } = user;

    

    return(
        <div className='header_account_container'>

            <div>
                <Icon name='mail' color='blue' size='large' />
                <Icon name='bell' color='blue' size='large' />
            </div>
            <Image 
                src='https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/jjmpedro/e11a6eec-f940-4190-b63e-c8170f66728c.PNG' 
                avatar/>

            <Dropdown >
                <Dropdown.Menu direction='left' className='drop-menu'>

                    <Dropdown.Item text={name} icon='user' description='Ver perfil' onClick={goToProfile} />
                    
                    <Dropdown.Item text='Ajustes' icon='settings'  />
                    
                    <Dropdown.Item text='Ayuda' icon='help'  />
                    
                    <Dropdown.Divider />

                    <Dropdown.Item  
                        icon={ theme ? 'sun' : 'moon' } 
                        text={ theme ? 'Modo claro' : 'Modo oscuro' } 
                        onClick={() => setTheme()}>
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    
                    <Dropdown.Item icon='shutdown' text='Cerrar sesión' onClick={logout}  />
                    
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
    
}

export default withRouter(Header);