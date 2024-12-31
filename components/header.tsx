import { View, type ViewProps, StyleSheet } from 'react-native';
import ThemedText from '@/components/themed-text';

export type HeaderProps = ViewProps & {
  title: string;
  sub?: boolean;
};

export default function Header({ title, sub = false, children, style, ...props }: HeaderProps) {
  return (
    <View style={[styles.header, style]} {...props}>
      <ThemedText type={sub ? 'subtitle' : 'title'}>{title}</ThemedText>
      {children}
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
