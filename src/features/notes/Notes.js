import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { notesSelectors, notesSlice } from "./notesSlice"

export const Notes = () => {
    const notes = useSelector(notesSelectors.selectAll);
    const dispatch = useDispatch()

    const handleNoteSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const note = form.note?.value
        dispatch(notesSlice.actions.addNote({
            content: note,
            id: nanoid()
        }))
    }

    const handleRemoveNote = (id) => dispatch(notesSlice.actions.removeNote(id))

    return <div className="Notes">
        <h2>Notes pour la cuisine</h2>
        <form onSubmit={handleNoteSubmit}>
            <label>Saisir une note
                <textarea name="note"/>
            </label>
            <button type="submit" className="AddNote">Ajouter</button>
        </form>
        <ul className="NoteList">
            {
                notes && notes?.map((note) => <li key={note.id}>📝 {note.content} <button onClick={() => handleRemoveNote(note.id)}>Supprimer ❌</button></li>)
            }
        </ul>
    </div>
}