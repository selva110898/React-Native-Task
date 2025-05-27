import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Colors from '../Constants/Colors'
import Fonts from '../Constants/Fonts'

type CounterProps = {
    onPressIncrement?: () => void
    onPressDecrement?: () => void,
    type?: 'BOTH' | 'ONLY_INCREMENT',
    price?: string | number,
    count?: string | number
    mainContainerStyle?: {}
}

const Counter = (props: CounterProps) => {

    const { onPressIncrement, onPressDecrement, type, price, count, mainContainerStyle } = props

    return (

        <View style={[{ flexDirection: type == "BOTH" ? "row" : "row-reverse", justifyContent: "space-between", alignItems: "center" }, mainContainerStyle]}>

            {type == "BOTH" ?

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                    <TouchableOpacity onPress={onPressDecrement} style={{ justifyContent: "center", width: actuatedNormalize(30), marginRight: actuatedNormalize(10) }} disabled={Number(count) <= 0}>

                        <Image
                            source={require('../../assets/Decrement.png')}
                            height={actuatedNormalize(20)}
                            width={actuatedNormalize(17)}
                        />

                    </TouchableOpacity>

                    <View style={{ borderRadius: actuatedNormalize(17), height: actuatedNormalize(45), width: actuatedNormalize(45), borderWidth: 2, borderColor: 'rgba(226, 226, 226, 1)', alignItems: "center", justifyContent: 'center', marginRight: actuatedNormalize(20) }}>
                        <Text style={{ fontWeight: '600', color: Colors.primaryTextColorBlack }}>{count}</Text>
                    </View>

                    <TouchableOpacity onPress={onPressIncrement} style={{ alignSelf: "center" }} >

                        <Image
                            source={require('../../assets/Plus.png')}
                            height={actuatedNormalize(17)}
                            width={actuatedNormalize(17)}
                        />

                    </TouchableOpacity>

                </View>

                :

                <TouchableOpacity onPress={onPressIncrement} style={{ backgroundColor: Colors.primayBackground, borderRadius: actuatedNormalize(17), height: 45, width: 45, alignItems: "center", justifyContent: 'center' }}>

                    <Image
                        source={require('../../assets/PlusWhite.png')}
                        height={actuatedNormalize(17)}
                        width={actuatedNormalize(17)}
                    />

                </TouchableOpacity>
            }

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
    )
}

export default Counter

const styles = StyleSheet.create({
    amount: {
        fontSize: actuatedNormalize(18),
        fontWeight: '600',
        color: Colors.primaryTextColorBlack,
        fontFamily: Fonts.GilroyBold
    }
})