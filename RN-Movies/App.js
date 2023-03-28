import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  Image,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  /*METODO POST
   const req = await fetch('https://jsonplaceholder.typicode.com/photos'),
      method: 'POST',
      body: JSON.stringify({
        title: titulo,
        body: descricao,
        userId: userId,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
  }
    const json = await req.json();
  */

  useEffect(() => {
    //METODO GET
    const requestPhotos = async () => {
      setLoading(true);
      const req = await fetch('https://jsonplaceholder.typicode.com/photos/');
      const json = await req.json();

      if (json) {
        setPhotos(json);
      }
      setLoading(false);
    };
    requestPhotos();
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      {loading && (
        <View style={Styles.loadingArea}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={Styles.loadingText}>Carregando...</Text>
        </View>
      )}

      {!loading && (
        <>
          <Text style={Styles.totalMoviesText}>
            Total de fotos: {photos.length}
          </Text>
          <FlatList
            style={Styles.list}
            data={photos}
            renderItem={({item}) => (
              <View style={Styles.movieItem}>
                <Image
                  source={{uri: item.url}}
                  style={Styles.movieImage}
                  resizeMode="contain"
                />
                <Text style={Styles.movieTitle}>{item.title}</Text>
              </View>
            )}
            keyExtractor={item => item.title}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  loadingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
  },
  totalMoviesText: {
    backgroundColor: '#333',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  movieItem: {
    marginBottom: 30,
  },
  movieImage: {
    height: 300,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default App;
