import React, {Component} from 'react';
import Cartas from "./Cartas"

class Container extends Component{
      
  constructor(props){
    super(props);
    this.state={
      users:[],

    }
  }


  componentDidMount(){
      fetch("https://randomuser.me/api/?results=10")
        .then(r => r.json())
        .then((resultado)=>{
          this.setState({users: resultado.results})
        })
        .catch((e)=>{console.log(e)})
    }

    cambiarNumeroTarjetas=(numero)=>{
        fetch("https://randomuser.me/api/?results="+ numero )
            .then(r => r.json())
            .then((resultados)=>{
                this.setState({users: resultados.results})
            })
            .catch((e)=>{console.log(e)})
    }   

    eliminarTarjeta=(key)=>{
        let tarjetasRestantes=this.state.users.filter((tarjeta)=>{
            return tarjeta.login.uuid !== key;
        })
        this.setState({users: tarjetasRestantes })
    }

    filtrarTarjetas=()=>{
        var filtroNombre=document.querySelector('.filterByName').value
        var filtroApellido=document.querySelector('.filterByLastname').value
        var filtroEdad=document.querySelector('.filterByAge').value
        if (filtroNombre!==''){
            let resultadoBusqueda = this.state.users.filter((user)=>{
                return user.name.first.toLowerCase()===filtroNombre.toLowerCase();
            })
            this.setState({users:resultadoBusqueda})
        }
        else if (filtroApellido!==''){
            let resultadoBusqueda= this.state.users.filter((user)=>{
                return user.name.last.toLowerCase() === filtroApellido.toLowerCase();
            })
            this.setState({users:resultadoBusqueda})
        }
        else if (filtroEdad !== ''){
            let resultadoBusqueda = this.state.users.filter((user)=>{
                return user.dob.age === parseInt(filtroEdad);
            })
            this.setState({users:resultadoBusqueda})
        }
    }

  render(){
    return (
            <div className='card_container'>       
                  
                <div className='controles'>  
                <input type='number' placeholder='Nuevo numero tarjetas' className='numeroTarjetas'></input>
                <input type='submit' value='Fetch' onClick={()=>this.cambiarNumeroTarjetas(document.querySelector('.numeroTarjetas').value)}></input>  
                <input type='text' placeholder='Name' className='filterByName'></input>
                <input type='text' placeholder='Lastname' className='filterByLastname'></input>
                <input type='text' placeholder='Age' className='filterByAge'></input>
                <input type='button' value='Filter' onClick={this.filtrarTarjetas.bind(this)}></input>
                </div>
                <div className="cartas">
                {
                  this.state.users.map((user)=>{
                    return(
                        <Cartas 
                          key={ user.login.uuid} 
                          id= {user.login.uuid}
                          name={ user.name.first }
                          lastname= { user.name.last }
                          picture={ user.picture.large }
                          email= {user.email}
                          fnac={ user.dob.date.substr(0,10) }
                          edad= {user.dob.age}
                          direccion= {user.location}
                          register={user.registered.date.substr(0,10)}
                          telefono= {user.phone}
                          onDelete={this.eliminarTarjeta.bind(this)}
                        
                        />
                    )
                  })
                }
                
              </div>
            </div>
    );
  }
}

export default Container;