<template>
    <div>
        <header>
            <i class="fas fa-bars" @click="showMenu()" />
            <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
                <img src="../assets/logo.png" alt="logo">
                <div class="nav-items">
                    <button class="menu">Menu</button>
                    <div class="settings">
                        <button>About</button>
                        <button>Cart</button>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>


<style scoped>
header {
    background-color: black;
}

button {
    background: transparent;
    border: none;
    border-radius: clamp(5px, 0.5vh, 30px);
    color: white;
    cursor: pointer;
    font-size: clamp(15px, 1vw, 100px);
    font-weight: 600;
    padding-block: 0.8vh;
    transition: all 0.4s;
    width: clamp(100px, 9vw, 500px);
}

button:hover {

    background: white;
    color: black;
}

button:active {
    transform: scale(0.95);
}

img {
    width: clamp(100px, 7vw, 300px)
}

i {
    display: none;
}

.menu {
    background: darkgoldenrod;
    width: clamp(150px, 15vw, 700px);
}

.nav-content {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
}

.nav-items {
    align-items: center;
    display: flex;
    flex-basis: 80%;
    justify-content: space-between;
    margin: 0;
    padding: 0;
}

.settings {
    display: flex;
    justify-content: space-between;
    width: clamp(350px, 36vw, 1000px);
}

@media screen and (max-width: 768px) {
    header {
        width: 100%;
    }

    .open-menu {
        min-height: 150px;
        opacity: 1;
    }

    .closed-menu {
        height: 0;
        opacity: 0;
        padding: 0;
    }

    .nav-content,
    .nav-items {
        flex-direction: column;
    }

    i {
        color: white;
        display: block;
        font-size: clamp(30px, 2vw, 100px);
        padding: 20px;
        text-align: right;
    }

    .settings {
        flex-direction: column;
        width: 100%;
    }

    button,
    .menu {
        margin: auto;
        width: clamp(200px, 50vw, 400px);
    }
}
</style>


<script>
export default {
    name: 'Header',
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
}
</script>