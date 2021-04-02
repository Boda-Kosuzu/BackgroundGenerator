import { createStore } from 'vuex'

export default createStore({
  state: {
    patterns: [
      {
        key: 'ZigZag',
        name: 'ジグザグ'
      },
      {
        key: 'Weave',
        name: '織り模様'
      },
      {
       key: 'Carbon',
       name: 'カーボン'
      },
      {
        key: 'Argyle',
        name: 'アーガイル'
      },
      {
        key: 'Stars',
        name: '星'
      },
      {
        key: 'Bricks',
        name: 'レンガ'
      },
      {
        key: 'Seigaiha',
        name: '青海波'
      },
      {
        key: 'Dot',
        name: '水玉'
      },
      {
        key: 'Tartan',
        name: 'タータン'
      },
      {
        key: 'TableCloth',
        name: 'テーブルクロス'
      },
      {
        key: 'DiagonalStrips',
        name: '斜線'
      },
      {
        key: 'VerticalStrips',
        name: '縦縞'
      },
      {
        key: 'HorizonalStrips',
        name: '横縞'
      }
    ],
    selectedPattern: 'ZigZag',
    colorList: ['#EC173A', '#ECEDDC'],
  },
  mutations: {
    updateSelectedPattern(state, selected) {
      state.selectedPattern = selected
      switch (selected) {
        case 'ZigZag':
          state.colorList.length = 2;
          state.colorList[0] = '#EC173A';
          state.colorList[1] = '#ECEDDC';
          break;
        case 'Weave':
          state.colorList.length = 2;
          state.colorList[0] = '#708090';
          state.colorList[1] = '#d9ecff';
          break;
        case 'Stars':
          state.colorList.length = 2;
          state.colorList[0] = '#232927';
          state.colorList[1] = '#e3d7bf';
          break;
        case 'Seigaiha':
          state.colorList.length = 2;
          state.colorList[0] = '#c0c0c0';
          state.colorList[1] = '#ffffff';
          break;
        case 'Dot':
          state.colorList.length = 2;
          state.colorList[0] = '#000011';
          state.colorList[1] = '#ffffff';
          break;
        case 'TableCloth':
          state.colorList.length = 2;
          state.colorList[0] = '#ffffff';
          state.colorList[1] = '#c80000';
          break;
        case 'DiagonalStrips':
          state.colorList.length = 2;
          state.colorList[0] = '#808080';
          state.colorList[1] = '#ffffff';
          break;
        case 'VerticalStrips':
          state.colorList.length = 2;
          state.colorList[0] = '#808080';
          state.colorList[1] = '#ffffff';
          break;
        case 'HorizonalStrips':
          state.colorList.length = 2;
          state.colorList[0] = '#808080';
          state.colorList[1] = '#ffffff';
          break;
        case 'Argyle':
          state.colorList.length = 3;
          state.colorList[0] = '#6d695c';
          state.colorList[1] = '#ffffff';
          state.colorList[2] = '#000000';
          break;
        case 'Bricks':
          state.colorList.length = 3;
          state.colorList[0] = '#c0c0c0';
          state.colorList[1] = '#bb0000';
          state.colorList[2] = '#dd0000';
          break;
        case 'Tartan':
          state.colorList.length = 3;
          state.colorList[0] = '#a0302c';
          state.colorList[1] = '#000000';
          state.colorList[2] = '#ffffff';
          break;
        case 'Carbon':
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
})
