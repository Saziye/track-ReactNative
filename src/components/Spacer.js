import React from 'react';
import {View, StyleSheet} from 'react-native';

//Spacer'i her kullandığımızda başka bir bileşeni prop olarak geçeriz.(children)
//o child'lara bir görünüm ögesi(View) göndereceğiz
const Spacer = ({children}) => {
    return (
        <View style={styles.spacer}> 
            {children}
        </View>
    );

};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export default Spacer;
