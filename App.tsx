import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainCard from './MainCard';

export default function App() {
  const nombre = 'Denny';
  const apellido = 'Yules';
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Hello World by {nombre} {apellido}
        </Text>
        <MainCard loading={isLoading} />
        <Button
          title={isLoading ? 'Mostrar' : 'Cargar'}
          onPress={() => setIsLoading((valorAnterior) => !valorAnterior)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  content: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#162A46',
  },
});