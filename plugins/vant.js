import Vue from 'vue'
import { Row, Col, Icon, Image, Cell, CellGroup, Swipe, SwipeItem } from 'vant'

// 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
import 'vant/lib/index.css'

;[
  Row,
  Col,
  Icon,
  Image,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem
].forEach(compontent => Vue.use(compontent))
