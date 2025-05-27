import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PageBackground from '../Components/PageBackground'
import Fonts from '../Constants/Fonts'
import { store } from '../Redux/Store'
import Header from '../Components/Header'

const Account = () => {

    useEffect(() => {
        console.log(store.getState()?.products, "->isdjgkjhj")
    })

    return (
        <PageBackground style={{flex:1}}>
            <Header/>
            <View>
                <Text style={{ fontFamily: Fonts.GilroyBold }}>Account</Text>
            </View>
        </PageBackground>

    )
}

export default Account

const styles = StyleSheet.create({

})