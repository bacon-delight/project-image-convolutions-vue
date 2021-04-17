<template>
	<div class="wrapper">
		<router-view />
	</div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@300;500;700&display=swap");
*,
*:before,
*:after {
	box-sizing: border-box;
	font-family: "Noto Sans HK", sans-serif;
	font-weight: 300;
	outline: none;
}
html,
body {
	font-size: 62.5%;
	border: 0;
	margin: 0;
	padding: 0;
}
.wrapper {
	height: 100vh;
	width: 100vw;
	padding: 1rem 0;
	overflow-y: scroll;
}
</style>
