import { Pressable, StyleSheet } from 'react-native';
import { Layout, Section } from '@/components/layout';
import Header from '@/components/header';
import ThemedText from '@/components/themed-text';
import Ionicons from '@expo/vector-icons/Ionicons'
import ProjectCard from '@/components/project-card';

export default function Index() {
  return (
    <Layout>
      <Section>
        <Header title="Projects">
          <Pressable>
            <Ionicons name="add-outline" size={24} />
          </Pressable>
        </Header>
        <ProjectCard title="Roadmaps" milestone="1.0" />
      </Section>
      <Section>
        <Header title="Tasks" />
        <ThemedText><ThemedText style={{ fontWeight: 500 }}>Roadmaps</ThemedText>: Design home screen</ThemedText>
      </Section>
    </Layout>
  );
}

const styles = StyleSheet.create({
});
