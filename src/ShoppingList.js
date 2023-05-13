import { Component } from "react";
import image from './bag.png';

export class ShoppingList extends Component {
        state = {
                        userInput: " ",
                        shoppingList: [ ]
    }
    onChangeEvent( e ){
        this.setState ({ userInput: e });
    }
    addItem( input ){
        if (input === " "){
            alert("Please enter an item");
        } else{
        let listArray = this.state.shoppingList;
        listArray.push( input )
        this.setState({ shoppingList: listArray, userInput:" " })
    }
    }
    deleteItem(){
        let listArray = this.state.shoppingList;
        listArray = [ ];
        this.setState({ shoppingList : listArray })
    }
    crossedWord(e){
        const li = e.target;
        li.classList.toggle("crossed");
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
            <form onSubmit = { this.onFormSubmit }>
                <div className="container">
                <input type="text"
                        placeholder="What do you want to buy?" 
                        onChange = {(event) => this.onChangeEvent(event.target.value)} 
                        value= { this.state.userInput } />
                </div>
                <div className="container">
                    <button onClick = { () => this.addItem( this.state.userInput )} className="btn add">Add</button>
                </div>
                <div>
                    <ul>
                        { this.state.shoppingList.map((item, index) => (
                            <li onClick = { this.crossedWord } key= { index }>
                                <img src= { image } alt="bag" width="30px" />{ item }</li>
                        ))}
                    </ul>
                </div>
                
                <div className="container">
                    <button  onClick = { () => this.deleteItem( this.state.userInput )} className="btn delete">Delete</button>
                </div>
            </form>
            </div>
        )
    }
}
