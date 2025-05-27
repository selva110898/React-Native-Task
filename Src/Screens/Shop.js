import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import EmptyListView from '../Components/EmptyListView'
import Header from '../Components/Header'
import Input from '../Components/Input'
import PageBackground from '../Components/PageBackground'
import ProductsBlock from '../Components/ProductsBlock'
import TextDivider from '../Components/TextDivider'
import Colors from '../Constants/Colors'
import Fonts from '../Constants/Fonts'
import { actuatedNormalize } from '../Constants/PixelScaling'
import productImages from '../Constants/ProductImages'

const Shop = (props) => {

    const productList = useSelector((state) => state.products.value);

    useEffect(() => {
        setAllItems(productList)
    }, [productList])

    const [allItems, setAllItems] = useState([])



    const onAfterSearchPRoducts = (typedText) => {

        if (typedText != '') {

            let afterSearchArr = productList?.map((item) => {

                let foundItem = item?.products.filter(productItem => productItem?.productName?.toLowerCase().includes(typedText?.toLowerCase()))

                return { ...item, products: foundItem }

            })

            setAllItems(afterSearchArr)

        } else {

            setAllItems(productList)
        }
    }

    return (


        <PageBackground containerStyle={{ paddingHorizontal: actuatedNormalize(12) }}>

            <Header isHomePage={true} leadingIcon={<Image source={require('../../assets/HamburgerMenu.png')} />} isRequiredSpacingAtTheTop />

            <Input
                type='SEARCH'
                placholderTxt={"Search Store"}
                searchDataArray={allItems}
                afterSearchData={(searchedData) => setAllItems(searchedData)}
                onChangeText={(val) => onAfterSearchPRoducts(val)}
                mainContainerStyle={{ marginHorizontal: actuatedNormalize(0), marginTop: 0 }}
            />

            <ScrollView style={{ marginTop: actuatedNormalize(20) }} showsVerticalScrollIndicator={false}>

                <Image
                    source={require('../../assets/PromotionBanner.png')}
                    resizeMode='contain'
                    style={{ width: '100%' }}
                />

                {allItems.some((item) => item?.products.length > 0) ?

                    <>

                        <FlatList
                            data={allItems}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.category}
                            ItemSeparatorComponent={() => (<View style={{ height: actuatedNormalize(14) }} />)}
                            style={{ marginTop: actuatedNormalize(20) }}
                            renderItem={({ item, index }) => {
                                return (

                                    <View style={{ marginBottom: actuatedNormalize(10) }} key={index}>

                                        {item?.products.length > 0 ?
                                            <TextDivider
                                                type='PROMOTIONAL'
                                                title={item.promotionalTxt}
                                                showlinkBtn
                                                linkButton={{ linkbtn: <Text style={styles.linkBtnTxt}>See all</Text> }}
                                            />
                                            : null
                                        }

                                        <FlatList
                                            horizontal
                                            data={item.products}
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={(productItem, productIndex) => {
                                                return (
                                                    <View style={{ width: actuatedNormalize(168), marginRight: actuatedNormalize(18) }} key={productIndex + productItem?.item?.category}>
                                                        <ProductsBlock
                                                            title={productItem?.item?.productName}
                                                            subTitle={`${productItem?.item?.howMany}${productItem?.item?.PromotionalTxt}`}
                                                            image={productImages[productItem?.item?.product]}
                                                            counterRequired
                                                            wholeItem={productItem?.item}
                                                            category={item?.category}
                                                            onPressProduct={() => props?.navigation?.push('ProductDetail', { details: productItem?.item, category: item?.category })}
                                                        />
                                                    </View>
                                                )
                                            }}
                                        />

                                    </View>
                                )
                            }}
                        />

                    </>

                    :

                    <View style={{ marginVertical: actuatedNormalize(20) }}>
                        <EmptyListView />
                    </View>

                }
            </ScrollView>

        </PageBackground>
    )
}

export default Shop

const styles = StyleSheet.create({
    linkBtnTxt: {
        fontFamily: Fonts.GilroyMedium,
        fontWeight: '600',
        fontSize: actuatedNormalize(16),
        color: Colors.primayBackground,
        lineHeight: actuatedNormalize(18),
    }
})