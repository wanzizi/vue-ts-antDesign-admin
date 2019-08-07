<template>
    <div class="form-card">
        <router-view/>
    </div>
</template>

<style lang="less" scoped>
.form-card{
    height: calc(~'100% - 180px');
    overflow-y: auto;
    margin: 24px 24px 0;
    padding: 24px;
    background: #fff;
}
</style>
