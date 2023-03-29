import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoginApi} from '../services/login';
import {styles} from './styles';

export const Login = () => {
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    password: '',
    status: '',
    showCupom: false,
  });

  const handleLogin = async () => {
    setLoading(true);

    const response = await LoginApi(login.email, login.password);

    if (response.status === 'ok') {
      setLogin({
        ...login,
        showCupom: true,
        status: undefined,
      });
    } else {
      setLogin({
        ...login,
        showCupom: false,
        status: 'Login ou senha incorretos!',
      });
    }

    setLoading(false);
  };

  function handleEmail(text) {
    setLogin({...login, email: text, status: ''});
  }

  function handlePassword(text) {
    setLogin({...login, password: text, status: ''});
  }

  function gerarCupom() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';

    let codigo = '';

    for (let i = 0; i < 4; i++) {
      codigo += letras.charAt(Math.floor(Math.random() * letras.length));
    }

    for (let i = 0; i < 4; i++) {
      codigo += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    return codigo;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Realize o login para gerar um cupom!
        </Text>
      </View>
      <TextInput
        style={styles.inputText}
        placeholder="Digite seu email"
        placeholderTextColor={'#aaa'}
        value={login.email}
        onChangeText={t => handleEmail(t)}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <TextInput
        ref={passwordRef}
        style={styles.inputText}
        placeholder="Digite sua senha"
        placeholderTextColor={'#aaa'}
        value={login.password}
        onChangeText={t => handlePassword(t)}
        secureTextEntry={true}
        onSubmitEditing={handleLogin}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.handlerLogin}>
        <Text style={styles.handlerLoginText}>
          {loading ? <ActivityIndicator color="#FFF" /> : 'Entrar'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.status}>{login.status}</Text>
      {login.showCupom === true && (
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle}>Codigo do Cupom: </Text>
          <Text style={styles.cupomCode}>{gerarCupom()}</Text>
        </View>
      )}
    </ScrollView>
  );
};
