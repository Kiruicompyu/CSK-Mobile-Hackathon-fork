import {Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardButton: {
        width: 120,
        backgroundColor: "#0ff",
        color: "black",
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        elevation: 5,
        shadowColor: "red",
        shadowRadius: 6,
        shadowOpacity: 0.6,
    },
    text: {
        textAlign: "center",
    }
})
function Button({title}) {
    return (
        <Pressable style={styles.cardButton}>
            <Text style={styles.text}>{title} </Text>
        </Pressable>
    )
}

export default Button;