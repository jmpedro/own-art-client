import React, { useState } from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es';
import './ContentProfile.scss';

const ContentProfile = props => {

    // Obtenemos los campos del usuario
    const { user_data } = props;

    const { projects, user } = user_data;

    return (
        <Grid stretched>
            {
                projects.map( p => (
                    <Project key={p._id} data={p} name_user={user.name}  />
                ) )
            }
        </Grid>
    )

}

function Project(props) {

    const [favorite, setFavorite] = useState(false);

    const { data, name_user } = props;
    const { url_image, ratings, views, createdAt, _id } = data

    const handleSetFavorites = () => {

        setFavorite(!favorite);

    }

    return(
        <Grid.Column mobile={16} tablet={8} computer={8}>
            <Link to={`/${name_user}/gallery/${_id}`}>
            
                <div className='div_image' style={{ backgroundImage: `url(${url_image})` }} >
                
                    <div className='div_image_bottom'>
                        
                        <label>{ moment(createdAt).format("LL") }</label>

                        <div>

                            <label >
                                {ratings} 
                                <Icon name={ favorite ? 'heart' : 'heart outline'} onClick={handleSetFavorites}/>
                            </label>
                            {views} <Icon name='eye'/>
                            
                        </div>
                    

                    </div>

                </div>

            </Link>
            
        </Grid.Column >
    )

}

export default ContentProfile;