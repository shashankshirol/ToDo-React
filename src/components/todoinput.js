import React, { Component } from 'react'

export default class todoinput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" 
                        placeholder="Add a todo item"
                        value={item}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit" 
                    className={
                        editItem ?
                        "btn btn-block text-capitalize btn-success mt-3":
                        "btn btn-block text-capitalize btn-primary mt-3"
                    }>
                    {editItem?'edit item' : 'add item'}
                    </button>
                </form>
            </div>
        )
    }
}
