import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '../Components/Buttons'
import EmptyListView from '../Components/EmptyListView'
import Header from '../Components/Header'
import ListItemValue from '../Components/ListItemValue'
import PageBackground from '../Components/PageBackground'
import { actuatedNormalize } from '../Constants/PixelScaling'

const Cart = (props) => {

    const productList = useSelector((state) => state.products.value);

    let addedToCartItems = productList?.map((item) => {
        let favItems = item?.products?.filter((item1) => item1?.addedToCart);
        return favItems;
    }).flat().filter(item => item)

    let totaItemOfAllItemsInCart = addedToCartItems.map((item) => item?.totalNumbers).reduce((a, b) => { return a + b }, 0)

    let totaPriceOfAllItemsInCart = addedToCartItems.map((item) => item?.totalPrice).reduce((a, b) => { return a + b }, 0)

    return (

        <PageBackground>

            <Header isRequiredSpacingAtTheTop title='My cart' />

            <FlatList
                data={addedToCartItems}
                keyExtractor={(item) => item.product}
                ItemSeparatorComponent={() => (<View style={{ height: actuatedNormalize(14) }} />)}
                style={{ marginTop: actuatedNormalize(20) }}
                ListEmptyComponent={<EmptyListView content='No items in your cart' />}
                ListFooterComponent={<View style={{ height: actuatedNormalize(20) }} />}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <ListItemValue
                            valueType='CART'
                            label={item?.productName}
                            value={item?.totalNumbers}
                            price={item?.totalPrice}
                        />
                    )
                }}
            />


            {totaItemOfAllItemsInCart > 0 ?

                <>
                    <ListItemValue label={'Total Items & Price'} value={totaItemOfAllItemsInCart} price={totaPriceOfAllItemsInCart} valueType="CART" />

                    <PrimaryButton
                        label='Check Out Items in Cart'
                        onPressPrimaryBtn={() => props?.navigation?.push('OrderSuccess')}
                        customPrimaryBtnStyle={{ marginBottom: actuatedNormalize(20) }}
                    />

                </>

                : null
            }

        </PageBackground>
    )
}

export default Cart

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        marginHorizontal: actuatedNormalize(8),
        marginTop: actuatedNormalize(20)
    }
})
