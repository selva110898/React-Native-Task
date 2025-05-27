import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Colors from '../Constants/Colors'
import Fonts from '../Constants/Fonts'

type AccordionProps = {
    label: string
    value: string
}

const Accordion = (props: AccordionProps) => {

    const { label, value } = props

    const [toogleAccordion, setToggleAccordion] = useState(false)

    return (

        <View>

            <TouchableOpacity style={styles.labelValContainer} onPress={() => setToggleAccordion(!toogleAccordion)}>

                <View style={{ flex: 1 }}>
                    <Text style={styles.labelTxt}>{label}</Text>
                </View>

                <Image source={toogleAccordion ? require('../../assets/ArrowDown.png') : require('../../assets/ArrowRight.png')} height={actuatedNormalize(24)} width={actuatedNormalize(24)} />

            </TouchableOpacity>

            {toogleAccordion && <Text style={styles.valueTxt}>{value}</Text>}

            <View style={styles.divider} />

        </View>
    )
}

const styles = StyleSheet.create({

    labelValContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    labelTxt: {
        fontSize: actuatedNormalize(16),
        color: Colors.primaryTextColorBlack,
        lineHeight: actuatedNormalize(18),
        fontWeight: '600',
    },
    valueTxt: {
        fontSize: actuatedNormalize(13),
        color: Colors.secondaryTextColor,
        lineHeight: actuatedNormalize(21),
        fontWeight: '400',
        fontFamily: Fonts.GilroyMedium,
        marginTop: actuatedNormalize(8)
    },
    divider: {
        height: 1,
        backgroundColor: "rgba(226, 226, 226, 0.7)",
        marginVertical: actuatedNormalize(20)
    }
})

export default Accordion