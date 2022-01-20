const Buscar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Buscar producto</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Nombre del producto"
            name="s" 
        />
        <button type="submit">Buscar</button>
    </form>
);

export default Buscar;