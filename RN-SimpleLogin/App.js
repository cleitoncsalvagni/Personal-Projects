import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [showCupom, setShowCupom] = useState(false);

  const handleVerifyLogin = async () => {
    setStatus('');
    setShowCupom(false);

    const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await req.json();
    if (json.status == 'ok') {
      setStatus('Login realizado com sucesso!');
      setShowCupom(true);
    } else {
      setStatus('Login ou senha incorretos!');
      setShowCupom(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Desconto</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Digite seu email"
        value={email}
        onChangeText={t => setEmail(t)}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={t => setPassword(t)}
        secureTextEntry={true}
      />
      <Button title="Verificar" onPress={handleVerifyLogin} />
      <Text style={styles.status}>{status}</Text>
      {showCupom && (
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle}>Codigo do Cupom: </Text>
          <Text style={styles.cupomCode}>JDAK4910</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputText: {
    height: 45,
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#555',
    borderRadius: 5,
    marginBotton: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  status: {
    margin: 50,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  cupomArea: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 30,
  },
  cupomTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  cupomCode: {
    textAlign: 'center',
    fontSize: 40,
  },
});

export default App;
