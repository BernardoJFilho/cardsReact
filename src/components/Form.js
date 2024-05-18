import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Input, NumberInput, Select, Stack, Text } from '@mantine/core';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      selectChange,
    } = this.props;

    return (
      <Stack>
        <Text>Adicione uma Carta: </Text>
        <Input
          type="text"
          name="cardName"
          placeholder="Nome"
          data-testid="name-input"
          id="name"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          type="textarea"
          placeholder="Descrição"
          name="cardDescription"
          data-testid="description-input"
          id="description"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <NumberInput
          label="Primeiro Atributo"
          type="number"
          name="cardAttr1"
          data-testid="attr1-input"
          id="firstAtribut"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <NumberInput
          type="number"
          label="Segundo Atributo"
          name="cardAttr2"
          data-testid="attr2-input"
          id="secondAtribut"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <NumberInput
          type="number"
          label="Terceiro Atributo"
          name="cardAttr3"
          data-testid="attr3-input"
          id="thirdAtribut"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          type="text"
          placeholder="Imagem"
          name="cardImage"
          data-testid="image-input"
          id="imgCard"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Select
          id="selectRaryCart"
          label="Raridade da Carta"
          name="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ selectChange }
          data={ [
            { name: 'cardRare', value: 'normal', label: 'normal', type: 'select' },
            { name: 'cardRare', value: 'raro', label: 'raro', type: 'select' },
            { name: 'cardRare',
              value: 'muito raro',
              label: 'muito raro',
              type: 'select' },
          ] }
        />
        {hasTrunfo ? <div>Você já tem um Super Trunfo em seu baralho</div>
          : (
            <Checkbox
              label="Super Trunfo"
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              id="superTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />)}
        <Button
          data-testid="save-button"
          id="salveButton"
          name="saveButton"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </Button>
      </Stack>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  selectChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
