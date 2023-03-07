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
          data-testid="name-input"
          id="name"
          value={ cardName }
          onChange={ onInputChange }
        />
        <br />
        <label htmlFor="description">Descrição: </label>
        <input
          type="textarea"
          data-testid="description-input"
          id="description"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <br />
        <label htmlFor="firstAtribut">Primeiro Atributo: </label>
        <input
          type="number"
          data-testid="attr1-input"
          id="firstAtribut"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <br />
        <label htmlFor="secondAtribut">Segundo Atributo: </label>
        <input
          type="number"
          data-testid="attr2-input"
          id="secondAtribut"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <br />
        <label htmlFor="thirdAtribut">Segundo Atributo: </label>
        <input
          type="number"
          data-testid="attr3-input"
          id="thirdAtribut"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <br />
        <label htmlFor="imgCard">Imagem da Carta: </label>
        <input
          type="text"
          data-testid="image-input"
          id="imgCard"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <br />
        <label htmlFor="selectRaryCart">Raridade da Carta: </label>
        <select
          id="selectRaryCart"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <br />
        <label htmlFor="superTrunfo">Super Trunfo:</label>
        <input
          type="checkbox"
          data-testid="trunfo-input"
          id="superTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <br />
        <button
          data-testid="save-button"
          id="salveButton"
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
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
