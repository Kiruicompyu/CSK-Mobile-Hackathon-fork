import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}> 
      <Text style={{
        fontSize: 24,
        marginBottom:10,
      }}>CSK Mobile Hackathon</Text>
      <Text style={{
        fontSize: 22,
        marginBottom:10,
      }}>Kirui Dev</Text>
      <Text style={{
        fontSize: 20,
      }}>Kirinyaga University</Text>
    </View>
  )
}
