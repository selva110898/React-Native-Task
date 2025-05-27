import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { actuatedNormalize } from '../Constants/PixelScaling';
import Fonts from '../Constants/Fonts';
import Colors from '../Constants/Colors';
import Counter from './Counter';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../Redux/ProductsSlice';

type ProductsBlockProps = {
    bgColor?: string
    borderColor?: string
    image?: any,
    title?: string,
    subTitle?: string,
    counterRequired?: boolean,
    txtAlignment?: 'LEFT' | 'CENTER',
    wholeItem?: any,
    category?: string,
    onPressProduct?: () => void
}

const ProductsBlock = (props: ProductsBlockProps) => {
    const {
        bgColor,
        borderColor,
        image,
        title,
        subTitle,
        counterRequired,
        txtAlignment,
        wholeItem,
        category,
        onPressProduct
    } = props;

    const dispatch = useDispatch();

    const onCounterItem = (type: string) => {
        dispatch(updateProduct({
            category,
            product: wholeItem.product,
            type,
        }));
    };

    return (
        <Pressable style={{
            borderColor: borderColor ?? "rgba(226, 226, 226, 1)",
            backgroundColor: bgColor ?? "#FFFFFF",
            borderRadius: actuatedNormalize(18),
            borderWidth: 1,
            paddingTop: actuatedNormalize(10),
        }}
            onPress={() => onPressProduct && onPressProduct()}
        >
            <View style={{ height: actuatedNormalize(100) }}>
                <Image
                    source={image}
                    style={{ width: actuatedNormalize(100), height: actuatedNormalize(100), alignSelf: 'center' }}
                    resizeMode="contain"
                />
            </View>

            <View style={{
                marginTop: actuatedNormalize(12),
                height: actuatedNormalize(44),
                marginBottom: actuatedNormalize(18),
                alignItems: txtAlignment === 'CENTER' ? 'center' : 'flex-start',
                marginLeft: txtAlignment === 'CENTER' ? 0 : actuatedNormalize(15)
            }}>
                <Text style={styles.boldTxt}>{title}</Text>
                <Text style={styles.subTxt}>{subTitle}</Text>
            </View>


            {counterRequired && (

                <Counter
                    price={wholeItem?.totalPrice || wholeItem?.price}
                    mainContainerStyle={{ marginBottom: actuatedNormalize(10), marginHorizontal: actuatedNormalize(15) }}
                    onPressIncrement={() => onCounterItem('INCREMENT')}
                    onPressDecrement={() => onCounterItem('DECREMENT')}
                />
            )}

        </Pressable>
    );
};

export default ProductsBlock;

const styles = StyleSheet.create({
    boldTxt: {
        fontFamily: Fonts.GilroyBold,
        fontWeight: '400',
        fontSize: actuatedNormalize(16),
        color: Colors.primaryTextColorBlack,
        lineHeight: actuatedNormalize(22),
        textAlign: "center",
        width:actuatedNormalize(125)
    },
    subTxt: {
        fontFamily: Fonts.GilroyMedium,
        fontWeight: '400',
        fontSize: actuatedNormalize(14),
        color: 'rgba(124, 124, 124, 1)',
        lineHeight: actuatedNormalize(18),
    },
});
