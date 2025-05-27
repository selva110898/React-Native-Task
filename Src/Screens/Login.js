import React, { useReducer, useState } from 'react'
import { Alert, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../Components/Buttons'
import Input from '../Components/Input'
import PageBackground from '../Components/PageBackground'
import TextDivider from '../Components/TextDivider'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Header from '../Components/Header'
import Fonts from '../Constants/Fonts'
import Colors from '../Constants/Colors'

const Login = (props) => {

    const initFormData = {

        email: {
            name: 'EMAIL',
            value: '',
            currentErrorMsg: '',
            shouldCheckRegexPattern: true,
            regexPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            errorMsgs: {
                mandatory: 'Please enter your email',
                regexPatternIncorrect: "Please enter correct email"
            }
        },
        password: {
            name: 'PASSWORD',
            value: '',
            currentErrorMsg: '',
            errorMsgs: {
                mandatory: 'Please enter the password',
            }
        }
    }

    const [formData, setFormData] = useState(initFormData)

    const onTextChange = (userTypevalue, type) => {

        setFormData((prev) => ({
            ...prev,
            [type]: {
                ...formData[type],
                value: userTypevalue,
                currentErrorMsg: ''
            }
        }))

    }

    const onsubmit = () => {

        let tempForData = { ...formData }

        let isFormValid = true

        for (let input in tempForData) {

            if (tempForData[input].value == "") {

                tempForData[input].currentErrorMsg = tempForData[input]?.errorMsgs?.mandatory

                isFormValid = false

            } else if (tempForData[input]?.shouldCheckRegexPattern && tempForData[input]?.regexPattern) {

                if (!tempForData[input]?.regexPattern.test(tempForData[input].value)) {

                    tempForData[input].currentErrorMsg = tempForData[input]?.errorMsgs?.regexPatternIncorrect

                    isFormValid = false

                }
            }
        }

        setFormData(tempForData)

        if (isFormValid) props?.navigation.navigate('Home')
    }


    return (

        <PageBackground type='DESIGNED'>

            <StatusBar translucent backgroundColor={"transparent"} />

            <View style={{ alignSelf: "center", marginTop: actuatedNormalize(80) }}>
                <Image source={require('../../assets/AppleRed.png')} />
            </View>

            <View style={styles.inputView}>

                <TextDivider
                    type='IN PAGE'
                    title='Loging'
                    text='Enter your emails and password'
                    headerTxtStyle={{ fontFamily: Fonts.GilroyBold, fontSize: actuatedNormalize(26) }}
                    subInfoTxtStyle={{ marginTop: actuatedNormalize(8) }}
                />

                <Input
                    label="Email"
                    value={formData.email.value}
                    errorMsg={formData.email.currentErrorMsg}
                    type="AUTHENTICATION"
                    onChangeText={(val) => onTextChange(val, "email")}
                />

                <Input
                    label="Password"
                    value={formData.password.value}
                    errorMsg={formData.password.currentErrorMsg}
                    type="AUTHENTICATION"
                    secure
                    onChangeText={(val) => onTextChange(val, "password")}
                    mainContainerStyle={{ marginBottom: actuatedNormalize(20) }}
                />

                <Text style={{ alignSelf: "flex-end", fontFamily: Fonts.GilroyMedium, fontSize: actuatedNormalize(14) }}>Forgot Password?</Text>

                <PrimaryButton
                    label="Login"
                    onPressPrimaryBtn={onsubmit}
                    customPrimaryBtnStyle={{ marginVertical: actuatedNormalize(20) }}
                />

                <Text style={{ alignSelf: "center", fontFamily: Fonts.GilroyBold }}>Don’t have an account ? <Text style={{ color: Colors.primayBackground }}>Singup</Text></Text>

            </View>

        </PageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    inputView: {
        marginTop: actuatedNormalize(60)
    }
})