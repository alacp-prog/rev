
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AppContext } from "./_layout";

export default function Detail() {
    const { id, nom, email } = useLocalSearchParams();
    const { deleteUser } = useContext(AppContext);
    const router = useRouter();

    const handleDelete = () => {
        deleteUser(id);
        router.back();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détail utilisateur</Text>
            <Text style={styles.label}>Nom :</Text>
            <Text>{nom}</Text>
            <Text style={styles.label}>Email :</Text>
            <Text>{email}</Text>
            <Button title="Supprimer" color="red" onPress={handleDelete} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    label: {
        fontWeight: "bold",
        marginTop: 10,
    },
});