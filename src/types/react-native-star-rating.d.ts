declare module 'react-native-star-rating' {
  import { Component } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';

  export interface StarRatingProps {
    disabled?: boolean;
    emptyStar?: string | number;
    fullStar?: string | number;
    halfStar?: string | number;
    halfStarEnabled?: boolean;
    iconSet?: string;
    maxStars?: number;
    rating?: number;
    reversed?: boolean;
    selectedStar?: (rating: number) => void;
    starSize?: number;
    starStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    fullStarColor?: string;
    emptyStarColor?: string;
    animation?: string;
  }

  export default class StarRating extends Component<StarRatingProps> {}
}