import React, {useState} from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "./notes"
import CreateArea from "./CreateArea"
import { createNotEmittedStatement } from "typescript";

function App(){

    //test code 
    const [notes, setNotes] = useState([])

    function addNote(note){
        setNotes(prevNotes =>{
            return [...prevNotes, note];
        })


    }

    function deleteNote(id)
    {

        setNotes(prevNotes =>
            {
                return prevNotes.filter((notItem, index)=> {
                    return index !== id; 
                }
                )
            })


    }

    return(
        <div>
            <Header/>
            <CreateArea
            onAdd = {addNote}


            />

            {notes.map((noteItem,index) =>
            {
                return <Note
                key = {index} id = {index} title = {noteItem.title} content = {noteItem.content} onDelete = {deleteNote}

                />;
            })}

            <Footer/>
            <Note key = {1} title = "Note title" content = "Note content" />
        </div>
        );

}

export default App;