import React, { useState } from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import useTheme from '../../hooks/useTheme';
import './NavFilters.scss';
import Content from '../Content'
import Users from '../Users'
import { usersDB } from '../../api/users'


const NavFilters = props => {

    const { allPosts, header } = props;
    const [activeItem, setActiveItem] = useState('Proyectos');
    const { theme } = useTheme();

    const handleItemClick = (name) => {

        setActiveItem(name)

    } 

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
            {   activeItem === 'Proyectos' ? 
                <Content allPosts={allPosts} header={header} /> : 
                <Users usersDB={usersDB} header={'Todos los usuarios'} />
            }
           

        </>
    );

}

export default NavFilters;