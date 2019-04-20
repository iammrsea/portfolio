 <script lang="js">
  import ImageView from './ImageView.vue'
 import hljs from 'highlight.js/lib/highlight'
  import javascript from 'highlight.js/lib/languages/javascript'
  import bash from 'highlight.js/lib/languages/bash'
  import java from 'highlight.js/lib/languages/java'
  
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('bash', bash)
    hljs.registerLanguage('java', java)
//import hljs from 'highlight.js'
   
  import 'highlight.js/styles/atom-one-dark.css'

  export default {
    props: ["renderFunc", "staticRenderFuncs"],

    components: {
      ImageView
    },

    computed: {
      initHighlightJs () {
        let targets = document.querySelectorAll('pre code')
        targets.forEach((target) => {
          hljs.highlightBlock(target)
        })
      }
    },

    mounted() {
     this.initHighlightJs
    },

    render: function (createElement) {
    return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
    },

    created: function () {
      this.templateRender = new Function(this.renderFunc)();
      this.$options.staticRenderFns = new Function(this.staticRenderFuncs)();
    }
  }
 </script>