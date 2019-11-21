import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
import API_KEY from '../api-key'




export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${API_KEY}&rating=g`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                gifs: data.data
            })
        });
    }

    search = (e) => {
        e.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target[0].value}&api_key=${API_KEY}&rating=g`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                gifs: data.data
            })
        });

    }

    render() {
        // console.log(this.state);

        return (
            <div>
                <GifSearch search={this.search} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}