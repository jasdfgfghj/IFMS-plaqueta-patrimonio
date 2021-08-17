# IFMS-plaqueta-patrimonio

Geração de código de barras utilizando React Native.

Instalação:

npm install IFMS-plaqueta-patrimonio

Executar:

npm start

Código:

import React, { useState } from "react";
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    //const [codigo, setCodigo] = useState('');
    
    const navigation = useNavigation();

    const [inputText, setInputText] = useState('');
    const [codigoValue, setCodigoValue] = useState('');

    return (
        <KeyboardAvoidingView 
            style={{flex: 1}} 
            behavior={Platform.OS === 'android' ? 'height': undefined}
        >
        
            <ImageBackground 
                source={require('../../assets/home-background.png')} 
                style={styles.container}
                imageStyle={{ width: 274, height: 500 }}
            >

                <View style={styles.main}>
                        <Image 
                            style={styles.logo}
                            source={require('../../assets/logo2.png')} 
                        />

                <View style={styles.bloco}>
                    <Text style={styles.title}>PATRIMÔNIO</Text>
                    <Image
                        style={styles.codigo}
                        source={{
                        uri: 'https://barcode.tec-it.com/barcode.ashx?data=00000000&code=Code39&dpi=600',
                        }}
                    />  
                </View>

                </View>
                
                <View style={styles.footer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Código de barras"
                        value={inputText}
                        autoCapitalize="characters"
                        autoCorrect={false}
                        onChangeText={(inputText) => setInputText(inputText)}
                />
                    
                    <RectButton style={styles.button} onPress={() => setInputText(inputText)}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#FFF" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>Exportar</Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
    },

    main: {
        display: 'flex',
        flexDirection: 'row',
        width: 320,
        height: 150,
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: 'white',
    },

    codigo: {
        width: 160,
        height: 80,
    },
    
    logo: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 1,
    },
    bloco:{
        display: 'flex',
        flexDirection: 'column',
    },

    title: {
        color: '#030303',
        fontSize: 23,
        fontFamily: 'Poppins_700Bold',
        textAlign: 'center',
        maxWidth: 268,
        marginTop: 10,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {
        marginTop: 30,
    },

    select: {},

    input: {
        height: 50,
        width: 300,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#0685D2',
        height: 50,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }

});

export default Home;
