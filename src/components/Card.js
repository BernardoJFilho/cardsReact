import React from 'react';
import PropTypes from 'prop-types';
import { Card as Batata, Image, Text, Badge, Group } from '@mantine/core';

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
    } = this.props;
    return (
      <Batata shadow="sm" padding="lg" radius="md" withBorder>
        <Batata.Section>
          <Image src={ cardImage } alt={ cardName } data-testid="image-card" />
        </Batata.Section>
        <Group justify="space-between" mt="md" mb="xs">
          <Text data-testid="name-card">{cardName}</Text>
          {cardTrunfo
            ? <Badge color="red" data-testid="trunfo-card">Super Trunfo</Badge>
            : null}
        </Group>
        <Text data-testid="description-card">{cardDescription}</Text>
        <Group>
          <Text data-testid="attr1-card">{cardAttr1}</Text>
          <Text data-testid="attr2-card">{cardAttr2}</Text>
          <Text data-testid="attr3-card">{cardAttr3}</Text>
          <Text data-testid="rare-card">{cardRare}</Text>
        </Group>
      </Batata>
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
};

export default Card;
