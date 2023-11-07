import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function App() {

  const [valueInput, setValueInput] = useState('')
  const [valuePicker, setValuePicker] = useState('')
  const [valueSlider, setValueSlider] = useState(0)
  const [valueSwitch, setValueSwitch] = useState(false)

  function HandleButton(){
    const obj = {
      valueInput,
      valuePicker,
      valueSlider,
      valueSwitch,
    }
    
    alert(`conta criada com sucesso mr.${valueInput}, seu limite é de ${valueSlider} ${valueSwitch ? ', você é um estudante' : ''}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MobileBank</Text>
    <View style={styles.container2}>
      <TextInput 
        value={valueInput}
        onChangeText={text => setValueInput(text)}
        placeholder='Digite seu nome'
      />
    </View>
    <View style={styles.containerPicker}>
        <Picker onValueChange={value => setValuePicker(value)}>
          <Picker.Item key={1} value={1} label='Masculino'/>
          <Picker.Item key={2} value={2} label='Feminino'/>
          <Picker.Item key={3} value={3} label='Não dizer'/>
        </Picker>
    </View>
    <View style={styles.container2}>
      <Text>
        Defina seu limite:
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={5000}
        onValueChange={value => setValueSlider(value)}
      />
      <Text>
        Seu limite é de: R${valueSlider.toFixed(2)}
       </Text>
    </View>
    <View style={styles.container2}>
      <Text>Você é estudante?</Text>
      <Switch
        value={valueSwitch}
        onValueChange={value => setValueSwitch(value)}
      />

      <Text>{valueSwitch ? 'sim, sou estudante' : 'não, não sou estudante'}</Text>
    </View>

    <View>
      <TouchableOpacity onPress={HandleButton} style={styles.btn}>
        <View>
            <Text style={styles.textBtn}>
              Criar conta
            </Text>
        </View>
      </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    backgroundColor: '#ECECEC',
    padding:10,
    gap:10,
    paddingTop: 40,
    flex:1
  },
  container2: {
    backgroundColor: '#fff',
    padding:15,
    justifyContent:'flex-start',
    alignItems: 'flex-start'
  },
  inputStyle:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  containerPicker: {
    backgroundColor: '#fff',
    padding:15,
  },
  textBtn:{
    color:'white',
    textAlign:'center'
  },
  btn:{
    backgroundColor:'green',
    padding:10,
    marginTop:8,
  }
  
});
