import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const handleCalcular = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!precoAlcool || !precoGasolina) {
      return Alert.alert('Erro', 'Insira os preços válidos!');
    }

    const proporcao = precoAlcool / precoGasolina;

    if (proporcao < 0.7) {
      setResultado('Abasteça com Álcool');
    } else {
      setResultado('Abasteça com Gasolina');
    }
  };

  return (
    <View style={styles.container}>
     
      <Image source={require('./assets/carro.png')} style={styles.imagecar} />

      
      <Text style={styles.textinput}>Preço do Álcool (R$):</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={alcool}
        onChangeText={(text) => setAlcool(text)}
        placeholder="Ex: 4.19"
      />

      
      <Text style={styles.textinput}>Preço da Gasolina (R$):</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={gasolina}
        onChangeText={(text) => setGasolina(text)}
        placeholder="Ex: 6.29"
      />

     
      <TouchableOpacity style={styles.button} onPress={handleCalcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

     
      {resultado ? (
        <Text style={styles.resultado}>{resultado}</Text>
      ) : null}

     
      <Image source={require('./assets/bomba.webp')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#660000',
    padding: 20,
  },
  input: {
    backgroundColor: '#FFA400',
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  textinput:{
    color:'#E65F5C',
  },

  button: {
    backgroundColor: '#0F0326',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#E65F5C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 18,
    color: '#0F0326',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  imagecar: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});