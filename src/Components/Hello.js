import React from 'react'

class Hello extends React.Component{
    render(){
        return(
            <center>
           <body background="https://media.istockphoto.com/photos/yellow-nature-background-picture-id1024230944?k=6&m=1024230944&s=612x612&w=0&h=xY4FarmmXF0M1VZuJyTDGTDb2_N_tMkqXooZzzsXhgE=">
            <h1>Hello {this.props.name}</h1></body>
            </center>
        )
    }
}

export default Hello