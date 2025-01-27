import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
    const[text, onChangeText] = React.useState('');
    const[num, onChangeNumber] = React.useState('');
    const[text1, onChangeText1] = React.useState('');
    const[text2, onChangeText2] = React.useState('');
    const[text3, onChangeText3] = React.useState('');
    const[text4, onChangeText4] = React.useState('');
    const[num1, onChangeNumber1] = React.useState('');
    
    return(
        <SafeAreaProvider>
          <SafeAreaView>
            <TextInput 
              style={styles.input}
              onChangeText={onChangeText1}
              placeholder="Name: "
              value={text1}
              />
               <TextInput 
              style={styles.input}
              onChangeText={onChangeNumber}
              value={num}
              placeholder="Age: "
              keyboardType={'numeric'}
              />

               <TextInput 
              style={styles.input}
              onChangeText={onChangeText2}
              placeholder="Address: "
              value={text2}
              />

              <TextInput 
              style={styles.input}
              onChangeText={onChangeText3}
              placeholder="School: "
              value={text3}
              />

              <TextInput 
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Course: "
              value={text}
              />

              <TextInput 
              style={styles.input}
              onChangeText={onChangeText4}
              placeholder="Email: "
              value={text4}
              />
              
              <TextInput 
              style={styles.input}
              onChangeText={onChangeNumber1}
              placeholder="Contact: "
              keyboardType={'numeric'}
              value={num1}
              />
              
              <TextInput 
              style={styles.input}
              onChangeText={onChangeNumber1}
              placeholder="About Me: "
              keyboardType={'numeric'}
              value={num1}
              />

          </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5
  },
});

export default TextInputExample;