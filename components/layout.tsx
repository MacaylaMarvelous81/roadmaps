import { ScrollView, type ScrollViewProps, View, type ViewProps, StyleSheet, useColorScheme } from 'react-native';

export function Layout({ style, ...props }: ScrollViewProps) {
  const colorScheme = useColorScheme();

  return (
    <ScrollView style={[colorScheme === 'dark' ? styles.dark : styles.light, styles.layout, style]} {...props}></ScrollView>
  );
}

export function Section({ style, ...props }: ViewProps) {
  const colorScheme = useColorScheme();

  return (
    <View style={[colorScheme === 'dark' ? styles.dark : styles.light, styles.section, style]} {...props}></View>
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
  },
  light: {
    backgroundColor: '#fff'
  },
  dark: {
    backgroundColor: '#151718'
  }
});
