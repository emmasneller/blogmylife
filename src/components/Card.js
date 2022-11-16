import React from 'react';
import Button from './Button'

class Card extends React.Component{

    render(){
        return(
            <div className="c-card__wrapper">
                <div className="c-card__image"></div>
                <div className="c-card__details">
                    <div className="c-card__details-title">
                        {this.props.title}
                    </div>
                    <div className="c-card__details-content">
                        {this.props.content}
                    </div>
                    <Button text={this.props.buttonText}/>
                </div>
            </div>
        )
    }
}

export default Card