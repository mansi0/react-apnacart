import React, { Component } from 'react'
class AddItem extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productPrice: 0
        };


    }
    render() {
        return (
            <form className='row mb-5' >
                <div className="mb-3 col-4">
                    <label htmlFor="Input Name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" name='productName'
                        onChange={(e) => {
                            this.setState({
                                productName: e.currentTarget.value
                            })
                        }}
                        
                    value={this.state.productName} />

                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="inputePrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" name='productPrice'
                        onChange={(e) => {
                            this.setState({ productPrice: Number(e.currentTarget.value) })
                        }}
                        value={this.state.productPrice} />
                </div>
                <button type="submit" className="btn btn-primary col-4" onClick={(e) => {
                e.preventDefault()
                this.props.addItem(this.state.productName, Number(this.state.productPrice));
            }} >Add</button>
            </form>
        );
    }
}

export default AddItem;