import Button from "./Button";
import { View, StyleSheet } from 'react-native';
import Avatar from "./Avatar";
import TextContent from "./TextContent"


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1e1e1e",
        padding: 20,
        borderRadius: 16,
        margin: 16,
        alignItems: "center",
        width: 350,
        gap: 10,
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        color: "white",
        textAlign: "center",
    }
})
export default function Card({title, desc, buttonText}) {
    return (
        <View style={styles.card}>
            <Avatar imgSource="https://i.pravatar.cc/300" size={100} />
            <TextContent content={title} styling={styles.text} />
            <TextContent content={desc} styling={styles.text} />
            <Button title={buttonText} />
        </View>
    )
}

