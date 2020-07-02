<template>
    <button class="e-button">确定</button>
</template>

<script>
export default {
    name: '',

}
</script>

<style lang="scss" scoped>
    .e-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1rem;    /*按钮没有设置宽度*/    
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
    }
    .e-button:hover{
        border-color: var(--border-color-hover);
    }
    .e-button:active{
        background-color: var(--button-active-bg);
    }
    .e-button:focus{
        outline: none;
    }
</style>