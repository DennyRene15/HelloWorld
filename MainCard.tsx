import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MainCardProps {
  loading: boolean;
}

export default function MainCard({ loading }: MainCardProps) {
  return (
    <View style={styles.card}>
      <Text>
        {loading ? 'Cargando...' : 'Contenido Listo!'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
});
