import React, { useState, useEffect } from 'react'
import { Menu, Dropdown, Icon, Loader } from 'semantic-ui-react'
import useTheme from '../../hooks/useTheme';
import './NavFilters.scss';
import Content from '../Content'
import Users from '../Users'
import { getPostFromUserApi } from '../../api/post';

const NavFilters = props => {

    const { allPosts, header, usersDB } = props;
    const { theme } = useTheme();

    const [activeItem, setActiveItem] = useState('Proyectos');
    const [postUser, setPostUser] = useState(null);

    const handleItemClick = (name) => {

        setActiveItem(name)

    }

    useEffect(() => {
        ( async () => {

            let arrayPost = [];

            if( usersDB ) {

                for (const user of usersDB.finalFilters) {
        
                    const response = await getPostFromUserApi(user.name);
                    arrayPost.push(response.projects);
    
                }

            }

            setPostUser(arrayPost)
            
        } )()
    }, [activeItem === 'Usuarios'])

    return(
        <>
            <div className='nav-filters'>
                
                <div>
                    {/* Elegimos que queremos encontrar */}
                    <span>Elige que ver</span>
                    <div>
                        <Menu size='small' secondary stackable inverted={theme ? true : false} >

                            <Menu.Item 
                                className='color_item'
                                color='blue'
                                icon='bookmark' 
                                name='Proyectos' 
                                active={activeItem === 'Proyectos'}
                                onClick={() => handleItemClick('Proyectos')} />
                            <Menu.Item 
                                className='color_item'
                                color='blue'
                                icon='user' 
                                name='Usuarios' 
                                active={activeItem === 'Usuarios'}
                                onClick={() => handleItemClick('Usuarios')} />

                        </Menu>
                    </div>
                </div>
                
                
                <div>
                    {/* Clasificamos la busqueda */}
                    <span >Clasifica tu búsqueda </span>
                    <div className='nav-filters_categories'>

                        <div className='nav-filters_categories_item'>
                            <Icon name='list ul'/>
                            <Dropdown text='Categorías'>

                            </Dropdown>
                        </div>

                        <div className='nav-filters_categories_item'>
                            <Icon name='wrench'/>
                            <Dropdown text='Herramientas'>

                            </Dropdown>
                        </div>

                        <div className='nav-filters_categories_item'>
                            <Icon name='point'/>
                            <Dropdown text='Ubicación'>

                            </Dropdown>
                        </div>
                        
                    </div>
                </div>

                <div >
                    {/* Filtramos la busqueda */}
                    <span>Filtrar por </span>
                    <div>
                        <Dropdown text='Mas vistos' className='nav-filters_categories_item' >

                        </Dropdown>
                    </div>
                </div>

            </div>   

            {/* Contenido de los filtros */}
            {  
                activeItem === 'Proyectos' ? 
                <Content allPosts={allPosts} header={header} /> : 
                postUser.length > 0 ? 
                    <Users usersDB={usersDB} header={'Todos los usuarios'} projects={postUser} /> : 
                    <Loader active={true}><label>Cargando usuarios</label></Loader>
            }
           

        </>
    );

}

export default NavFilters;