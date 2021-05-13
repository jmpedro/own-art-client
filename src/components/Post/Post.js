import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Icon, Button, Segment, TextArea } from 'semantic-ui-react'
import MoreOfUser from './MoreOfUser/MoreOfUser';
import './Post.scss';

const Post = props => {

    const { publication, user_data, allPost } = props;
    const { user, projects } = user_data;

    return (
        <div className='post'>
            <Grid>
                <Grid.Column mobile={16} tablet={12} computer={11}>

                    <PublicationData publication={publication.views_publication} user={user} />

                </Grid.Column>
                <Grid.Column mobile={16} tablet={4} computer={5}>

                    {/* Mas del usuario */}
                    <h2 style={{ marginTop: '10px' }}>Más de { user.name } </h2>
                    <MoreOfUser projects={projects} />

                    {/* Recomendados */}
                    <h2 style={{ marginTop: '10px' }}>Recomendados para ti </h2>
                    <MoreOfUser projects={allPost.posts} />

                </Grid.Column>

            </Grid>
            
        </div>
    )
}

// IMAGEN E INFORMACION DE LA PUBLICACION
function PublicationData(props) {

    const { name, profile_image } = props.user;
    const { url_image, title, ratings, views, chats_id, createdAt, categories, labels } = props.publication

    return(
        <>
            <Image src={url_image} />   

            <div className='post_infoimage'>
                
                <h2>{ title }</h2>

                <div className='post_infoimage_right'>

                    <div>
                        <label> { ratings } <Icon name='heart outline' /> </label>
                        <label> { chats_id.length } <Icon name='chat' /> </label>
                        <label> { views } <Icon name='eye'/> </label>
                    </div>
                    

                    {/* Compartir y descargar la imagen */}
                    <div>
                        <Icon name='share' />
                        <Icon name='download' />
                        <Icon name='expand' />
                    </div>

                </div>

            </div>

            {/* Perfil del usuario con nombre, fecha de creacion y herramientas usadas */}
            <div className='post_info'>

                <Image src={profile_image} rounded />
                <div className='post_info_text'>

                    <div>
                        <label >{name}</label>
                        <Button><Icon name='user plus' /></Button>
                    </div>
                    
                    <label>Realizado con: <Link style={{ color: 'rgb(17, 121, 177)', cursor: 'pointer' }}> { categories.join(', ') } </Link> </label>

                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '40%'  }}>
                    <label style={{ color: 'grey' }}>
                        Publicado el { moment(createdAt).format("LL") }
                    </label>
                </div>
            </div>

            {/* Etiquetas usadas en la publicacion */}
            <div className='post_info_tags'>
                {
                    labels.map( l => (

                        <Link key={l}>
                            <Segment >
                                {l}
                            </Segment>
                        </Link>
                        
                    ) )
                }
            </div>

            <div className='post_info_comments'>
                <h3>Comentarios</h3>

                <div className='post_info_comments_user'>

                    <Image src={profile_image} avatar />
                    <label>{ name }</label>
                    
                </div>

                <div className='post_info_comments_send'>
                    <TextArea placeholder='Escribe un comentario'/>
                    <Button>Publicar</Button>
                </div>
                
                {

                    chats_id.map( chat => (
                        <>

                            <div className='post_info_comments_user'>

                                <Image src={chat.url_image} avatar />

                                <label>{ chat.name }</label>

                                <span style={{ color: 'grey', fontSize: '10px', marginLeft: '10px' }}>

                                    { moment(chat.createdAt).format("LL") }

                                </span>

                            </div>

                            <span style={{ marginLeft: '30px', width: '100%' }}>
                                { chat.message }
                            </span>

                        </>
                    ) )

                }

            </div>
        </>
    )

}

export default Post
