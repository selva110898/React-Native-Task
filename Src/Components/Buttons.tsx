import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import PrimaryColors from "../Constants/Colors"
import Colors from "../Constants/Colors"
import { actuatedNormalize } from "../Constants/PixelScaling"
import Fonts from "../Constants/Fonts"

type PrimaryButtonProps = {
    label: string,
    onPressPrimaryBtn?: () => void,
    customPrimaryBtnStyle?: {}
}
const PrimaryButton = (props: PrimaryButtonProps) => {

    const { label, onPressPrimaryBtn, customPrimaryBtnStyle } = props

    return (
        <TouchableOpacity style={[styles.mainView, customPrimaryBtnStyle]} onPress={onPressPrimaryBtn && onPressPrimaryBtn}>
            <Text style={styles.txtStyle}>{label}</Text>
        </TouchableOpacity>
    )
}

export {
    PrimaryButton
}
const styles = StyleSheet.create({
    mainView: {
        borderRadius: actuatedNormalize(19),
        backgroundColor: Colors.primayBackground,
        alignItems: "center",
        justifyContent: "center",
        height: actuatedNormalize(67),
    },
    txtStyle: {
        color: Colors.primaryTextColorWhite,
        fontFamily: Fonts.GilroyBold,
        fontSize: actuatedNormalize(18)
    }
})