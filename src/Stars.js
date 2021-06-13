import React from 'react';
import ReactStars from 'react-stars'
import { render } from 'react-dom'



class Stars extends React.Component {
    render() {
        return (
            <ReactStars
            count={6}
            onChange={ratingChanged}
            size={80}
            color2={'#ffd700'} />
        )
    }
}
export default Stars;