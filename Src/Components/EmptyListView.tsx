import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../Constants/PixelScaling'

type EmptyListViewProps = {
    content: string
}

const EmptyListView = (props: EmptyListViewProps) => {

    const { content } = props

    return (
        <View style={{ alignItems: "center", justifyContent: 'center' }}>
            <Text style={styles.emptyListTxt}>{content ?? "No Products Found"}</Text>
        </View>
    )
}

export default React.memo(EmptyListView)

const styles = StyleSheet.create({
    emptyListTxt: {
        fontSize: actuatedNormalize(18),
        color: 'red',
        marginVertical: actuatedNormalize(10),
        textAlign: 'center',
        lineHeight:actuatedNormalize(24)
    }
})