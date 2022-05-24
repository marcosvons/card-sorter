import React, {Component} from 'react';

class Cartas extends Component {

    constructor(props){
        super(props);
            this.state ={
                color: this.props.color
        }
    }

    girarTarjeta = () =>{
        var card=document.querySelectorAll('.card-inner');
        card.forEach((card)=>{
            card.classList.toggle('is-flipped');
        })
    }

    render(){
        return(
            <div className='card-inner'>
                <div className='frente-card card__face'>
                    <div className='card-content' >
                        <div className='buttonDelete'>
                            <button className='deleteCard' onClick={this.props.onDelete.bind(this, this.props.id)}>X</button>
                        </div>
                        <div className='card-header' onClick={this.girarTarjeta.bind(this)}>
                            <img src={this.props.picture} class='imagen'></img>
                            <h2>{ this.props.name }</h2>
                            <h2>{this.props.lastname}</h2>
                        </div>
                        <div className='card-body'>
                            <h3>{this.props.email}</h3>
                            <h3>{this.props.fnac}({this.props.edad})</h3>
                        </div>
                    </div>
                </div>
                <div className='card__face detalle-card'>
                    <p>{this.props.direccion.street.number} {this.props.direccion.street.name}</p>
                    <p>{this.props.direccion.city}, {this.props.direccion.state}</p>
                    <p>{this.props.direccion.country}</p>
                    <p>{this.props.direccion.postcode}</p>
                    <p>{this.props.register}</p>
                    <p>{this.props.telefono}</p>
                </div>
            </div>
        )
    };
}
export default Cartas;