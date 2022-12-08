<template>
    <div>
        <header>
            <div class="pages">
                <img src="../assets/logo.png" alt="logo">
                <button class="btn-meals">Meals</button>
            </div>
            <div class="functionalities">
                <button class="btn-logout">Logout</button>
                <button class="btn-cart">Cart</button>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    min-height: 10vh;
    width: 100vw;
    background: black;
}

img {
    width: 7vw;
}

button {
    width: clamp(100px, 9vw, 500px);
    border: none;
    border-radius: clamp(5px, 0.5vh, 30px);
    padding-block: 0.8vh;
    font-size: clamp(15px, 1vw, 100px);
    background: crimson;
    color: white;
    ;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    transition: all 0.3s;
}

button:hover {
    background: white;
    color: black;
}

button:active {
    transform: scale(0.98);
}

.btn-meals {
    background: darkgoldenrod;
    color: white;
    width: clamp(150px, 15vw, 700px);
}

.pages,
.functionalities {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20vw;
    margin-inline: clamp(20px, 10vw, 100px);
}

.pages {
    width: 27vw;
}
</style>