<template>

    <main class="layout">
        <header class="layout__header">
            <slot name="header"></slot>  
        </header>  
        <aside class="layout__aside">
            <slot name="aside"></slot>  
        </aside>
        <article class="layout__article">
            <slot></slot>  
        </article>
        <footer class="layout__footer">
            <slot name="footer"></slot>  
        </footer>
    </main>
</template>

<style lang="scss" scoped>

    .layout{
        height : 200px;

        display: grid;
        grid-template: 
        "header"
        "article"
        "aside"
        "footer";
        
        @include medium-up {
        grid-template:
        "header header header"
        "article article aside"
        "footer footer footer" ;
        }
        > * {
            padding: rem(16);
        }
        &__header {
            background: $primary-color;
            grid-area: header;

        }
        &__aside {
            grid-area: aside;
           
        }
        &__article {
            grid-area: article;
        }
        &__footer {
            grid-area: footer;
            background: orange;
        }
    }
</style>