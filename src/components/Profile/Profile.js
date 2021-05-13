import React, { useState, useEffect } from 'react'
import { Segment, Icon, Image, Menu, Button, Modal } from 'semantic-ui-react'
import moment from 'moment'
import 'moment/locale/es';
import './Profile.scss'
import ContentProfile from './ContentProfile/ContentProfile';
import useTheme from '../../hooks/useTheme'
import About from './About/About';
import { usersDB } from '../../api/users';
import UsersFollow from '../Users/UsersFollow/UsersFollow';
import { withRouter, useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { favourites, user } from '../../api/account';

const Profile = props => {

    const { user } = props;
    const { theme } = useTheme();
    const query = useParams();
    const { place } = query;

    return(
        <div className='profile'>

            {/* Banner */}
            <Banner user_data={user} />
            
            <div className='profile_box'>
                {/* Card del usuario */}
                <DataUser user_data={user} theme={theme} />

                {/* Menu del perfil y contenido */}
                <MenuUser user_data={user} theme={theme} favourites={favourites} place={place} />
            </div>

        </div>
    );

}

// Banner y redes sociales del usuario
function Banner(props) {

    const { user_data } = props

    // Obtenemos las redes sociales del usuario
    let arraySocial = user_data.user.social_icons.filter( s => s.url_website );

    return(
        <div className='profile_banner' style={{ backgroundImage: `url(${user_data.user.profile_banner})` }}>
            <div className='profile_banner_icon'>
                <Icon name='pencil square' size='big' />
            </div>
            

            <div className='profile_banner_social'>
                {
                    arraySocial && 
                    arraySocial.map( s => (
                        <Image key={s._id} src={s.url_icon} avatar rounded href={s.url_website} />
                    ) )
                }
            </div>
            
            
        </div>
    )

}

// Card del usuario con su informacion
function DataUser(props) {

    const { user_data, theme } = props;
    const { user, projects } = user_data;
    const { profile_image, name, email, location, profile_views, ratings, followers, followed, about_me, createdAt } = user;

    // useState para abrir modal de los seguidores
    const [showModal, setShowModal] = useState(false);

    // useState para marcar el menu item activo
    const [activeItem, setActiveItem] = useState('Seguidores')

    const handleActive = name => {

        setActiveItem(name);

    }


    const openModal = () => {

        setShowModal(true)

    }

    const closeModal = () => {

        setShowModal(false);

    }

    return(
        <Segment className='data_user'>

            <Modal open={showModal} onClose={closeModal} size='small'>
                <Modal.Header style={{ background: theme ? '#010a10' : '#fff' }}>

                    <Menu 
                        secondary 
                        stackable
                        
                        inverted={ theme ? true : false }
                        style={{ margin: '0', display: 'flex', width: '25%', justifyContent: 'space-between' }}>

                        <Menu.Item 
                            name='Seguidores' 
                            active={ activeItem === 'Seguidores' }
                            onClick={ () => handleActive('Seguidores') }
                            color='blue'
                            style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }} />
                        <Menu.Item 
                            name='Siguiendo' 
                            active={ activeItem === 'Siguiendo' }
                            onClick={ () => handleActive('Siguiendo') }
                            color='blue'
                            style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }} />

                    </Menu>

                </Modal.Header>

                <Modal.Content scrolling style={{ background: theme ? '#010a10' : '#fff' }}>
                    <UsersFollow usersDB={usersDB} closeModal={closeModal} />
                </Modal.Content>
            </Modal>


            <Image src={profile_image} size='tiny' rounded/>
            <div className='profile_data_info' >
                <h2>{name}</h2>
                <span><Icon name='point' />{location}</span> <br/>
                <span><Icon name='mail' />{email}</span>

                <Icon className='icon_edit' name='pencil square' size='large'/>
            </div>

            <div className='profile_data_numbers'>
                
                <div>
                    <h4>Visitas al perfil</h4><label>{profile_views}</label> 
                </div>

                <div>
                    <h4>Publicaciones</h4><label>{projects.length}</label> 
                </div>
                
                <div>
                    <h4>Favoritos</h4><label>{ratings.length}</label> 
                </div>
                
                <div>
                    <h4>Seguidores</h4><label className='profile_data_numbers_follow' onClick={openModal}>{followers.length}</label> 
                </div>

                <div>
                    <h4>Siguiendo</h4><label className='profile_data_numbers_follow' onClick={openModal}>{followed.length}</label> 
                </div>
                
                <hr />

                <h3>Descripción</h3>
                <span>
                    {about_me}
                </span>

                <hr />

                <span style={{ marginTop: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    
                    <p style={{ marginRight: '5px', color: 'rgb(17, 121, 177)' }}>Miembro desde:</p> { moment(createdAt).format("LL") }

                </span>

            </div>
            
        </Segment>
    )

}

function MenuUser(props) {

    const { user_data, theme, place, favourites} = props;

    const [activeItem, setActiveItem] = useState('Publicaciones')

    const handleActive = name => {

        setActiveItem(name);

    }

    const items = [
        {
            "name": "Publicaciones",
            "key": "projects"
        },
        {
            "name": "Favoritos",
            "key": "favs"
        },
        {
            "name": "Acerca de",
            "key": "about"
        }
    ]

    return (
        <div className='menu'>
            <div className='menu_user'> 
            
                <Menu secondary inverted={theme ? true : false} stackable fluid>

                    <div>

                        {
                            items.map( (i, index) => (
                                <Link key={index} to={`/${user_data.user.name}/${i.key}`}>
                                    <Menu.Item 
                                        name={i.name} 
                                        color='blue'
                                        active={activeItem === i.name}
                                        onClick={() => handleActive(i.name)}
                                    />
                                </Link>
                            ))
                        }

                    </div>
                    
                    <div className='menu_user_buttons'>

                        <Button className='menu_user_buttons_chat'>
                            <Icon name='chat' size='large' />
                        </Button>

                        <Button className='menu_user_buttons_follow'>
                            Seguir
                            <Icon name='add circle' />
                        </Button>

                    </div>

                    

                </Menu>
            
            </div>

            <div style={{ width: '100%' }}>

                {
                    place === 'projects' && <ContentProfile user_data={user_data} />
                }

                {
                    place === 'favs' && <ContentProfile user_data={favourites} />
                }

                {
                    place === 'about' && <About user_data={user_data} />
                }
                
                
            </div>
            
        </div>
    )

}

export default withRouter(Profile)