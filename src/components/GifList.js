import React from 'react'

export default class GifList extends React.Component {


    render() {
        let arr = [];

        this.props.gifs.forEach(gif => {
            arr.push(<li key={gif.id}><img alt='lit'  src={gif.images.original.url}/></li>)
        })

        // console.log(this.props.gifs);
        return (
            <div>
                <ul>
                    {arr}
                </ul>
            </div>
        )
    }
}