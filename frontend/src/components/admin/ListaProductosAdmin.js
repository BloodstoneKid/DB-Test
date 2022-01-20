import React from 'react';
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function ListaProductosAdmin(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

    const fetchItems = async () => {
        const data = await fetch(`/getinfoproductos/${id}`);
        const items = await data.json();
        setItems(items);
    };

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Imagen</Table.HeaderCell>
                        <Table.HeaderCell>Descripcion</Table.HeaderCell>
                        <Table.HeaderCell>Caracteristicas</Table.HeaderCell>
                        <Table.HeaderCell>Colores</Table.HeaderCell>
                        <Table.HeaderCell>Montaje</Table.HeaderCell>
                        <Table.HeaderCell>Dimensiones(AxL)</Table.HeaderCell>
                        <Table.HeaderCell>Precio</Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {items.map(item => (
                    <Table.Row>
                        <Table.Cell>{item.nombre}</Table.Cell>
                        <Table.Cell>{item.imagen}</Table.Cell>
                        <Table.Cell>{item.descripcion}</Table.Cell>
                        <Table.Cell>{item.caracteristicas}</Table.Cell>
                        <Table.Cell>{item.colores}</Table.Cell>
                        <Table.Cell>{item.montaje}</Table.Cell>
                        <Table.Cell>{item.ancho}x{item.largo}</Table.Cell>
                        <Table.Cell>{item.precio}$</Table.Cell>
                        <Link to='/updateproducto/'><Table.Cell><Button onClick={() => setData(item)}>Editar</Button></Table.Cell></Link>
                        <Table.Cell><Button onClick={() => setData(item)}>Eliminar</Button></Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default ListaProductosAdmin;
