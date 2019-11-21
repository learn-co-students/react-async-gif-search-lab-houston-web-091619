import React from 'react'

export default class GifSearch extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.search}>
                    <label>
                        Search: 
                        <input type="text" name="search" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}