import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title, sub = false, children }) {
  return (
    <View style={ styles.header }>
      <Text style={ sub ? styles.subheading : styles.heading }>{ title }</Text>
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: 32,
    fontWeight: 800
  },
  subheading: {
    fontSize: 20,
    fontWeight: 700
  }
});
