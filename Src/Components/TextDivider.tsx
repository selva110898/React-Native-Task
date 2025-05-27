import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Colors from '../Constants/Colors'
import Fonts from '../Constants/Fonts'


type PropTypes = {
    type: 'IN PAGE' | 'PROMOTIONAL',
    title: string
    showSubTtitle?: boolean,
    text?: string
    showlinkBtn?: boolean,
    linkButton?: LinkButtonProps
    alignment?: 'CENTER' | 'LEFT'
    mainContainerStyle?: {},
    headerTxtStyle?: {},
    subInfoTxtStyle?: {}
}


type LinkButtonProps = {
    linkbtn: any
    onPressLinkBtn?: () => void
}

const TextDivider = (props: PropTypes) => {

    const { type, title, showSubTtitle = true, alignment = 'LEFT', text, showlinkBtn, linkButton, mainContainerStyle, headerTxtStyle, subInfoTxtStyle } = props

    const getSizesBasedOnType = () => {

        let currentTitleFontSize, currentSubTitleTxtFontSize, currentTitleLineHeightSize, currentSubTitleLineHeightSize

        switch (type) {

            case 'PROMOTIONAL':
                currentTitleFontSize = actuatedNormalize(24)
                currentSubTitleTxtFontSize = actuatedNormalize(16)
                break;

            case 'IN PAGE':
                currentTitleFontSize = actuatedNormalize(24)
                currentSubTitleTxtFontSize = actuatedNormalize(16)
                break;

            default:
                break;
        }

        return {
            titleFontSize: currentTitleFontSize,
            subTitleFontSize: currentSubTitleTxtFontSize,
            titleLineHeight: currentTitleLineHeightSize,
            subTitleLineHeight: currentSubTitleLineHeightSize
        }

    }

    const sizes = getSizesBasedOnType()

    let titleTxtStyle = {
        fontSize: sizes?.titleFontSize,
        lineHeight: sizes?.titleLineHeight,
    }

    let subTitleTxtStyle = {
        fontSize: sizes?.subTitleFontSize,
        lineHeight: sizes?.subTitleLineHeight
    }

    return (

        <View style={[styles.mainView, mainContainerStyle]}>

            {alignment == "LEFT" ?

                <>
                    <View style={[styles.secondaryContainer, { alignItems: 'center' }]}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            {title && <Text style={[styles.titleTxtStyle, titleTxtStyle, headerTxtStyle]}>{title}</Text>}
                        </View>

                        {showlinkBtn &&
                            <TouchableOpacity onPress={linkButton?.onPressLinkBtn}>
                                {linkButton?.linkbtn}
                            </TouchableOpacity>
                        }

                    </View>

                    {(showSubTtitle || text) && <Text style={[styles.subTxtStyle, subTitleTxtStyle, subInfoTxtStyle]}>{text}</Text>}

                </>


                :

                <View style={{ alignItems: "center" }}>
                    {title && <Text style={[styles.titleTxtStyle, titleTxtStyle, headerTxtStyle, { textAlign: 'center' }]}>{title}</Text>}
                    {(showSubTtitle || text) && <Text style={[styles.subTxtStyle, subTitleTxtStyle, subInfoTxtStyle, { textAlign: 'center' }]}>{text}</Text>}
                </View>
            }

        </View>

    )
}

const styles = StyleSheet.create({

    mainView: {
    },
    titleTxtStyle: {
        color: Colors.primaryTextColorBlack,
        fontWeight: '600',
    },
    subTxtStyle: {
        color: Colors.secondaryTextColor,
        fontWeight: '400',
        fontFamily: Fonts.GilroyMedium,
    },
    secondaryContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    }
})

export default React.memo(TextDivider)
