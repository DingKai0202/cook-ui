<template>
  <button class="c-button" :class="{[`icon-${iconPosition}`]: true}">
    <c-icon v-if="icon" :name="icon"></c-icon>
		<div class="content">
    	<slot></slot>
		</div>
  </button>
</template>

<script>
export default {
		name: '',
		props: {
			icon: String,
			iconPosition: {
				type: String,
				default: 'left',
				validator(value) {
					return value !== 'left' && value !== 'right' ? false : true
				}
			}
		}
}
</script>

<style lang="scss" scoped>
    .c-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;    /*按钮没有设置宽度*/    
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
				display: inline-flex;
				justify-content: center;
				align-items: center;
				vertical-align: middle;

				&:hover{
					border-color: var(--border-color-hover);
				}
		
				&:hover{
						border-color: var(--border-color-hover);
				}
				&:active{
						background-color: var(--button-active-bg);
				}
				&:focus{
						outline: none;
				}
				> .icon {
					order: 1;
					margin-right: .3em;
				}
				> .content{
					order: 2;
				}
				&.icon-right{
					> .icon{
						order: 2;
						margin-right: 0;
						margin-left: .3em;
					}
					> .content{
						order: 1;
					}
				}
    }

</style>