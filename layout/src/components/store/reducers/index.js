import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import fullBanner from './fullBanners';
import footerContent from './footerContents';

export default combineReducers({
    products,
    cart,
    fullBanner,
    footerContent
})
