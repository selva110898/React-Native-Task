import { createSlice } from '@reduxjs/toolkit';
import Products from '../Data/Products.json';
import { Alert } from 'react-native';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: Products,
    },
    reducers: {
        updateProduct(state, action) {
            const { category, product, type } = action.payload;
            console.log(category, product, type, "-->TYPRCATEPRO")
            state.value = state.value.map(cat => {
                if (cat.category === category) {
                    return {
                        ...cat,
                        products: cat.products.map(prod => {
                            if (prod.product === product) {
                                if (type == "INCREMENT" || type == "DECREMENT") {
                                    let totalNumbers = prod.totalNumbers || 0;
                                    totalNumbers = type === 'INCREMENT' ? totalNumbers + 1 : Math.max(0, totalNumbers - 1);
                                    return {
                                        ...prod,
                                        totalNumbers,
                                        totalPrice: totalNumbers * prod.price,
                                        addedToCart: totalNumbers > 0 ? true : false
                                    };
                                } else if (type == "FAVOURITE") {
                                    return {
                                        ...prod,
                                        isFav: !prod?.isFav
                                    };
                                }
                            }
                            return prod;
                        }),
                    };
                }
                return cat;
            });
        },
    },
});

export const { updateProduct } = productSlice.actions;
export default productSlice.reducer;
