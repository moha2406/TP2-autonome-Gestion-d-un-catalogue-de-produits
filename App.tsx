
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catalogue de produits</Text>

      <Text style={styles.info}>
        Produits disponibles : 3
      </Text>

      <Text style={styles.info}>
        Valeur du stock : 1960 MAD
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  info: {
    fontSize: 18,
    marginBottom: 15,
  },
});
