import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Colors from '../Constants/Colors'
import Fonts from '../Constants/Fonts'


type ListItemValueProps = {

    valueType: 'NUTRIENTS_BLOCK' | 'RATING' | 'DEFAULT' | 'CART'
    label: string
    value: any,
    price: string | number
}


const ListItemValue = (props: ListItemValueProps) => {

    const { label, value, price, valueType } = props

    return (

        <View style={styles.mainViewStyle}>

            <View style={styles.labelValContainer}>

                <View style={{ flex: 0.5 }}>
                    <Text style={styles.labelTxt}>{label}</Text>
                </View>

                <View style={{ flex: 0.5, alignItems: "flex-end" }}>

                    {
                        valueType == "NUTRIENTS_BLOCK" ?

                            <View style={styles.nutrientBlock}>
                                <Text style={{ fontSize: actuatedNormalize(9), fontWeight: "600", color: "rgba(124, 124, 124, 1)" }}>{value}</Text>
                            </View>

                            : valueType == "RATING" ?

                                <View style={{ flexDirection: "row", marginRight: actuatedNormalize(12) }}>

                                    {Array(value).fill(0)?.map((item, index) => {
                                        return (
                                            <Image
                                                source={require('../../assets/Star.png')}
                                                height={actuatedNormalize(24)}
                                                width={actuatedNormalize(24)}
                                                style={{ marginHorizontal: actuatedNormalize(4) }}
                                                key={index}
                                            />
                                        )
                                    })}

                                </View>

                                : valueType == "CART" ?

                                    <View style={{ width: actuatedNormalize(110), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                                        <View style={styles.badgeNotificationContainer}>
                                            <Text style={styles.badgeNotificationTxtStyle}>{value}</Text>
                                        </View>

                                        <View style={{ flexDirection: "row" }}>

                                            <Image
                                                source={require('../../assets/currency.png')}
                                                height={actuatedNormalize(17)}
                                                width={actuatedNormalize(17)}
                                                style={{ marginHorizontal: actuatedNormalize(8), alignSelf: "center" }}
                                            />

                                            <Text style={styles.amount}>{price}</Text>

                                        </View>

                                    </View>

                                    :

                                    <Text>{value}</Text>
                    }

                </View>

                {valueType !== "CART" &&
                    <Image source={require('../../assets/ArrowRight.png')} height={actuatedNormalize(24)} width={actuatedNormalize(24)} />
                }

            </View>

            <View style={styles.divider} />

        </View>
    )
}

const styles = StyleSheet.create({

    mainViewStyle: {},
    labelValContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    labelTxt: {
        fontSize: actuatedNormalize(16),
        color: Colors.primaryTextColorBlack,
        lineHeight: actuatedNormalize(18),
        fontWeight: '600'
    },
    valueTxt: {
        fontSize: actuatedNormalize(13),
        color: Colors.secondaryTextColor,
        lineHeight: actuatedNormalize(21),
        fontWeight: '400',
    },
    nutrientBlock: {
        backgroundColor: "rgba(235, 235, 235, 1)",
        borderRadius: actuatedNormalize(5),
        height: actuatedNormalize(16),
        width: actuatedNormalize(30),
        alignItems: "center",
        justifyContent: 'center',
        marginRight: actuatedNormalize(16)
    },
    divider: {
        height: 1,
        backgroundColor: "rgba(226, 226, 226, 0.7)",
        marginVertical: actuatedNormalize(16)
    },
    badgeNotificationContainer: {
        height: actuatedNormalize(32),
        width: actuatedNormalize(32),
        borderRadius: actuatedNormalize(10),
        backgroundColor: "gold",
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: "center",
        marginHorizontal: actuatedNormalize(8)
    },
    badgeNotificationTxtStyle: {
        fontSize: actuatedNormalize(16),
        fontWeight: '600',
        fontFamily: Fonts.GilroyBold
    },
    amount: {
        fontSize: actuatedNormalize(18),
        fontWeight: '600',
        color: Colors.primaryTextColorBlack,
        fontFamily: Fonts.GilroyBold,
    }
})

export default ListItemValue