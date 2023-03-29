import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },

  header: {
    textAlign: 'center',
    marginBottom: 30,
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },

  subtitle: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
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
    marginBottom: 10,
  },

  handlerLogin: {
    backgroundColor: 'green',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  handlerLoginText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },

  status: {
    marginTop: 25,
    color: '#E86969',
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
