import React, { Component } from 'react'

class Counter extends Component {

    // state = {
    //     value: this.props.counter.value,
    //     tags: ["tags1","tags2","tags3"]
    //     // imageUrl: 'https://picsum.photos/200'
    // };
    
    //     renderTags(){
// if(this.state.tags.length ===0) return <p>There are no tags!</p>

// return <ul>
// {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
// </ul>
//     };

// handleIncrement = (product) => {
//     console.log(product);
//     // console.log('Increment Clicked', this);
//     this.setState({ value: this.state.value + 1})
// }

doHandleIncremtn = () => {
    this.handleIncrement({id : 1});
}

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    };
    render() {
        return (
            <div>
                {/* {this.state.tags.length ===0 && 'Please create new tags!'}
               {this.renderTags()} */}

               <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
               <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
               <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>);
    }

    // render() {
    //     return (
    //         <div>
 
    //             <ul>
    //                 {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //             </ul>
    //         </div>);
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;