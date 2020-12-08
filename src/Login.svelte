<script>
    import {Router, Link, Route} from "svelte-routing";
    import Register from "./Register.svelte"
    import Home from "./Home.svelte"
    export let url = "";
    export let errorCode = "";

    import * as axios from "axios";

    let email = "";
    let password = "";

    function login() {
        axios.default.post('https://api-m120.mailino.io/api/auth/login', {
            email: email,
            password: password,
        }).then((response) => {
            console.log(response);
            window.location='./'
        }, (error) => {
            errorCode=error
            console.log(error);
        });


    }
</script>

<main>
    <div class="Login">
        <div class="LoginForm">
            <form on:submit|preventDefault method="get" action="./Home.svelte">
                <p>Email</p>
                <input type="text" bind:value={email}>
                <p>Password</p>
                <input type="text" bind:value={password}>
                <button on:click={login}>Login</button>
                <p> {errorCode} </p>
                <Link to="register">I don't have an Account </Link>

            </form>
        </div>
    </div>





        <div>
            <Route path="/"><Home/></Route>
            <Route path="register" component="{Register}" />
        </div>

</main>


