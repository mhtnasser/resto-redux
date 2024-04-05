import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const notesAdapter = createEntityAdapter({
    selectId: (note) => note.id, 
})

export const notesSlice = createSlice({
    name: "notes",
    initialState: notesAdapter.getInitialState(),
    reducers: {
        addNote: notesAdapter.addOne,
        removeNote: notesAdapter.removeOne,
        updateNote: notesAdapter.updateOne,
    }
})

export const notesSelectors = notesAdapter.getSelectors((state) => state.notes);