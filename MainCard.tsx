import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MainCardProps {
  loading: boolean;
}

export default function MainCard({ loading }: MainCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.message}>
        {loading ? 'Cargando...' : 'Contenido Listo!'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 24,
    marginVertical: 24,
    backgroundColor: '#EAF2FF',
    borderRadius: 16,
    alignItems: 'center',
  },
  message: {
    fontSize: 22,
    fontWeight: '700',
    color: '#17365D',
    textAlign: 'center',
  },
});