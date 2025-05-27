import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Colors from '../Constants/Colors'
import Fonts from '../Constants/Fonts'


type InputProps = {
    type: 'AUTHENTICATION' | 'SEARCH'
    label: string
    value: string
    secure: boolean
    errorMsg: string
    placholderTxt: string
    isSearchInput: boolean,
    searchDataArray?: []
    searchTerms?: []
    afterSearchData?: (afterSearchDataArr: []) => void
    isProductsSearch: boolean
    mainContainerStyle: {}
    onChangeText: (val: string) => void
}

const Input = (props: InputProps) => {

    const { type, label, value, errorMsg, secure, placholderTxt, isSearchInput, searchDataArray, searchTerms, isProductsSearch, afterSearchData, mainContainerStyle, onChangeText } = props

    const searchData = useRef([]);

    const [toggleSecure, setToggleSecure] = useState(false)

    console.log(searchDataArray, "searchDataArraysearchDataArray")

    useEffect(() => {

        searchData.current = searchDataArray

    }, [])


    const onInputChange = (typedTxt: string) => {

        onChangeText(typedTxt)

        if (isSearchInput) {
            onSearch(typedTxt)
        }

    }

    const onSearch = (searchTxt: string) => {

        if (searchTxt != '') {

            console.log("seewfd;bdlkjn")
            
            let searchTxtLower = searchTxt.toLowerCase();

            let filteredData = searchData.current.filter(item => (searchTerms || []).some(term => String(item[term] || '').toLowerCase().includes(searchTxtLower)))

            console.log(filteredData, "FILTERER")

            afterSearchData(filteredData)

        } else {

             afterSearchData(searchData.current)

        }

    }


    let inputValueStyle = styles.inputVal

    let containerStyleBasedOnType = type == "AUTHENTICATION" ?
        {
            borderBottomColor: Colors.borderColor,
            borderBottomWidth: 1,
        } : {
            backgroundColor: "#F2F3F2",
            borderRadius: actuatedNormalize(15),
            paddingVertical: actuatedNormalize(6),
            paddingHorizontal: actuatedNormalize(16)

        }

    return (

        <View style={[{ marginTop: actuatedNormalize(30) }, mainContainerStyle]}>

            <Text style={styles.labelTxt}>{label}</Text>

            <View style={[{ flexDirection: "row" }, containerStyleBasedOnType]}>

                {type == 'SEARCH' &&
                    <Image source={require('../../assets/Search.png')}
                        width={actuatedNormalize(18)}
                        height={actuatedNormalize(18)}
                        style={{ alignSelf: "center", marginRight: actuatedNormalize(8) }}
                    />
                }

                <TextInput
                    style={[value ? inputValueStyle : { fontFamily: Fonts.GilroyBold }, { flex: 1 }]}
                    secureTextEntry={toggleSecure}
                    onChangeText={onInputChange}
                    value={value}
                    placeholder={placholderTxt}
                    placeholderTextColor={"rgba(124, 124, 124, 1)"}
                />

                {secure &&
                    <TouchableOpacity onPress={() => setToggleSecure(!toggleSecure)}>
                        <Image source={require('../../assets/SecureClose.png')}
                            width={actuatedNormalize(18)}
                            height={actuatedNormalize(18)}
                            style={{ alignSelf: "center", marginRight: actuatedNormalize(8) }}
                        />
                    </TouchableOpacity>
                }

            </View>

            {errorMsg && <Text style={{ color: 'red', marginTop: actuatedNormalize(10) }}>{errorMsg}</Text>}

        </View>
    )
}

export default Input

const styles = StyleSheet.create({

    authenticationStyleInput: {
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 1,
        height: actuatedNormalize(39),
    },
    labelTxt: {
        height: actuatedNormalize(29),
        fontSize: actuatedNormalize(16),
        color: Colors.secondaryTextColor,
        fontWeight: '600',
    },
    inputVal: {
        fontSize: actuatedNormalize(18),
        color: Colors.primaryTextColorBlack,
        fontFamily:Fonts.GilroyMedium,
        fontWeight:'400'
    }
})