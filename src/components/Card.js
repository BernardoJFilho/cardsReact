import React from 'react';
import PropTypes from 'prop-types';
import { Card as Batata, Image, Text, Badge, Group } from '@mantine/core';
import defaultImage from '../image/defaultImage.jpg';
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
      <Batata
        h={ 350 }
        w={ 250 }
        style={ { border: '1px solid' } }
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Batata.Section>
          <Image
            h={ 180 }
            w="auto"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
        </Batata.Section>
        <Group justify="space-between" mt="md" mb="xs">
          <Text data-testid="name-card">{cardName}</Text>
          {cardTrunfo
            ? (
              <Badge
                variant="gradient"
                data-testid="trunfo-card"
              >
                Super Trunfo
              </Badge>
            )
            : null}
          <Text data-testid="description-card">{cardDescription}</Text>
        </Group>
        <Group>
          <Text data-testid="attr1-card">{cardAttr1}</Text>
          <Text data-testid="attr2-card">{cardAttr2}</Text>
          <Text data-testid="attr3-card">{cardAttr3}</Text>
        </Group>
        <Group>
          <Text variant="teste" data-testid="rare-card">{cardRare}</Text>
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
