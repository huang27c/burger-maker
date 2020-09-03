import React, { Component } from 'react'
import './Burger.css'


class burger extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             lettuce: 0,
             tomato: 0,
             cheese: 0,
             meat: 0
        }
    }

    addRemoveIngredient = (action, ingridient) => {
        let stateValue = this.state[ingridient];

        action === 'add' ? stateValue = stateValue + 1 : stateValue = stateValue - 1 

        this.setState({
            [ingridient]: stateValue < 0 ? 0 : stateValue
        })
    }

    showIngredient = (ingredient) => {
        let burger = []
        for(let i = 0; i < this.state[ingredient]; i++){
            burger.push(<div key = {i} className={ingredient}></div>)
        }

        return burger
    }

    burger = () => {
        let ingredients = ['lettuce', 'tomato', 'cheese', 'meat']
  
        return ingredients.map((ingredient, index) => {
            return (
                <div key ={index}>
                    {
                        this.showIngredient(ingredient)
                    }
                </div>
            )
        })
    }

     
    
    render() {
        let ingridients = ['lettuce', 'tomato', 'cheese', 'meat']
        return (
            <div>
                <div className="burgerIngredients"> 
                    <div className="topSide"></div> 
                        {this.burger()}
                    <div className="bottomSide"></div> 
                </div>

                <div className="ingredientsBlock">
                    {
                        ingridients.map((ingridient, index) => {
                            return(
                            <div key={index}>
                                <p>{ingridient}</p>
                                <div className="ingrdientButtons">
                                <button onClick={()=>this.addRemoveIngredient('add', ingridient)} className="ingrBtn">Add</button>
                                <button onClick={()=>this.addRemoveIngredient('remove', ingridient)} className="ingrBtn">Remove</button>
                                </div>
                            </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default burger