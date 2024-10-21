import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
});

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    // extraReducer is basically a function in which builder is present -> through this we can listen to the changes to the fetchTodos.
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    },
});

export default todoSlice.reducer;