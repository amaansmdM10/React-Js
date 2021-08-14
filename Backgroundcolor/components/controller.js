import React,{ Component } from 'react'
import './Styles.css'

class Controller extends Component {
      
      constructor(props) {
            super(props)
      
            this.state = {
                   color:"",
                   name:'',
                   message:""
            }
            this.updations=this.updations.bind(this)
            this.ChangeBackground=this.ChangeBackground.bind(this)
      }
      updations(event){
            this.setState({
                  color:event.target.value
            })
      }
      ChangeBackground(){
            switch(this.state.color){
                  case "red":
                        this.setState({name:"redcolor",message:""})
                        break
                  case "aqua":
                        this.setState({name:"aquacolor",message:""})
                        break
                  case "black":
                        this.setState({name:"blackcolor",message:""})
                        break
                  case "orange":
                        this.setState({name:"orangecolor",message:""})
                        break
                  case "pink":
                        this.setState({name:"pinkcolor",message:""})
                        break
                  case "green":
                        this.setState({name:"greencolor",message:""})
                        break
                  default:
                        this.setState({message:"N0T Available { Red Black Aqua Orange Pink Green}"})
            }
      }
      render(){
            return (
                  <div>
                        <h1 className={`${this.state.name}  fonts`}>Text Color Changes Here</h1>
                        <input type="text" value={this.state.color} onChange={this.updations}/>
                        <div >{this.state.message}</div>
                        <div><button className="button" onClick={this.ChangeBackground} >Change Color</button></div>
                  </div>
            )
      }
}

export default Controller