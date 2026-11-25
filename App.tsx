import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MainCard from './MainCard';

export default function App() {
  const nombre = 'Denny';
  const apellido = 'Rene';
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Text>Hello World by {nombre} {apellido}</Text>

      <MainCard loading={isLoading} />

      <Button
        title={isLoading ? 'Mostrar' : 'Cargar'}
        onPress={() => setIsLoading(!isLoading)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
