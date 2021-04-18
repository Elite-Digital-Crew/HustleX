import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const widthToDp = Number => {
    let mapWeidth =
     typeof Number === 'number' ? Number : parseFloat(Number);
    return PixelRatio.roundToNearestPixel( (width*mapWeidth)/100 );
};

const heightToDp = Number => {
    let mapHeight =
     typeof Number === 'number' ? Number : parseFloat(Number);
    return PixelRatio.roundToNearestPixel((height*mapHeight)/100) ;
};


export {heightToDp, widthToDp};