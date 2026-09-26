import GameCard from '@/components/gameCard';
import GradientButton from '@/components/gradientButton';
import { dummyData, dummyFeatureData } from '@/data/allData';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Bars3CenterLeftIcon, BellIcon } from 'react-native-heroicons/solid';
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

          {/* Categories */}
          <View className='space-y-3 mt-3'>
            <Text
              style={styles.text}
              className='mb-3 ml-4 font-bold text-4xl'
            >
              Browse Games
            </Text>
            <View className='pl-4'>
              <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
              >
                {
                  dummyData.map( category => {
                    if ( category === activeCategory ) {
                      // Show Gradient category
                      return (
                        <GradientButton value={category} containerClass='mr-2 rounded-full' key={category} />
                      )
                    } else {
                      // show normal Category
                      return (
                        <TouchableOpacity
                          onPress={() => setActiveCategory(category) }
                          key={category}
                          className='bg-blue-200 mr-2 p-3 px-4 border border-slate-500/70 rounded-full'
                        >
                          <Text>{category}</Text>
                        </TouchableOpacity>
                      )
                    }
                  })
                }
                
                </ScrollView>
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
            <View className='pl-safe-or-4 overflow-hidden'>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  dummyFeatureData.map( ( item, index ) => {
                    // Return a game card
                    return (
                      <GameCard key={index} game={item} />
                    );
                  })
                }  
              </ScrollView>
            </View>
          </View>

          {/** Top action games list */}
          <View className='mt-4 mr-4 mb-4 ml-4 border-black/25 border-b-2'>
            <View className='flex-row justify-between items-center mr-4 mb-2'>
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
            <ScrollView style={styles.topAction}>
              { 
                // Game list
              }
            </ScrollView>
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
  topAction: {
    height: 320
  }
});