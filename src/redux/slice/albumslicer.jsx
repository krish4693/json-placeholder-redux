import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAlbum = createAsyncThunk("fetchAlbum", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    return data;
});

const albumSlice = createSlice({
    name: 'album',
    initialState: {
        isLoading: false,
        data: [],
        error: false,
        cart: [],
        isFetched: false,
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            console.log(state.cart);
            console.log("Cart length after add:", state.cart.length); // Debugging
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        removeFromAlbum: (state, action) => {
            state.data = state.data.filter(album => album.id !== action.payload.id);
        },
        addToAlbum: (state, action) => {
            state.data.push(action.payload);
        },
        setFetched: (state, action) => {
            state.isFetched = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbum.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAlbum.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isFetched = true;
        });
        builder.addCase(fetchAlbum.rejected, (state) => {
            state.error = true;
        });
    }
});

export const { addToCart, removeFromCart, removeFromAlbum, addToAlbum, setFetched } = albumSlice.actions;
export default albumSlice.reducer;
