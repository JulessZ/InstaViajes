export let crearviaje = `
    <div class="container">
        <div class="row">
            <div class="col-12 border">
                <h1>Creación de tu viaje</h1>
            </div>
            <div class="col-12 border" id="formcrearviajes">
                <form>
                <div>
                    <label for="">Nombre</label>
                    <input type="text">
                </div>
                <div class="style-dates">
                    <div>
                        <label for="">Fecha de inicio</label>
                        <input type="text">
                    </div>
                    <div>
                        <label for="">Fecha final</label>
                        <input type="text">
                    </div>
                </div>
                <div class="style-location">
                    <div>
                        <label for="">Origen</label>
                        <input type="text">
                    </div>
                    <div>
                        <label for="">Destino</label>
                        <input type="text">
                    </div>
                </div>
                <div class="style-desc">
                    <div>
                        <label for="">Desc</label>
                        <textarea></textarea>
                    </div>
                    <div class="style-budget">
                        <div>
                            <label for="">Presupuesto aprox</label>
                        </div>
                            <input type="range">
                            <span>3000 €</span>
                    </div>
                </div>
                <div class="style-friends">
                    <div>
                        <label>Invitar amigos</label>
                        <!-- Contenedor de amigos agregados -->
                        <div class="style-friends-invited">
                            <!-- Contenedor de foto de amigo -->
                            <div>
                                <img src="a"/>
                            </div>
                            <div>
                                <img src="a"/>
                            </div>
                        </div>
                        <input type="search">
                    </div>
                    <!-- Contenedor de búsqueda de amigos -->
                    <div class="style-friends-searched">
                        <!-- Contenedor amigo -->
                        <div>
                            <!-- Foto de amigo -->
                            <div>
                                <img src="a"/>
                            </div>
                            <!-- Nombre de amigo -->
                            <div>
                                Nombre
                            </div>
                        </div>
                        <div>
                            <!-- Foto de amigo -->
                            <div>
                                <img src="a"/>
                            </div>
                            <!-- Nombre de amigo -->
                            <div>
                                Nombre
                            </div>
                        </div>
                        <div>
                            <!-- Foto de amigo -->
                            <div>
                                <img src="a"/>
                            </div>
                            <!-- Nombre de amigo -->
                            <div>
                                Nombre
                            </div>
                        </div>
                    </div>
                </div>
                <div class="style-buttons-create">
                    <div>
                        <button>Añadir viaje</button>
                    </div>
                    <div>
                        <button>Cancelar</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
`