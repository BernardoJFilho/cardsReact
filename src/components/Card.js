import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <>
        <div data-testid="name-card">{cardName}</div>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <div data-testid="description-card">{cardDescription}</div>
        <div data-testid="attr1-card">{cardAttr1}</div>
        <div data-testid="attr2-card">{cardAttr2}</div>
        <div data-testid="attr3-card">{cardAttr3}</div>
        <div data-testid="rare-card">{cardRare}</div>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null}
        <br />
        <br />
        <br />
        <br />
        <br />
        { cardList > 0
          && (cardList.map((list) => (
            <div key={ list.cardName }>
              <br />
              <div>{list.cardName}</div>
              <img src={ list.cardImage } alt={ list.cardName } />
              <div>{list.cardDescription}</div>
              <div>{list.cardAttr1}</div>
              <div>{list.cardAttr2}</div>
              <div>{list.cardAttr3}</div>
              <div>{list.cardRare}</div>
              {list.cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
              <br />
            </div>
          )))}
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.number.isRequired,
      cardAttr2: PropTypes.number.isRequired,
      cardAttr3: PropTypes.number.isRequired,
      cardImage: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Card;
