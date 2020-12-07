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

<main>
    <h1>Home</h1>
    {#each posts as post}

        <ul>
            <li>{post.title}{post.body}</li>
        </ul>

    {/each}
</main>
