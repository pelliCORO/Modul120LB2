<script>
    import {Router, Link, Route} from "svelte-routing";
    import BlogPost from "./BlogPost.svelte";
    import {onMount} from "svelte";
    import * as axios from "axios";
    let posts = [];
    onMount(function (){
        axios.default.get('https://api-m120.mailino.io/api/posts?active=true').then(function (value){
            posts = value.data
        })
    })
    function getDetail(id) {
        axios.default.post('https://api-m120.mailino.io/api/posts/{id}', {
        })
    }


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
                <Link to="blogPost/{post.id}">Details </Link>
                <button class="Edit" on:click={() => getDetail("post.id")}> &#9997;</button>
    </div>


        {/each}
    </article>

    <div>
        <Route path="BlogPost" component="{BlogPost}" />
    </div>
</main>
<footer>
</footer>

<script src="../public/index.js"></script>
</body>
</html>

