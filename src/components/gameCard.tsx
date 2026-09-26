import { FeatureDataProps } from '@/data/allData'
import { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StarIcon as StarIconOutline } from 'react-native-heroicons/outline'
import { ArrowDownTrayIcon, HeartIcon, StarIcon } from 'react-native-heroicons/solid'

export interface GameCardProps  {
    game:  FeatureDataProps,
}

const GameCard = ( { game }: GameCardProps ) => {
    const [ isFavorite, setIsFavorite ] = useState<boolean>( false );
  return (
        <View className='relative space-x-4 bg-white mr-4 p-5 rounded-3xl'>
            <Image source={game.image} className='pb-5 rounded-3xl w-80 h-60' resizeMethod='auto'/>
            {/* Container for the like icon   */}
            <View style={styles.container}>
                    <View className='flex-row justify-end'>
                        <TouchableOpacity
                            onPress={() => setIsFavorite(!isFavorite)}
                            className='p-2 rounded-full'
                            style={{ backgroundColor: 'rbga(255, 255, 255, 0.3)' }}
                        >
                            <HeartIcon size={30} color={isFavorite ? 'red' : 'white'} />
                        </TouchableOpacity>
                    </View>
            </View>
            
              {/* Container for the extra details  */}
            <View className='top-4 space-y-1 bg-slate-600 mb-5 p-4 rounded-xl'>
                {/* Star Ratings */}
                <View className='flex-row mr-5' style={{ width: 90 }}>
                        {
                            Array.from({ length: 6 }).map((_, index) => {
                                const isFilled = index < game.stars;
                                const Icon = isFilled ? StarIcon : StarIconOutline;
                                return (
                                    <Icon
                                        key={index}
                                        size={15}
                                        color={isFilled ? '#FACC15' : 'lightgray'}
                                    />
                                );
                            })
                        }
              </View>
                {/* Game Title */}
                <Text className='font-bold text-gray-300 text-xl'> {game.title} </Text>
                {/* Downloads Details   */}
                <View className='flex-row items-center space-x-4'>
                    <ArrowDownTrayIcon size={10} color={'lightgray'} />
                    <Text className='pl-2 font-semibold text-gray-300 text-sm'>
                        {game.downloads} Downloads
                    </Text>
                </View>
            </View>
        </View>
  )
}

export default GameCard

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        borderColor: 'white',
        top: 20,
        left: 20
    }
});