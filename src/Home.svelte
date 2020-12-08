<script>

    import {onMount} from "svelte";
    import * as axios from "axios";
    let posts = [];
    onMount(function (){
        axios.default.get('https://api-m120.mailino.io/api/posts?active=true').then(function (value){
            posts = value.data
        })
    })
</script>

<html>

<body>

<header>
    <button class="navigation-einklappen"> &#128269; </button>
</header>
<div class="sidenav">

</div>
<main>
    <header>
        <h1>Blog Overview</h1>
    </header>
    <article class="container">

        {#each posts as post}

    <div class="Posts">
                <h3 class="PostTitle"> {post.title}</h3>
                <div class="PostBody">{post.body}</div>
        <button class="Edit"> &#9997;</button>
    </div>


        {/each}
    </article>
</main>
<footer>
</footer>

<script src="../public/index.js"></script>
</body>
</html>

