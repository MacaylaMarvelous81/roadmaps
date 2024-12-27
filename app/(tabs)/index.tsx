import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Layout, Section } from '@/components/layout';
import Header from '@/components/header';
import Ionicons from '@expo/vector-icons/Ionicons'
import ProjectCard from '@/components/project-card';

export default function Index() {
  return (
    <Layout>
      <Section>
        <Header title="Projects">
          <Pressable>
            <Ionicons name="add-outline" size={ 24 } />
          </Pressable>
        </Header>
        <ProjectCard title="Roadmaps" milestone="1.0" />
      </Section>
      <Section>
        <Header title="Tasks" />
        <Text><Text style={ { fontWeight: 500 } }>Roadmaps</Text>: Design home screen</Text>
      </Section>
    </Layout>
  );
}

const styles = StyleSheet.create({
});
