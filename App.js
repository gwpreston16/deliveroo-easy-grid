import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import { Row, Grid } from "react-native-easy-grid"
import { NativeBaseProvider, Center, Heading, Input, Button } from 'native-base'
import pizzaImage from './assets/pizza.jpg'

function App() {
  return (
    <NativeBaseProvider>
      <Grid>
        <Row style={styles.row1}>
          <Center flex={1}>
            <Image source={ pizzaImage } style={ styles.image } />
          </Center>
        </Row>
        <Row style={styles.row2}>
          <Center flex={1}>
            <Heading size="xl">Mario's Pizza</Heading>
            <Text size="lg">The best pizza in Belfast</Text>
          </Center>
        </Row>
        <Row style={styles.row3}>
          <Center flex={1}>
            <Input
              placeholder='Email address'
              style={ styles.textBox }
            />
            <Button 
              style={ styles.button } 
              bg="primary.400"
              size="md" 
              block bordered primary>
              Get updates from Mario's Pizza
            </Button>
          </Center>
        </Row>
      </Grid>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  row1: {
    backgroundColor: '#F9423A',
  },
  row2: {
    backgroundColor: 'white',
  },
  row3: {
    backgroundColor: '#47894b',
  },
  textBox: {
    backgroundColor: 'white',
    width: 250,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#D3D3D3',
    width: 250,
  },
  image: {
    width: 405, 
    height: 259,
  },
})

export default App;