import React, { Component } from 'react'

class IngredientButton extends Component {
    render() {
        return (
            <div>
                <p classNmae="buttonTitle">{this.props.name}</p>
                <div className="ingrdientButtons">
                    <button className="ingrBtn">Add</button>
                    <button  className="ingrBtn">Remove</button>
                </div>
            </div>
        )
    }
}
//<button onClick={()=>this.addRemoveIngredient('add', 'lettuce')} className="ingrBtn">Add</button>
//<button onClick={()=>this.addRemoveIngredient('remove', 'lettuce')} className="ingrBtn">Remove</button>

export default IngredientButton
