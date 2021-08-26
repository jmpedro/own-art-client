import React from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Users.scss'

const Users = (props) => {

    const { usersDB, header, projects } = props;
    const { finalFilters } = usersDB

    return (
        <div className='users'>

            <h2>{header}</h2>
            {
                finalFilters.map( (user, index) => (
                    <User key={user.email} data={user} posts={projects[index]} />
                ) )
            }
        </div>
    )
}

// Usuario
function User(props) {

    const { data, posts } = props;
    const { profile_image, name, location, followers, sectors } = data;
    console.log(posts);

    return(

        <>
            <div className='users_item'>

                {/* Imagen del usuario */}
                <Image src={profile_image} circular/>

                {/* Datos del usuario y boton de seguir */}
                <div className='users_item_left'>

                    <Link to={`/${name}/projects`}> <label>{name}</label> </Link>
                    <span> { location } </span>
                    <span> { sectors.join(',   ') } </span>

                    <div className='users_item_left_bottom'>
                        <button type='button'>Seguir</button>
                        
                        <p> {followers.length} seguidores</p>
                    </div>

                </div>

                {/* Algunas de las publicaciones del usuario */}
                <div className='users_item_right'>

                    {
                        posts.map( (p, index) => (
                            index < 4 && <Link to={`/${name}/gallery/${p._id}`}> <Image key={p._id} src={p.url_image} rounded /> </Link>
                        ) )
                    }

                </div>

            </div>

            <hr />
            
        </>
    )

}

export default Users
