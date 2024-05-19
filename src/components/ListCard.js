import React from 'react';
import PropTypes from 'prop-types';
import { Card as Batata, Image, Text, Badge, Group, Stack } from '@mantine/core';

class ListCard extends React.Component {
  render() {
    const { cardList } = this.props;
    return (
      <Stack>
        {cardList.map((list) => (
          <Batata
            h={ 350 }
            w={ 250 }
            style={ { border: '1px solid' } }
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            key={ list.cardName }
          >
            <Batata.Section>
              <Image src={ list.cardImage } alt={ list.cardName } />
            </Batata.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text>{list.cardName}</Text>
              {list.cardTrunfo ? (
                <Badge
                  variant="gradient"
                  data-testid="trunfo-card"
                >
                  Super Trunfo
                </Badge>
              )
                : ''}
              <Text>{list.cardDescription}</Text>
            </Group>
            <Group>
              <Text>{list.cardAttr1}</Text>
              <Text>{list.cardAttr2}</Text>
              <Text>{list.cardAttr3}</Text>
            </Group>
            <Group>
              <Text>{list.cardRare}</Text>
            </Group>
          </Batata>
        ))}
      </Stack>
    );
  }
}

ListCard.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
};

export default ListCard;
