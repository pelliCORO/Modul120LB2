<script>
	import Home from "./Home.svelte";
	import BlogPost from "./BlogPost.svelte";
	import UserOveerview from"./UserOverview.svelte"
	import UserSettings from "./UserSettings.svelte";
	import Login from "./Login.svelte";
	import Register from "./Register.svelte"
	import CreatePost from "./CreatePost.svelte"


	import {Router, Link, Route} from "svelte-routing";

	export let url = "";
</script>


<Router url="{url}">


	<nav>
		<Link to="/">&#127969;</Link> |
		<Link to="UserSettings">&#128736;</Link>|
		<Link to="Login">&#128100;</Link>|
		<Link to="CreatePost">&#9997</Link>
	</nav>

	<div>
		<Route path="CreatePost" component="{CreatePost}" />
		<Route path="blogPost/:id" component="{BlogPost}" />
		<Route path="UserSettings" component="{UserSettings}" />
		<Route path="Login" component="{Login}" />
		<Route path="register" component="{Register}" />
		<Route path="/"><Home/></Route>

	</div>

</Router>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
