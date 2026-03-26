import { Text, StyleSheet } from 'react-native';

export default function TextContent({content, styling}) {
    return (
        <Text style={[styles.text, styling]}>{content}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontFamily: "monospace",
        fontSize: 20,
    }
})