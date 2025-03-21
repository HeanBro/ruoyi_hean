const tagsView = {
  state: {
    visitedViews: [

    ]
  },
  mutations: {
    ADD_VISITED_VIEW: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push(Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      }))
    },
    DELETE_VISITED_VIEW: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    }
  },
  actions: {
    addView ({ dispatch }, view) {
      dispatch('addVisitedView', view)
    },
    addVisitedView ({ commit }, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    deleteView ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('deleteVisitedView', view)
        resolve({
          visitedViews: [...state.visitedViews]
        })
      })
    },
    deleteVisitedView ({ commit }, view) {
      commit('DELETE_VISITED_VIEW', view)
    }
  }
}

export default {
  namespaced: true,
  ...tagsView
}
