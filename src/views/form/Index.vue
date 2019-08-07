<template>
    <div class="form-card">
        <router-view/>
    </div>
</template>

<style lang="less" scoped>
.form-card{
    height: calc(~'100% - 185px');
    overflow-y: auto;
    margin: 24px 24px 0;
}
</style>
