import { Text, type TextProps, StyleSheet, useColorScheme } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: keyof typeof textStyles
};

export default function ThemedText({ type = 'default', style, ...props }: ThemedTextProps) {
  const colorScheme = useColorScheme();

  return (
    <Text style={[colorScheme === 'dark' ? styles.dark : styles.light, styles[type], style]} {...props} />
  );
}

export const textStyles = {
  default: {
    fontSize: 16,
    lineHeight: 24
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600 as 600 // goofy ahh way to adhere to type union
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold' as 'bold',
    lineHeight: 32
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold' as 'bold'
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4'
  }
};

const themedStyles = {
  light: {
    color: '#11181c'
  },
  dark: {
    color: '#ecedee'
  }
}

const styles = StyleSheet.create({
  ...textStyles,
  ...themedStyles
});
