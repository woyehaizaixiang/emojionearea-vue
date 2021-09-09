<template>
  <div class="v-editor-emoji" :class="$attrs.disbaled?'disabeld':''">
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
        change(){
          let text = $(this.$refs.textarea)[0].emojioneArea.getText();
          this.$emit('change',text);
          this.$emit('input',text);
          $(this.$refs.textarea)[0].emojioneArea.setText(this.value);
        },
        onLoad(){
          $(this.$refs.textarea)[0].emojioneArea.setText(this.value);
        },
      }
    });
  },
  watch: {
    value: {
      handler(){
        if(!$(this.$refs.textarea)[0].emojioneArea) return;
        let value = this.value;
        let text = $(this.$refs.textarea)[0].emojioneArea.getText();
        if(text == value) return;
        $(this.$refs.textarea)[0].emojioneArea.setText(this.value);
      },
    }
  }
}
</script>