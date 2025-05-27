import React, { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { actuatedNormalize } from '../Constants/PixelScaling'
import ProductsBlock from '../Components/ProductsBlock'
import Input from '../Components/Input'
import PageBackground from '../Components/PageBackground'
import Header from '../Components/Header'
import Categories from '../Data/ProductCategories.json'
import EmptyListView from '../Components/EmptyListView'
import categoryImages from '../Constants/CategoryImages'


const Explore = () => {

    const [productsData, setProductsData] = useState(Categories)

    return (

        <PageBackground containerStyle={{ paddingHorizontal: actuatedNormalize(12) }}>

            <Header title='Find Products' isRequiredSpacingAtTheTop />

            <Input
                type='SEARCH'
                placholderTxt={"Search Products"}
                searchTerms={['category']}
                isSearchInput
                searchDataArray={productsData}
                afterSearchData={(serachedData) => setProductsData(serachedData)}
                onChangeText={(val) => console.log(val)}
                mainContainerStyle={{ marginHorizontal: actuatedNormalize(8), marginTop: 0 }}
            />

            <FlatList
                data={productsData}
                numColumns={2}
                keyExtractor={(item) => item.category}
                ItemSeparatorComponent={() => (<View style={{ height: actuatedNormalize(14) }} />)}
                style={{ marginTop: actuatedNormalize(20) }}
                ListEmptyComponent={<EmptyListView />}
                ListFooterComponent={<View style={{ height: actuatedNormalize(20) }} />}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.productContainer}>
                            <ProductsBlock
                                title={item?.categoryName}
                                bgColor={item?.bgColor}
                                borderColor={item?.boderColor}
                                image={categoryImages[item?.category]}
                                txtAlignment='CENTER'
                            />
                        </View>
                    )
                }}
            />

        </PageBackground>
    )
}

export default Explore

const styles = StyleSheet.create({

    productContainer: {
        flex: 1,
        marginHorizontal: actuatedNormalize(8),
    }
})
