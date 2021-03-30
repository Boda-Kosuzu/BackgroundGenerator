import { createStore } from 'vuex'

export default createStore({
  state: {
    patterns: [
      {
        key: 'zig-zag',
        name: 'ジグザグ'
      },
      {
        key: 'weave',
        name: '織り模様'
      },
      {
       key: 'carbon',
       name: 'カーボン'
      },
      {
        key: 'argyle',
        name: 'アーガイル'
      },
      {
        key: 'stars',
        name: '星'
      },
      {
        key: 'bricks',
        name: 'レンガ'
      },
      {
        key: 'seigaiha',
        name: '青海波'
      },
      {
        key: 'dot',
        name: '水玉'
      },
      {
        key: 'tartan',
        name: 'タータン'
      },
      {
        key: 'tablecloth',
        name: 'テーブルクロス'
      },
      {
        key: 'diagonal-strips',
        name: '斜線'
      },
      {
        key: 'vertical-strips',
        name: '縦縞'
      },
      {
        key: 'horizonal-strips',
        name: '横縞'
      }
    ],
    selectedPattern: 'zig-zag',
    colorList: ['#EC173A', '#ECEDDC'],
  },
  mutations: {
    updateSelectedPattern(state, selected) {
      state.selectedPattern = selected
      switch (selected) {
        case 'zig-zag':
          state.colorList.length = 2;
          state.colorList[0] = '#EC173A';
          state.colorList[1] = '#ECEDDC';
          break;
        case 'weave':
          state.colorList.length = 2;
          state.colorList[0] = '#708090';
          state.colorList[1] = '#d9ecff';
          break;
        case 'stars':
          state.colorList.length = 2;
          state.colorList[0] = '#232927';
          state.colorList[1] = '#e3d7bf';
          break;
        case 'seigaiha':
          state.colorList.length = 2;
          state.colorList[0] = '#c0c0c0';
          state.colorList[1] = '#ffffff';
          break;
        case 'dot':
          state.colorList.length = 2;
          state.colorList[0] = '#000011';
          state.colorList[1] = '#ffffff';
          break;
        case 'tablecloth':
          state.colorList.length = 2;
          state.colorList[0] = '#ffffff';
          state.colorList[1] = '#c80000';
          break;
        case 'diagonal-strips':
          state.colorList.length = 2;
          state.colorList[0] = '#808080';
          state.colorList[1] = '#ffffff';
          break;
        case 'vertical-strips':
          state.colorList.length = 2;
          state.colorList[0] = '#808080';
          state.colorList[1] = '#ffffff';
          break;
        case 'horizonal-strips':
          state.colorList.length = 2;
          state.colorList[0] = '#808080';
          state.colorList[1] = '#ffffff';
          break;
        case 'argyle':
          state.colorList.length = 3;
          state.colorList[0] = '#6d695c';
          state.colorList[1] = '#ffffff';
          state.colorList[2] = '#000000';
          break;
        case 'bricks':
          state.colorList.length = 3;
          state.colorList[0] = '#c0c0c0';
          state.colorList[1] = '#bb0000';
          state.colorList[2] = '#dd0000';
          break;
        case 'tartan':
          state.colorList.length = 3;
          state.colorList[0] = '#a0302c';
          state.colorList[1] = '#000000';
          state.colorList[2] = '#ffffff';
          break;
        case 'carbon':
          state.colorList.length = 7
          state.colorList[0] = '#131313';
          state.colorList[1] = '#151515';
          state.colorList[2] = '#222222';
          state.colorList[3] = '#1b1b1b';
          state.colorList[4] = '#1d1d1d';
          state.colorList[5] = '#1a1a1a';
          state.colorList[6] = '#242424';
          break;
      }
    },
    updateColor(state, { index, value }) {
      state.colorList[parseInt(index, 10)] = value
    }
  },
  actions: {
    updateSelectedPattern({ commit }, selected) {
      commit('updateSelectedPattern', selected)
    },
    updateColor({ commit }, data) {
      commit('updateColor', data)
    }
  },
  getters: {
    isArgayle (state) {
      return state.selectedPattern === 'argyle'
    },
    isBricks (state) {
      return state.selectedPattern === 'bricks'
    },
    isVerticalStrips (state) {
      return state.selectedPattern === 'vertical-strips'
    },
    isWeave (state) {
      return state.selectedPattern === 'weave'
    },
    isZigZag (state) {
      return state.selectedPattern === 'zig-zag'
    },
    isCarbon (state) {
      return state.selectedPattern === 'carbon'
    },
    isDiagonalStrips (state) {
      return state.selectedPattern === 'diagonal-strips'
    },
    isDot (state) {
      return state.selectedPattern === 'dot'
    },
    isHorizonalStrips (state) {
      return state.selectedPattern === 'horizonal-strips'
    },
    isSeigaiha (state) {
      return state.selectedPattern === 'seigaiha'
    },
    isStars (state) {
      return state.selectedPattern === 'stars'
    },
    isTablecloth (state) {
      return state.selectedPattern === 'tablecloth'
    },
    isTartan (state) {
      return state.selectedPattern === 'tartan'
    },
  }
})
