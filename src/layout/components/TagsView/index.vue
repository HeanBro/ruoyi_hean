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
        :to="{path: tag.name}"
        class="tag-view-item"
      >
        {{tag.title}}
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
      }
    }
  }
</style>
