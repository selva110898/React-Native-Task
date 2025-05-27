import React, { useState } from 'react'
import { Alert, Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import Accordion from '../Components/Accordion'
import { PrimaryButton } from '../Components/Buttons'
import Counter from '../Components/Counter'
import Header from '../Components/Header'
import ListItemValue from '../Components/ListItemValue'
import PageBackground from '../Components/PageBackground'
import TextDivider from '../Components/TextDivider'
import { actuatedNormalize } from '../Constants/PixelScaling'
import productImages from '../Constants/ProductImages'
import { updateProduct } from '../Redux/ProductsSlice'
import Fonts from '../Constants/Fonts'

const ProductDetail = (props) => {

    const { details, category } = props?.route.params

    const dispatch = useDispatch()

    const [cartCountofItem, setCartCountofItem] = useState(details?.totalNumbers)

    const [cartPriceOfItem, setCartPriceOfItem] = useState(details?.totalPrice || details?.price)

    const [isFavItem, setIsFavItem] = useState(details?.isFav)


    const onCounter = (type) => {

        let updatedCount = type == "INCREMENT" ? cartCountofItem + 1 : cartCountofItem - 1

        let updatedPrice = type == "INCREMENT" ? cartPriceOfItem + details?.price : cartPriceOfItem - details?.price

        setCartCountofItem(updatedCount)

        setCartPriceOfItem(updatedPrice)

        dispatch(updateProduct({
            category,
            product: details.product,
            type
        }));
    }

    const onFavourite = () => {

        let type = "FAVOURITE"

        setIsFavItem(!isFavItem)

        dispatch(updateProduct({
            category,
            product: details.product,
            type
        }))
    }

    return (


        <PageBackground containerStyle={{ paddingHorizontal: 0 }}>

            <StatusBar translucent backgroundColor={'rgba(242, 243, 242, 1)'} animated />

            <Header isRequiredSpacingAtTheTop />

            <View style={styles.imageView}>
                <Image
                    source={productImages[details?.product]}
                    resizeMode='contain'
                    style={{
                        width: '55%',
                        height: '100%',
                    }}
                />
            </View>

            <ScrollView style={styles.inputView}>

                <TextDivider
                    type='IN PAGE'
                    title={details?.productName}
                    text={`${details?.howMany}${details?.PromotionalTxt}`}
                    showlinkBtn
                    subInfoTxtStyle={{ marginTop: actuatedNormalize(4), fontWeight: "600" }}
                    linkButton={{
                        linkbtn: <Image source={isFavItem ? require(`../../assets/FavouriteSelected.png`) : require(`../../assets/Heart.png`)} height={actuatedNormalize(24)} width={actuatedNormalize(24)} />,
                        onPressLinkBtn: () => onFavourite()
                    }}
                    mainContainerStyle={{ marginTop: actuatedNormalize(20) }}
                />

                <Counter
                    type='BOTH'
                    price={cartPriceOfItem}
                    count={cartCountofItem}
                    mainContainerStyle={{ marginVertical: actuatedNormalize(30) }}
                    onPressIncrement={() => onCounter('INCREMENT')}
                    onPressDecrement={() => onCounter('DECREMENT')}
                />

                <View
                    style={{
                        height: 1,
                        backgroundColor: "rgba(226, 226, 226, 0.7)",
                        marginBottom: actuatedNormalize(20)
                    }}
                />

                <Accordion
                    label='Product Detail'
                    value={details?.ProductInfo}
                    mainContainerStyle={{ marginTop: actuatedNormalize(20) }}
                />

                <ListItemValue label='Nutritions' value={details?.nutrients} valueType="NUTRIENTS_BLOCK" />

                <ListItemValue label='Review' value={details?.ratings} valueType="RATING" />

            </ScrollView>

            <PrimaryButton
                label="Order Now"
                customPrimaryBtnStyle={{ marginBottom: actuatedNormalize(20), marginHorizontal: actuatedNormalize(25) }}
                onPressPrimaryBtn={() => props?.navigation.navigate('OrderSuccess')}
            />

        </PageBackground>

    )
}

export default ProductDetail

const styles = StyleSheet.create({
    inputView: {
        paddingHorizontal: actuatedNormalize(25)
    },
    imageView: {
        height: actuatedNormalize(240),
        backgroundColor: "#F2F3F2",
        borderBottomRightRadius: actuatedNormalize(25),
        borderBottomLeftRadius: actuatedNormalize(25),
        justifyContent: 'center',
        alignItems: 'center',
    }
})