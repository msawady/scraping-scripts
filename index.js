import { price, prices } from './YahooFinance.js'

price('SQ')

prices(['SQ', 'SE', 'TDOC']).then(d => console.log(d))
