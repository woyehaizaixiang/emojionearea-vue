<template>
  <div class="v-editor-emoji" :class="$attrs.disabled?'disabeld':''">
    <textarea class="textarea" ref="textarea"></textarea>
  </div>
</template>

<script>
import $ from "jquery";
import 'emojionearea-open/dist/emojionearea.min.js';
// 组件初始完成状态
let initState = false;
export default {
  name: 'Emojionearea',
  props: {
    value: {
      type: String || Number,
      default: '',
    },
  },
  mounted(){
    let _that = this;
    $(_that.$refs.textarea).emojioneArea({
      ..._that.$attrs,
      events:{
        change(){
          let text = $(_that.$refs.textarea)[0].emojioneArea.getText();
          _that.$emit('change',text);
          _that.$emit('input',text);
        },
        onLoad(){
          initState = true;
          $(_that.$refs.textarea)[0].emojioneArea.setText(_that.value);
        },
      }
    });
  },
  watch: {
    value: {
      handler(){
        if(!initState) return;
        let value = this.value;
        let text = $(this.$refs.textarea)[0].emojioneArea.getText();
        if(text == value) return;
        $(this.$refs.textarea)[0].emojioneArea.setText(this.value);
      },
    }
  }
}
</script>