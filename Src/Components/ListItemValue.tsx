import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Colors from '../Constants/Colors'


type ListItemValueProps = {
    label: string
    value: any
    valueType: 'NUTRIENTS_BLOCK' | 'RATING' | 'DEFAULT'
}


const ListItemValue = (props: ListItemValueProps) => {

    const { label, value, valueType } = props

    return (

        <View style={styles.mainViewStyle}>

            <View style={styles.labelValContainer}>

                <View style={{ flex: 0.5 }}>
                    <Text style={styles.labelTxt}>{label}</Text>
                </View>

                <View style={{ flex: 0.5, alignItems: "flex-end" }}>

                    {valueType == "NUTRIENTS_BLOCK" ?

                        <View style={{ backgroundColor: "rgba(235, 235, 235, 1)", borderRadius: actuatedNormalize(5), height: actuatedNormalize(16), width: actuatedNormalize(30), alignItems: "center", justifyContent: 'center', marginRight: actuatedNormalize(16) }}>
                            <Text style={{ fontSize: actuatedNormalize(9), fontWeight: "600", color: "rgba(124, 124, 124, 1)" }}>{value}</Text>
                        </View>

                        : valueType == "RATING" ?
                            <View style={{ flexDirection: "row", marginRight: actuatedNormalize(12) }}>
                                {Array(value).fill(0)?.map((item,index) => {
                                    return (<Image source={require('../../assets/Star.png')} height={actuatedNormalize(24)} width={actuatedNormalize(24)} style={{ marginHorizontal: actuatedNormalize(4) }} key={index}/>)
                                })}
                            </View>

                            : <Text>{value}</Text>
                    }

                </View>

                <Image source={require('../../assets/ArrowRight.png')} height={actuatedNormalize(24)} width={actuatedNormalize(24)} />

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
    divider: {
        height: 1,
        backgroundColor: "rgba(226, 226, 226, 0.7)",
        marginVertical: actuatedNormalize(16)
    },

})

export default ListItemValue