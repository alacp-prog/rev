import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";



export default function Index() {

    const router = useRouter(); // ✔️ correction


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Acceuil </Text>
      <TouchableOpacity 
        onPress={() => router.push('/(tabs)/list')}
      >
        <Text> Navifation </Text>
      </TouchableOpacity>
    </View>
  );
}
