import { View, Text, StyleSheet } from 'react-native';
import Header from '@/components/header';

export default function ProjectCard({ title, milestone }) {
  return (
    <View style={ styles.card }>
      <Header title={ title } sub={ true } />
      <Text>{ milestone }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    gap: 10,
    borderRadius: 3,
    backgroundColor: '#f84d78'
  }
});
