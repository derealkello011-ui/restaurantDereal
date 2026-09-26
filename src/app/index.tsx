import GradientButton from '@/components/gradientButton';
import { dummyData } from '@/data/allData';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Bars3CenterLeftIcon, BellIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Action')
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
                        <GradientButton value={category} containerClass='mr-2' key={category} />
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
              className='ml-4 font-bold text-2xl'
            >
              Featured Games
            </Text>
            <View className='pl-4'>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                
                </ScrollView>
            </View>
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
  }
});