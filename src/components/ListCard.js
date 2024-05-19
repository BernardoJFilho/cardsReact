import React from 'react';
import PropTypes from 'prop-types';
import { Card as Batata,
  Image, Text, Badge, Group, Flex, Center, Space } from '@mantine/core';

class ListCard extends React.Component {
  render() {
    const { cardList, getColorByRarity } = this.props;
    return (
      <Flex
        gap="xs"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
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
              <Image
                width="auto"
                fit="contain"
                src={ list.cardImage }
                alt={ list.cardName }
              />
            </Batata.Section>
            <Group h={ 20 } justify="space-between" mt="md" mb="xs">
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
            </Group>
            <Text h={ 20 }>{list.cardDescription}</Text>
            <Space h="xs" />
            <Group justify="space-between">
              <Text>{list.cardAttr1}</Text>
              <Text>{list.cardAttr2}</Text>
              <Text>{list.cardAttr3}</Text>
            </Group>
            <Space h="xs" />
            <Center>
              <Text
                style={ { color: getColorByRarity(list.cardRare) } }
              >
                {list.cardRare}
              </Text>
            </Center>
          </Batata>
        ))}
      </Flex>
    );
  }
}

ListCard.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
  getColorByRarity: PropTypes.func.isRequired,
};

export default ListCard;
