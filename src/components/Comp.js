import React, { Component } from 'react';
import './styles.css';

export default class Comp extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    //public key: 4b43e5a1be21b6ba2643d5d0d03b925d
    //private key: 068a8381d297315693387929166da209e3636d4d

    //1068a8381d297315693387929166da209e3636d4d4b43e5a1be21b6ba2643d5d0d03b925d
    //hash: ee7cb7eb1ea1b3fcf66644af0d8aeec8

    componentDidMount(){
        fetch('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=4b43e5a1be21b6ba2643d5d0d03b925d&hash=ee7cb7eb1ea1b3fcf66644af0d8aeec8')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data.data.results);
                this.setState({
                    data: data.data.results
                })
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className='contcomp'>
                {
                    this.state.data.slice(2).map(marvel=>(
                        <div id='comics'>
                            <img src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`} className='contimg' alt='img' />
                            <p key={marvel.id}>{marvel.title}</p>
                        </div>
                        )
                    )
                }
            </div>
        )
    }
}