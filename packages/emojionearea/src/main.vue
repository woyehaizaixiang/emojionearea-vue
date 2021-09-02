<template>
  <div class="v-editor-emoji">
    <textarea class="textarea" ref="textarea"></textarea>
  </div>
</template>

<script>
import $ from "jquery";
import 'emojionearea-open/dist/emojionearea.min.js';
export default {
  name: 'Emojionearea',
  props: {
    value: {
      type: String || Number,
      default: '',
    },
  },
  mounted(){
    $(this.$refs.textarea).emojioneArea({
      ...this.$attrs,
      events:{
        change: (editor,event)=>{
          let text = $(this.$refs.textarea)[0].emojioneArea.getText();
          this.$emit('change',text);
          this.$emit('input',text);
        },
      }
    });
    $(this.$refs.textarea)[0].emojioneArea.setText(this.value);
  },
  watch: {
    value: {
      handler(){
        let value = this.value;
        let text = $(this.$refs.textarea)[0].emojioneArea.getText();
        if(text == value) return;
        $(this.$refs.textarea)[0].emojioneArea.setText(this.value);
      },
    }
  }
}
</script>