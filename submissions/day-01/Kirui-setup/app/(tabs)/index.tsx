import { View, Text, StyleSheet } from 'react-native';


export default function Index() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>CSK-Mobile-Hackathon</Text>
      <Text style={styles.text}>Kirui Enock</Text>
      <Text style={styles.text}>Kirinyaga University</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#acc'
    },
    view: {
      flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
  }
)