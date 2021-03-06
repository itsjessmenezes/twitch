import React from 'react';

import { FlatList, View } from 'react-native';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const {data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADER',
        render: () => <Heading>Following</Heading>,
      },

      {
        key: 'FOLLOWING_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },

      {
        key: 'FIRST_COMPONENT',
        render: () => <CategoryList />,
      },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },

      {
        key: 'SECOND_COMPONENT',
        render: () => <StreamList />,
      },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },

      {
        key: 'THIRD_COMPONENT',
        render: () => <StreamList />,
      },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },

      {
        key: 'FOURTH_COMPONENT',
        render: () => <ChannelList />,
      },
    ];

    // contem apenas os indices dos elementos com titulos
    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes,
    }

  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
          data={data}
          renderItem={({ item }) => item.render()}
          keyExtractor={item => item.key}
          stickyHeaderIndices={indexes}
          //Refresh Effect
          onRefresh={() => {}}
          refreshing={false}

          
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
