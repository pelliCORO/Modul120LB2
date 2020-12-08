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
    <div class="Login">
        <div class="LoginForm">
            <form on:submit|preventDefault>
                <p>Email</p>
                <input type="text" bind:value={email}>
                <p>Password</p>
                <input type="text" bind:value={password}>
                <button on:click={login}>Login</button>
                <p> </p>
                <Link to="./Register">I don't have an Account </Link>
            </form>
        </div>
    </div>





        <div>
            <Route path="register" component="{Register}" />
        </div>

</main>


