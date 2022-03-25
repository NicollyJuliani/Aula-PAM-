import React from'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
  
  return (
    <View style={styles.container}>
    <image 
    source={require('./assets/gato.jpeg')}
    style={estilo.image}
    />
    
    <Text Style= {estilo.texto }> Eu amo minha namorada </Text>
    < textIput style={estilo.entrada} placeholder='nome'
    placeholder='senha'
    placeholderTextColor='black'
    secureTextEntry = {true}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
