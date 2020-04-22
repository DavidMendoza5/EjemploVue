<template>
    <main role="main">
        <section class="jumbotron text-center">
            <div class="container">
                <h1>Bienvenido</h1>
                <p class="lead text-muted">
                    Esta es una página web hecho con Vue-Cli
                </p>
                <p>
                    <button class="btn btn-primary m-1">Login</button>
                    <button class="btn btn-secondary m-1">About</button>
                </p>
            </div>
        </section>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm" style="width: 15rem">
                            <img src="../assets/logo.png" class="card-img-top" width="100%" height="225">
                            <div class="card-body">
                                <h5 class="card-title">Vue</h5>
                                <p class="card-text">Tarjeta hecha con Vue</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="btn" class="btn btn-sm btn-outline-secondary">Clic</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm" style="width: 15rem">
                            <img src="../assets/postman.png" class="card-img-top" width="100%" height="225">
                            <div class="card-body">
                                <h5 class="card-title">Postman</h5>
                                <p class="card-text">Tarjeta hecha con Vue</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="btn" class="btn btn-sm btn-outline-secondary">Clic</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <section class="jumbotron text-center">
            <div class="container">
                <h1>Bienvenido</h1>
                <p class="lead text-muted">
                    Esta es una página web hecho con Vue-Cli
                </p>
                <p>
                    <button class="btn btn-primary m-1">Login</button>
                    <button class="btn btn-secondary m-1">About</button>
                </p>
            </div>
        </section>
    </main>
</template>


<style>
.text-center {
    text-align: center;
}
.jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
}
.jumbotron p:last-child {
    margin-bottom: 0;
}
.jumbotron .container {
    max-width: 40rem;
}
.mb-2 .my-2 {
    margin-bottom: .5rem!important;
}
.mt-2 .my-2 {
    margin-top: .5rem!important;
}
.btn {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: .375rem .75rem;
    line-height: 1.5;
    border-radius: .25rem;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 0em;
}
div {
    display: block;
}
</style>