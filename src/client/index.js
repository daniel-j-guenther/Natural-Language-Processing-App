import { runHandler } from './js/handler'
import { runValidator } from './js/validator'
import { runAnalysis } from '../server/analysis'

import './styles/amazing.scss'
import './styles/amazing.ttf'
import './styles/amazing-16x16.png'
import './styles/amazing-32x32.png'

alert("::: Our Express server is running!");
console.log("::: Express Server Running :::");

export { runHandler, runValidator, runAnalysis }