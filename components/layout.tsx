import { View, StyleSheet } from 'react-native';

export function Layout({ children }) {
  return (
    <View style={ styles.layout }>
      { children }
    </View>
  );
}

export function Section({ children }) {
  return (
    <View style={ styles.section }>
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 16,
    gap: 10
  },
  section: {
    padding: 10,
    gap: 10
  }
});
