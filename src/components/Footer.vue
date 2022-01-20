<template>
    <footer class="footer">
        <div class="footer_top">Groupomania {{ year() }}</div>
        <ul class="footer_bottom">
            <li class="footer_bottom_list">Confidentialité</li>
            <li class="footer_bottom_list">Cookies</li>
            <li class="footer_bottom_list">Mentions légales</li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    year() {
        const date = new Date();
        return date.getFullYear();
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
    display: flex;
    flex-direction: column;
    font-family: $light-text;
    font-size: 12px;
    padding: 40px 20px 20px 20px;
    &_top {
        padding: 0 0 10px 0;
        border-bottom: 1px solid #000;
    }
    &_bottom {
        display: flex;
        flex-direction: row;
            flex-wrap: wrap;
        margin: 10px auto;
        &_list {
            list-style: none;
            padding: 0 10px;
        }
    }
}
</style>