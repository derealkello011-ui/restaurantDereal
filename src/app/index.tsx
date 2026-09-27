import GameCard from '@/components/gameCard';
import GradientButton from '@/components/gradientButton';
import { dummyData, dummyFeatureData, games } from '@/data/allData';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ArrowDownTrayIcon } from 'react-native-heroicons/outline';
import { Bars3CenterLeftIcon, BellIcon, StarIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

const HomeScreen = () => {
  const [ activeCategory, setActiveCategory ] = useState( 'All' );

  return (
    <LinearGradient
      colors={[ 'rgba(58, 131, 244, 0.4)', 'rgba(9, 181, 200, 0.4)' ]}   
      className='w-full'
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View className='flex-row justify-between items-center px-4'>
            <Bars3CenterLeftIcon color={'#000000'} size={30} />
            <BellIcon color={'#000000'} size={30} />
          </View>

          {/* Wrapper: holds the absolutely-positioned title + the single
              scrollable FlatList that carries everything beneath it */}
          <View className='relative flex-1'>
            <Text
              style={styles.text}
              className='top-0 left-0 relative mt-3 ml-4 pb-1 font-bold text-4xl'
            >
              Browse Games
            </Text>

            <FlatList
              data={games}
              keyExtractor={( game ) => game.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
              ListHeaderComponent={
                <View>
                  {/* Categories */}
                  <View className='space-y-3'>
                    <View className='pl-4'>
                      <FlatList
                        data={dummyData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={( category ) => category}
                        renderItem={( { item: category } ) => {
                          if ( category === activeCategory ) {
                            // Show Gradient category
                            return (
                              <GradientButton value={category} containerClass='mr-2 rounded-full' />
                            )
                          }
                          // show normal Category
                          return (
                            <TouchableOpacity
                              onPress={() => setActiveCategory(category) }
                              className='justify-center items-center bg-blue-200 mr-2 p-3 px-4 border border-slate-500/70 rounded-full min-w-20'
                            >
                              <Text>{category}</Text>
                            </TouchableOpacity>
                          )
                        }}
                      />
                    </View>
                  </View>

                  {/* Featured Row */}
                  <View className='space-y-4 mt-3'>
                    <Text
                      style={styles.text}
                      className='mr-4 mb-4 ml-4 border-black/25 border-b-2 font-bold text-2xl'
                    >
                      Featured Games
                    </Text>
                    <View className='pl-4 overflow-hidden'>
                      <FlatList
                        data={dummyFeatureData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={( item ) => item.id.toString()}
                        renderItem={( { item } ) => <GameCard game={item} />}
                      />
                    </View>
                  </View>

                  {/** Top action games list header */}
                  <View className='flex-row justify-between items-center mt-4 mr-4 mb-2 ml-4 border-black/25 border-b-2'>
                    <Text
                      style={styles.text}
                      className='font-bold text-2xl'
                      >
                        Top Action Games
                    </Text>
                    <TouchableOpacity>
                      <Text className='font-bold text-blue-600'>
                        See All
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              }
              renderItem={( { item: game } ) => (
                // each game in the Top Action Games section
                <TouchableOpacity
                  style={styles.touchableApps}
                >
                  <Image source={game.image} style={styles.images} />
                  <View className='flex flex-1 justify-evenly space-y-3 mb-1 pl-3'>
                    <Text className='pt-2 font-semibold'>{game.title}</Text>

                    <View className='flex-row space-x-3'>
                      {/* Stars */}
                      <View className='flex-row items-center space-x-4 pr-2'>
                        <StarIcon color={'#FACC15'} size={15} />
                        <Text className='text-gray-700 text-xs'>
                          {game.stars} {game.stars > 1 ? 'stars' : 'star'}
                        </Text>
                      </View>
                      
                      {/* Display Downloads */}
                      <View className='flex-row items-center space-x-4 pr-2'>
                        <ArrowDownTrayIcon size={15} color={'#3b82f6'} />
                        <Text className='text-gray-700 text-xs'>
                          {game.downloads}
                        </Text>
                      </View>
                    </View>

                  </View>

                  <View className='flex justify-center items-center'>
                    <GradientButton value='play' buttonClass='py-2 px-5' />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
          
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#000000',
  },
  scrollContent: {
    paddingTop: 74,
  },
  images: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
  touchableApps: {
    marginHorizontal: 4,
    marginBottom: 8,
    padding: 8,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20
  }
});
