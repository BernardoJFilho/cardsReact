import React from 'react';
import { Center, Flex, Stack, Title } from '@mantine/core';
import Form from './components/Form';
import Card from './components/Card';
import ListCard from './components/ListCard';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
};

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    cardList: [],
    hasTrunfo: false,
  };

  onInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const strings = [cardName, cardDescription, cardImage];
    const arrayNumbers = [cardAttr1, cardAttr2, cardAttr3];
    const checkEmptyField = strings.some((param1) => !param1);
    const individualMaxPower = 90;
    const checkPowerNumber = arrayNumbers.every((param1) => param1 <= individualMaxPower
    && param1 >= 0);
    const maxPower = 210;
    const soma = arrayNumbers.reduce(
      (sum, number) => sum + parseInt(number, 10),
      0,
    );
    return !(!checkEmptyField && checkPowerNumber && soma <= maxPower);
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardList,
      cardTrunfo,
    } = this.state;
    const addNewCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
        cardList: [...cardList, addNewCard],
        ...initialState,
      });
    }

    this.setState({
      cardList: [...cardList, addNewCard],
      ...initialState,
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardList,
      hasTrunfo,
    } = this.state;
    return (
      <Stack>
        <Center>
          <Title order={ 1 }>Tryunfo</Title>
        </Center>
        <Flex
          mih={ 50 }
          gap={ 400 }
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ this.isSaveButtonDisabled() }
            onSaveButtonClick={ this.onSaveButtonClick }
            selectChange={ this.selectChange }
            hasTrunfo={ hasTrunfo }
          />
          <Flex direction="column" w={ 200 }>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onSaveButtonClick={ this.onSaveButtonClick }
              cardList={ cardList }
            />
          </Flex>
        </Flex>
        <ListCard cardList={ cardList } />
      </Stack>
    );
  }
}

export default App;
