<script>
import ScrollPane from '@/layout/components/TagsView/ScrollPane/index.vue'

export default {
  name: 'TagsView',
  components: { ScrollPane },
  computed: {
    visitedViews () {
      return this.$store.state.tagsView.visitedViews
    }
  },
  mounted () {
    this.addTags()
  },
  watch: {
    $route () {
      this.addTags()
    }
  },
  data () {
    return {
    }
  },
  methods: {
    addTags () {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route)
      }
    },
    isActive (route) {
      return route.path === this.$route.path
    },
    closeSelectedTag (view) {
      this.$store.dispatch('tagsView/deleteView', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
      })
    },
    toLastView (visitedViews) {
      const lateView = visitedViews.slice(-1)[0]
      if (lateView) {
        this.$router.push(lateView.fullPath)
      }
    },
    isAffix (tag) {
      return tag.meta && tag.meta.affix
    }
  }

}
</script>

<template>
  <div class="tags-view-container">
    <scroll-pane class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedViews"
        :key="tag.path"
        tag="span"
        :class="isActive(tag) ? 'active' : ''"
        :to="{path: tag.path}"
        class="tag-view-item"
      >
        {{tag.title}}
        <span v-if="!isAffix(tag)" class="el-icon-close" @click.stop="closeSelectedTag(tag)"></span>
      </router-link>
    </scroll-pane>
  </div>
</template>

<style lang="scss">
  .tags-view-container {
    height: 30px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    .tags-view-wrapper {
      .tag-view-item {
        display: inline-block;
        height: 26px;
        line-height: 26px;
        border:1px solid #d8dce5;
        padding: 0 8px;
        margin-left: 5px;
        margin-top: 4px;
        cursor: pointer;
        font-size: 12px;
        color: #495060;
        &:first-of-type {
          margin-left: 15px;
        }
        &:last-of-type {
          margin-right: 15px;
        }
        &.active {
          background-color: #42b983;
          color: #ffffff;
          border-color:#42b983;
          &::before {
            content: '';
            background:#ffffff;
            width: 8px;
            height: 8px;
            display: inline-block;
            border-radius: 50%;
            margin-right: 2px;
          }
        }
        .el-icon-close {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          text-align: center;
          vertical-align: 2px;
          &:before {
            transform: scale(0.6);
            vertical-align: -2px;
          }
          &:hover {
            background-color: #b4bccc;
            color: white;
          }
        }
      }
    }
  }
</style>
