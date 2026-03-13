import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const salvarCadastro = () => {
    Alert.alert('Sucesso', 'Registro salvo com sucesso!');
    setNome('');
    setEmail('');
    setTelefone('');
    setDataNascimento('');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#001f4d' }} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <StatusBar style="light" />

          <Text style={styles.titulo}>Cadastro de usuário</Text>

          <View style={styles.card}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#cccccc"
              value={nome}
              onChangeText={setNome}
            />

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#cccccc"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu telefone"
              placeholderTextColor="#cccccc"
              value={telefone}
              onChangeText={setTelefone}
            />

            <Text style={styles.label}>Data de nascimento</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              placeholderTextColor="#cccccc"
              value={dataNascimento}
              onChangeText={setDataNascimento}
            />

            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? '#72839b' : '#4080c0' },
                styles.botao
              ]}
              onPress={salvarCadastro}
            >
              <Text style={styles.textoBotao}>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  card: {
    width: '95%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#003366',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#ffffff',
  },
  input: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#104493',
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    color: '#091628',
  },
  botao: {
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});