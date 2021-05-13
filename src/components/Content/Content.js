import React, { Component, useState } from 'react'
import { Grid, Label, Icon, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Content.scss';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { tools } from '../../api/tools';

class Content extends Component  {
    
    render() {
        
        const { allPosts, header } = this.props;
        

        return (
            <div className='content'>
                { allPosts &&  header && <h2>{header}</h2> }
                <Grid >

                    {
                        allPosts &&
                        <AllProjects posts={allPosts.posts}/>
                    }
                    
                </Grid>
            </div>
        )
    }
}

Content.propTypes = {
    allPosts: PropTypes.object,
    header: PropTypes.string,
}

function Project(props) {

    const [favorite, setFavorite] = useState(false);

    const { data, name, profile_image} = props;
    const { url_image, ratings, views, _id, categories } = data;

    // Filtramos las herramientas que esten en la publicacion
    const new_categories = [];

    // Una vez filtremos las herramientas, las añadimos a nuestro nuevo array
    categories.forEach(cat => {

        new_categories.push(tools.tools.filter( ts => cat === ts.name ))

    });

    // Marcar como favorito
    const handleSetFavorites = () => {

        setFavorite(!favorite);

    }    

    return(
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className='content_card' >

                <Segment >

                    <Link to={`/${name}/gallery/${_id}`}>
                        <div 
                            style={{ backgroundImage: `url(${url_image})` }}
                            className='content_card_image'>
                            
                            {/* Herramientas */}
                            <div className='content_card_image_icons'>

                                {
                                    new_categories.map( nwc => (
                                        <Image key={nwc[0].name} src={nwc[0].url_image}  />
                                    ))
                                }

                            </div>

                        </div>
                    </Link>
                    
                
                <div className='content_card_footer'>
                    
                    <div >
                        <Image 
                            src={profile_image}
                            avatar 
                            />
                        <Link to={`/${name}/projects`} >
                            <Label>{name}</Label> 
                        </Link>
                    </div>

                    <div className='content_card_footer_label'>
                        <label >
                            {ratings} 
                            <Icon name={ favorite ? 'heart' : 'heart outline'} onClick={handleSetFavorites}/>
                        </label>
                        {views} <Icon name='eye'/>
                    </div>

                </div>

                </Segment>
            </div>
        </Grid.Column >
    )

}

// Funcion para renderizar todos los proyectos
function AllProjects(props) {

    const { posts } = props;

    return(
        posts.map( p => (
            <Project key={p._id} data={p} name={p.user_id.name} profile_image={p.user_id.profile_image} />
        ) )
    )

}

export default withRouter(Content)