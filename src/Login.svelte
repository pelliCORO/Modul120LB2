<script>
    import {Router, Link, Route} from "svelte-routing";
    import Register from "./Register.svelte"
    export let url = "";

    import * as axios from "axios";

    let email = "";
    let password = "";

    function login() {
        axios.default.post('https://api-m120.mailino.io/api/auth/login', {
            email: email,
            password: password,
        })
    }
</script>
<main>
<form on:submit|preventDefault>
    <input type="text" bind:value={email}>
    <input type="text" bind:value={password}>
    <button on:click={login()}>Login</button>
</form>


            <Link to="./Register">Register</Link>
        <div>
            <Route path="register" component="{Register}" />
        </div>

</main>


