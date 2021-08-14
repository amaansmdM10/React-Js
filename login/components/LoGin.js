import React, { Component } from 'react'
import Data from './Data'
class LoGin extends Component {
      constructor(props) {
            super(props)
      
            this.state = {
                       username:'',
                       password:'' ,
                       info:'Password Validator'
            }
            this.updationUser=this.updationUser.bind(this)
            this.updationPassword=this.updationPassword.bind(this)
            this.Validate=this.Validate.bind(this)
      }
      updationUser(event){
            this.setState({
                  username:event.target.value
            })
      }
      updationPassword(event){
            this.setState({
                  password:event.target.value
            })
      }
      Validate(){
            if(this.state.username=="root" && this.state.password=="toor"){
                  this.setState({
                        info:"Valid User"
                  })
            }else{
                  this.setState({
                        info:"Invalid User"
                  })
            }
      }
      render() {
            return (
                  <div>    
                        <h1>{this.state.info}</h1>
                        <input type="text" value={this.state.username} onChange={this.updationUser} /> 
                        <input type="text" value={this.state.password} onChange={this.updationPassword}/>
                        <Data validateHandler={this.Validate}/>
                  </div>
            )
      }
}

export default LoGin