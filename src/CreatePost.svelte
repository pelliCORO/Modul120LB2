<script>
    import * as axios from "axios";
    export let errorCode = "";
    let subscription = 1;

    let title = "";
    let body = "";
    let thumbnail = "";


    function posten() {
        axios.default.post("https://api-m120.mailino.io/api/posts", {
            email: title,
            password: body,
            thumbnail: thumbnail,
            subscription: subscription
        }).then((response) => {
            console.log(response);
            window.location='./'
        }, (error) => {
            errorCode=error
            console.log(error);
        });
    }

</script>

<html>

<from>
    <p>Title</p>
    <input type="text" bind:value={title}>
    <p>Inhalt</p>
    <textarea type="text" bind:value={body}></textarea>
    <p>Thumbnail</p>
    <input type="text" bind:value={thumbnail}>

    <button on:click={posten}>Post</button>
    <p> {errorCode} </p>
</from>
</html>