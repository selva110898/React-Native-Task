import React, { JSX } from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Colors from '../Constants/Colors'
import Fonts from '../Constants/Fonts'


type HeaderProps = {
    leadingIcon?: JSX.Element
    title?: string
    trailingIcon?: JSX.Element
    headerStyle?: any
    isHomePage: boolean
    isRequiredSpacingAtTheTop: boolean
    onPressLeadingIcon?: () => void
    onPressTrailingIcon?: () => void
}

const Header = (props: HeaderProps) => {

    const { leadingIcon, title, isHomePage, trailingIcon, isRequiredSpacingAtTheTop, headerStyle } = props

    return (

        <View style={[styles.headerView, headerStyle, { marginTop: isRequiredSpacingAtTheTop && StatusBar.currentHeight }]}>

            <TouchableOpacity style={{ width: '14%' }}>
                {leadingIcon}
            </TouchableOpacity>

            <View style={{ width: '72%', alignItems: "center" }}>

                {title && <Text style={styles.headerTxtStyle}>{title}</Text>}

                {isHomePage &&

                    <View style={{ alignItems: "center" }}>

                        <Image source={require('../../assets/AppleRedSmall.png')} height={actuatedNormalize(24)} width={actuatedNormalize(24)} />

                        <View style={{ flexDirection: "row", marginTop: actuatedNormalize(10) }}>
                            <Image source={require('../../assets/location.png')} height={actuatedNormalize(24)} width={actuatedNormalize(24)} />
                            <Text style={styles.location}>Guindy, Chennai</Text>
                        </View>

                    </View>
                }

            </View>

            <TouchableOpacity style={{ width: '14%' }}>
                {trailingIcon}
            </TouchableOpacity>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    headerView: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerTxtStyle: {
        fontFamily: Fonts.GilroyBold,
        fontWeight: '400',
        fontSize: actuatedNormalize(20),
        color: Colors.primaryTextColorBlack,
        textAlign: "center",
        lineHeight: actuatedNormalize(18)
    },
    location: {
        color: Colors.secondaryTextColor,
        fontWeight: '400',
        fontFamily: Fonts.GilroyMedium,
        marginLeft: actuatedNormalize(8)
    }
})