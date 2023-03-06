import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h3>Adicione uma Carta: </h3>
        <label htmlFor="name">Nome: </label>
        <input type="text" data-testid="name-input" id="name" />
        <br />
        <label htmlFor="description">Descrição: </label>
        <input
          type="textarea"
          data-testid="description-input"
          id="description"
        />
        <br />
        <label htmlFor="firstAtribut">Primeiro Atributo: </label>
        <input type="number" data-testid="attr1-input" id="firstAtribut" />
        <br />
        <label htmlFor="secondAtribut">Segundo Atributo: </label>
        <input type="number" data-testid="attr2-input" id="secondAtribut" />
        <br />
        <label htmlFor="thirdAtribut">Segundo Atributo: </label>
        <input type="number" data-testid="attr3-input" id="thirdAtribut" />
        <br />
        <label htmlFor="imgCard">Imagem da Carta: </label>
        <input type="text" data-testid="image-input" id="imgCard" />
        <br />
        <label htmlFor="selectRaryCart">Raridade da Carta: </label>
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <br />
        <label htmlFor="superTrunfo">Super Trunfo:</label>
        <input type="checkbox" data-testid="trunfo-input" id="superTrunfo" />
        <br />
        <button data-testid="save-button" id="salveButton">
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
