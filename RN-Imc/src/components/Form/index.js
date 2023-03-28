import { View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList } from 'react-native';
import ResultImc from './ResultImc';
import React, { useState } from 'react';
import styles from './style';

export default function Form() {

const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageImc, setMessageImc] = useState("Preencha o peso e altura!");
const [textButton, setTextButton] = useState("Calcular");
const [imc, setImc] = useState(null);
const [errorMessage, setErrorMessage] = useState (null);
const [imcList, setImcList] = useState([]);

function imcCalculator() {
    let totalImc = ((weight / (height * height)).toFixed(2));
    setImcList ((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}]);
    setImc(totalImc);
}

function verificationImc() {
    if(imc == null) {
        Vibration.vibrate();
        setErrorMessage("Campos Obrigatórios!");
    }
}

function validationImc(){
    console.log();
    if (!weight != null && height != null) {
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setTextButton("Calcular Novamente");
        setMessageImc("Seu Imc é igual a:");
        setErrorMessage(null)
    } else {
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura!")    
    }
}

return (
<View style={styles.formContext}>
    {imc == null ? 
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
                style={styles.input}
                onChangeText={ (text) => setHeight(text.replace(",",".") )}
                value={height}
                placeholder= "Ex: 1.75"
                maxLength={4}
                keyboardType= "numeric" 
            />
        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder= "Ex: 70"
            maxLength={3}
            keyboardType= "numeric" 
            />
        <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={ () => {validationImc()} }>
        <Text style={styles.textButtonCalculator}>{textButton}</Text>
    </TouchableOpacity>
    </Pressable>

    :

    <View style={styles.exibitionResultImc}>
       <ResultImc ResultImc={imc} messageResultImc={messageImc}/>
       <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={ () => {validationImc()} } 
            >
        <Text style={styles.textButtonCalculator}>{textButton}</Text>
      </TouchableOpacity>
    </View> 

    }
    <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImc}
        data={imcList.reverse()}
        renderItem={({item}) => {
            return(
                <Text style={styles.resultImcItem}>
                    <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                    {item.imc}
                </Text>
            )
        }
    }
    keyExtractor={(item) => {
        item.id
    }}
        >
    </FlatList>
</View>
)};