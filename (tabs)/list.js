import { useContext } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AppContext } from "../_layout";

export default function List() {

  const { users } = useContext(AppContext);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Aucun utilisateur</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: "/detail", params: { id: item.id, nom: item.nom, email: item.email } })}
          >
            <Text style={styles.name}>{item.nom}</Text>
            <Text>{item.email}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    padding: 15,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
});