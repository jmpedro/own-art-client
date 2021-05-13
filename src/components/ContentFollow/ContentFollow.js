import React, { useState } from 'react'
import { Grid, Image, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './ContentFollow.scss'
import '../Content/Content.scss'

const ContentFollow = props => {

    const { allPosts, header } = props;

    return (
        <div className='content_follow'>
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

function AllProjects(props) {

    const { posts } = props;

    return(
        posts.map( p => (
            <Project key={p._id} data={p} name={p.user_id.name} profile_image={p.user_id.profile_image} />
        ) )
    )

}

function Project(props) {

    const [favorite, setFavorite] = useState(false);

    const { data, name, profile_image} = props;
    const { url_image, ratings, title, views, _id } = data

    // Marcar como favorito
    const handleSetFavorites = () => {

        setFavorite(!favorite);

    }    

    return(
        <Grid.Column mobile={16} tablet={8} computer={4}>

            <Link to={`/${name}/gallery/${_id}`}>
                <div className='content_follow_item' style={{ backgroundImage: `url(${url_image})` }} >

                    <div className='content_follow_item_bottom'>
                        <h3>{title}</h3>
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

                <div className='content_card_footer_label' >
                    <label >
                        {ratings} 
                        <Icon name={ favorite ? 'heart' : 'heart outline'} onClick={handleSetFavorites}/>
                    </label>
                    {views} <Icon name='eye'/>
                </div>
            </div>
        </Grid.Column >
    )

}

export default ContentFollow
