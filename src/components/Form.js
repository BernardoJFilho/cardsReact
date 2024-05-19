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
    } = this.props;

    return (
      <Stack>
        <Text>Adicione uma Carta: </Text>
        <Input
          type="text"
          placeholder="Nome"
          data-testid="name-input"
          id="name"
          value={ cardName }
          onChange={ (e) => onInputChange('cardName', e.target.value) }
        />
        <Input
          type="textarea"
          placeholder="Descrição"
          data-testid="description-input"
          id="description"
          value={ cardDescription }
          onChange={ (e) => onInputChange('cardDescription', e.target.value) }
        />

        <NumberInput
          label="Primeiro Atributo"
          type="number"
          data-testid="attr1-input"
          id="firstAtribut"
          value={ cardAttr1 }
          onChange={ (e) => onInputChange('cardAttr1', e) }
        />
        <NumberInput
          type="number"
          label="Segundo Atributo"
          data-testid="attr2-input"
          id="secondAtribut"
          value={ cardAttr2 }
          onChange={ (e) => onInputChange('cardAttr2', e) }
        />
        <NumberInput
          type="number"
          label="Terceiro Atributo"
          data-testid="attr3-input"
          id="thirdAtribut"
          value={ cardAttr3 }
          onChange={ (e) => onInputChange('cardAttr3', e) }
        />
        <Input
          type="text"
          placeholder="Imagem"
          data-testid="image-input"
          id="imgCard"
          value={ cardImage }
          onChange={ (e) => onInputChange('cardImage', e.target.value) }
        />
        <Select
          id="selectRaryCart"
          label="Raridade da Carta"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ (e) => onInputChange('cardRare', e) }
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
              data-testid="trunfo-input"
              id="superTrunfo"
              checked={ cardTrunfo }
              onChange={ (e) => onInputChange('cardTrunfo', e.target.checked) }
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
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
