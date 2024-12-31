import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { Layout, Section } from '@/components/layout';
import Header from '@/components/header';
import ThemedText from '@/components/themed-text';
import Ionicons from '@expo/vector-icons/Ionicons'
import ProjectCard from '@/components/project-card';

export default function Index() {
  const colorScheme = useColorScheme();

  return (
    <Layout>
      <Section>
        <Header>
          <ThemedText type="title">Projects</ThemedText>
          <Pressable>
            <Ionicons name="add-outline" size={24} color={colorScheme === 'dark' ? '#ecedee' : '#11181c'} />
          </Pressable>
        </Header>
        <ProjectCard title="Roadmaps" milestone="1.0" />
      </Section>
      <Section>
        <Header>
          <ThemedText type="title">Tasks</ThemedText>
        </Header>
        <ThemedText><ThemedText style={{ fontWeight: 500 }}>Roadmaps</ThemedText>: Design home screen</ThemedText>
      </Section>
    </Layout>
  );
}

const styles = StyleSheet.create({
});
