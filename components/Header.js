import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native'; 


const Header = ({ title }) => {
  return (
    <View style={styles.header}> 
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50, 
    padding: 30,
    backgroundColor: 'coral', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30, 
    color: 'white',
    fontWeight: "700",
  },
  
})

export default Header; 