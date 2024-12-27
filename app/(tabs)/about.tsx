import { Text, View, StyleSheet } from 'react-native';
import { Layout, Section } from '@/components/layout';
import Header from '@/components/header';

export default function AboutScreen() {
  return (
    <Layout>
      <Section>
        <Header title="About" />
        <Text>Roadmaps is an application to help keep track of the steps and milestones necessary to reach a goal.</Text>
      </Section>
    </Layout>
  );
}

const styles = StyleSheet.create({
});
