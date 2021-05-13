import React from 'react'
import { withRouter } from 'react-router';
import './MoreOfUser.scss';

const MoreOfUser = (props) => {

    const { projects } = props;

    const goToProfile = (name, id) => {

        props.history.push(`/${name}/gallery/${id}`);

    }

    return (
        <div className='more-of'>
            {
                projects.map( p => (
                    <MoreImages key={p._id} data={p} goToProfile={() => goToProfile(p.user_id.name, p._id)} />
                ) )
            }
        </div>
    )
}

function MoreImages(props) {

    const { data, goToProfile } = props;
    const { url_image } = data;

    return(
        <div className='more-images' style={{ backgroundImage: `url(${url_image})` }} onClick={goToProfile}>
                
        </div>
    )

}

export default withRouter(MoreOfUser);