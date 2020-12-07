<script>
    import {Router, Link, Route} from "svelte-routing";
    import Register from "./Register.svelte"
    export let url = "";

    import * as axios from "axios";
    let uuid ="";
    let firstName = "";
    let lastName = "";
    let email = "";
    let password = "";
    let street = "";
    let streetNr = "";
    let zip = "";
    let city = "";
    let country = "";
    let posts = "";

    function register() {
        axios.default.post('https://api-m120.mailino.io/api/users', {

            uuid: uuid,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            street: street,
            streetNr: streetNr,
            zip: zip,
            city: city,
            country: country,
        })
    }

</script>
<main>
    <form on:submit|preventDefault>
        <p>firstName</p>
        <input type="text" bind:value={firstName}>
        <p>lastName</p>
        <input type="text" bind:value={lastName}>
        <p>email</p>
        <input type="text" bind:value={email}>
        <p>password</p>
        <input type="text" bind:value={password}>
        <p>street</p>
        <input type="text" bind:value={street}>
        <p>streetNr</p>
        <input type="text" bind:value={streetNr}>
        <p>zip</p>
        <input type="text" bind:value={zip}>
        <p>city</p>
        <input type="text" bind:value={city}>
        <p>country</p>
        <input type="text" bind:value={country}>
<p> </p>
        <button on:click={register()}>Registrieren</button>
    </form>

 <!--   <Router url="{url}">
        <Link to="./Register">Register</Link>
        <div>
            <Route path="register" component="{Register}" />

        </div>
    </Router>

    -->
</main>


