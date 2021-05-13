import React, { Component } from 'react'
import { user } from '../api/account';
import Header from '../components/Header'
import CarouselSector from '../components/CarouselSector'
import { sectors as sectorsDB } from '../api/sectors'

class DiscoverContainer extends Component {
    render() {

        const { sectors } = sectorsDB;

        return (
            <div>
                <Header user={user} />
                <CarouselSector data={sectors} />
            </div>
        )
    }
}

export default DiscoverContainer;