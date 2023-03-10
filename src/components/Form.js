import React from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <h3>Adicione uma Carta: </h3>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="cardName"
          data-testid="name-input"
          id="name"
          value={ cardName }
          onChange={ onInputChange }
        />
        <br />
        <label>
          Descrição:
          <input
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Primeiro Atributo:
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            id="firstAtribut"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Segundo Atributo:
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            id="secondAtribut"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Segundo Atributo:
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            id="thirdAtribut"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Imagem da Carta:
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            id="imgCard"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Raridade da Carta:
          <select
            id="selectRaryCart"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        {hasTrunfo ? (
          <label>
            Super Trunfo:
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              id="superTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>)
          : <div>Você já tem um Super Trunfo em seu baralho</div>}
        <br />
        <button
          data-testid="save-button"
          id="salveButton"
          name="saveButton"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
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
