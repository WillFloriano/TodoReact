import React from "react"
import Card from "./Card"

function DoneImg(props){

    if(props.done){
    return (<img alt="Done" src="./assets/ledverde.png"></img>)
    }else{
        return (<img alt="Undone" src="./assets/ledvermelho.png"></img>)
    }
}

function ListItem(props){
    
    return (<li >
            <Card className={props.item.done?"done item": "item undone"}>
            {props.item.text}
            <div>
            <button className="feito" onClick={(()=>{props.onDone(props.item)})}><DoneImg done={props.item.done}></DoneImg></button>
            <button className="excluir" onClick={()=>{props.onItemDeleted(props.item)}}><img alt="delete" src="./assets/excluir.png"></img></button>
            </div>
            </Card>
            </li>)
}


export default ListItem