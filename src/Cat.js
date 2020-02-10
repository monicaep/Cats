import React, { Component } from 'react';
import './Cat.css';

class Cat extends Component {
    render() {
        let {cat} = this.props;
        return (
            <div className='container'>
                <div className='Cat row justify-content-center my-5'>
                    <div className='col-11 col-lg-5'>
                        <div className='Cat-card card'>
                            <img className='card-img-top' src={cat.src} alt={cat.name} />
                            <div className='card-body'>
                                <h2 className='card-title display-4'>{cat.name}</h2>
                                <h4 className='card-subtitle text-muted display-10'>{cat.nicknames}</h4>
                            </div>
                        
                            <div className='list-group'>
                                <div className='list-group-item'>
                                    <div className='d-flex w-100 justify-content-between'>
                                        <h5 className='mb-1'>Info</h5>
                                    </div>
                                    {cat.loves.map((love, i) => (
                                        <p className='mb-1' key={i}>
                                            <i className="fas fa-heart Cat-heart"/> {love}
                                        </p>
                                    ))}
                                    {cat.mischief.map((m, i) => (
                                        <p className='mb-1' key={i}>
                                            <i className="fas fa-exclamation-triangle Cat-caution"/> {m}
                                        </p>
                                    ))}
                                </div>
                                <div className='list-group-item'>
                                    <div className='d-flex w-100 justify-content-between'>
                                        <h5 className='mb-1'>How to Identify</h5>
                                    </div>
                                    {cat.identify.map((id, i) => (
                                        <p className='mb-1' key={i}>
                                            <i className="fas fa-paw"/> {id}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cat;