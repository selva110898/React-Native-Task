import { Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { Children, JSX, ReactNode } from 'react'
import { actuatedNormalize } from '../Constants/PixelScaling'

type Props = {
    children: ReactNode
    type: 'DESIGNED' | 'DEFAULT'
    containerStyle?: {}
}

const PageBackground = (props: Props) => {

    const { children, type, containerStyle } = props

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'}/>

            <ImageBackground
                source={type == "DESIGNED" ? require('../../assets/PageBgWithDesign.png') : null}
                resizeMode='stretch'
                style={[styles.imageBg, { flex: 1 }, containerStyle]} // <- Add { flex: 1 } here explicitly
            >

                {children}

            </ImageBackground>

        </SafeAreaView>

    )
}

export default PageBackground

const styles = StyleSheet.create({
    imageBg: {
        flex:1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        paddingHorizontal: actuatedNormalize(25),
        backgroundColor: "#FFFFFF"
    },
})
