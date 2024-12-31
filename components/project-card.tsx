import { View, type ViewProps, StyleSheet } from 'react-native';
import Header from '@/components/header';
import ThemedText from '@/components/themed-text';

export type ProjectCardProps = ViewProps & {
  title: string;
  milestone: string;
};

export default function ProjectCard({ title, milestone, style, ...props }: ProjectCardProps) {
  return (
    <View style={[styles.card, style]} {...props}>
      <Header title={title} sub={true} />
      <ThemedText>{milestone}</ThemedText>
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
