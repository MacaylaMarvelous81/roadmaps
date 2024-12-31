import { View, type ViewProps, StyleSheet } from 'react-native';

export default function Header({ style, ...props }: ViewProps) {
  return (
    <View style={[styles.header, style]} {...props} />
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
