import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import PageBackground from '../Components/PageBackground'
import Header from '../Components/Header'
import { useSelector } from 'react-redux'
import ProductsBlock from '../Components/ProductsBlock'
import EmptyListView from '../Components/EmptyListView'
import { actuatedNormalize } from '../Constants/PixelScaling'
import productImages from '../Constants/ProductImages'

const Favourite = () => {

    const productList = useSelector((state) => state.products.value);

    let favProducts = productList?.map((item) => {
        let favItems = item?.products?.filter((item1) => item1?.isFav);
        return favItems;
    }).flat().filter(item => item)


    return (

        <PageBackground>

            <Header isRequiredSpacingAtTheTop title='Favourites' />

            <FlatList
                data={favProducts}
                numColumns={2}
                keyExtractor={(item) => item.product}
                ItemSeparatorComponent={() => (<View style={{ height: actuatedNormalize(14) }} />)}
                style={{ marginTop: actuatedNormalize(20) }}
                ListEmptyComponent={<EmptyListView content='No favourites yet , Please add your favourite items and come back' />}
                ListFooterComponent={<View style={{ height: actuatedNormalize(20) }} />}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (

                        <View style={styles.productContainer}>

                            <ProductsBlock
                                title={item?.productName}
                                image={productImages[item?.product]}
                                txtAlignment='CENTER'
                            />

                        </View>
                    )
                }}
            />
        </PageBackground>
    )
}

export default Favourite

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        marginHorizontal: actuatedNormalize(8),
        marginTop: actuatedNormalize(20)
    }
})
