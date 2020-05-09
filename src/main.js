import './css/main.scss'

import Slider from './components/Slider'
import Summary from './components/Summary'
import Comment from './components/Comment'
import Archive from './components/Archive'

import Turbolinks from "turbolinks"
import { initMermaid } from './helpers/mermaid'
import { initHljs } from './helpers/highlight'

import bindAnimateVisit from "./helpers/animateVisit"

Turbolinks.start()

document.addEventListener("turbolinks:load", function() {

  bindAnimateVisit()

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

  initHljs()
  initMermaid()
})

window.initHljs = initHljs;
window.initMermaid = initMermaid;