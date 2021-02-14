import React, {useState} from "react"; 

function CreateArea(props) { 

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const {name, value} = event.target; 

        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]: value
            }


        })
    }

    function submitNote(event)
    {
        event.preventDefault();
        props.onAdd(note);

        setNote(
            {
                title: "",
                content: ""
            })

    }


    return(
        <div>
            <form>
                <input name = "title" onChange = {handleChange} value = {note.title} placeholder = "Title"/>
                <textarea name = "content" onChange = {handleChange} value = {note.content} placeholder = "Start new note" row = "3"/>
                <button onClick = {submitNote}>Add</button>


            </form>


        </div>
    )
}

export default CreateArea; 