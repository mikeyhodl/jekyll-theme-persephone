import './css/main.scss'

import Slider from './components/Slider'
import Summary from './components/Summary'
import Comment from './components/Comment'
import Archive from './components/Archive'

import initMermaid from './helpers/mermaid'

import Turbolinks from "turbolinks"

Turbolinks.start()

document.addEventListener("turbolinks:load", function() {
  if ( document.getElementById("bookSummary") ) {
    new Summary()
  }
  
  if ( document.getElementById("sectionContainer") ) {
    new Slider()
  }
  
  if ( document.getElementById("postArchive") ) {
    new Archive()
  }
  
  if ( document.getElementById("commentContainer") ) {
    new Comment()
  }
  
  initMermaid();
})
