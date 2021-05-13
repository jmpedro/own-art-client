import React from 'react'
import { Segment, Icon, Image } from 'semantic-ui-react'
import './About.scss';

const About = props => {

    const { user_data } = props;
    const { name, email, categories, sectors, url_website } = user_data.user;

    // Obtenemos las 

    return (
        <div className='about'>
            <Segment>
                <div className='about_edit'>
                    <Icon name='pencil'/>
                </div>
                {/* USUARIO */}
                <div className='about_item'>
                    <span>
                        <Icon name='user'/>
                        Usuario   
                    </span> 
                    <span>{name}</span>
                </div>

                {/* CORREO */}
                <div className='about_item'>
                    <span>
                        <Icon name='mail'/>
                        Correo   
                    </span> 
                    <span>{email}</span>
                </div>

                {/* TRABAJA DE */}
                <div className='about_item'>
                    <span>
                        <Icon name='tv'/>
                        Sectores   
                    </span> 
                    <span>{
                        
                        sectors.toString().replaceAll(',',', ')

                    }</span>
                </div>

                {/* CORREO */}
                <div className='about_item'>
                    <span>
                        <Icon name='world'/>
                        Sitio web   
                    </span> 
                    <a href={url_website} target='blanc' style={{ color: 'rgb(17, 121, 177)' }}>{url_website}</a>
                </div>

                {/* HERRAMIENTAS */}
                <div className='about_item'>
                    <span>
                        <Icon name='wrench'/>
                        Herramientas   
                    </span> 
                    <span>{
                        categories.map( c => (
                            <Tools key={c.name} data={c} />
                        ) )
                    }</span>
                </div>

            </Segment>
        </div>
    );

}

function Tools(props) {

    const { data } = props;


    return(
        <div style={{ display: 'flex', marginRight: '10px', fontSize: '10px', flexWrap: 'wrap' }}>
            <Image src={data.url_image} avatar />
            <span>{data.name}</span>
        </div>
    )

}

export default About;