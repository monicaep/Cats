import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatList.css';

class CatList extends Component {
    render() {
        return (
            <div className='CatList'>
                <h1 className='display-1 text-center my-3'>CATS</h1>
                <div className='container'>
                    <div className='row'>
                        {this.props.cats.map(cat => (
                            <div className='CatList-cat col-lg-4 text-center' key={cat.name}>
                                <img src={cat.src} alt={cat.name} />
                                <Link to={`/cats/${cat.name}`} className='CatList-name'>
                                    {cat.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default CatList;