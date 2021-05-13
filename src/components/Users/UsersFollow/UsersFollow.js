import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'
import { allPosts } from '../../../api/account'
import './UsersFollow.scss'

const UsersFollow = props => {

    const { usersDB, closeModal } = props;
    const { finalFilters } = usersDB

    return (
        <div className='users-follow'>

            {
                finalFilters.map( user => (
                    <UserFollow key={user.uid} data={user} posts={allPosts.posts} closeModal={closeModal} />
                ) )
            }

        </div>
    )
}

function UserFollow(props) {

    const { data, posts, closeModal } = props;
    const { profile_image, name } = data

    return(

        <>
            <div className='users-follow_item'>

                {/* Imagen del usuario */}
                <Image src={profile_image} circular/>

                {/* Datos del usuario y boton de seguir */}
                <div className='users-follow_item_left'>

                    <Link to={`/${name}`} onClick={closeModal}> <label>{name}</label> </Link>

                    <button type='button'>Seguir</button>

                </div>
            
                {/* Algunas de las publicaciones del usuario */}
                <div className='users-follow_item_right'>

                    {
                        posts.map( (p, index) => (
                            index < 3 && <Link to={`/${name}/${p._id}`}> <Image key={p._id} src={p.url_image} rounded /> </Link>
                        ) )
                    }

                </div>

            </div>

            <hr />
            
        </>
    )

}

export default UsersFollow;
