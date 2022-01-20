import React from 'react';
import '../Sections.css';
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


function EditarListaCategorias(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/getinfotodascategorias');
        const items = await data.json();
        setItems(items);
    };
    const fetchItems2 = async (id) => {
        const data2 = await fetch(`/getcategoria/${id}`);
        const items2 = await data2.json();
        setItems(items2);
        return items2.nombre;
    };
    return(
        <div>
            <br></br>
            <Link to='/crearcategoria'><Button color = "success">Agregar Categoria</Button></Link>
            <br></br> <br></br>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Nivel</Table.HeaderCell>
                        <Table.HeaderCell>Descripcion</Table.HeaderCell>
                        <Table.HeaderCell>Subcategoría</Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            
                <Table.Body>
                {items.map(item => (
                    <Table.Row>
                        <Table.Cell>{item.nombre}</Table.Cell>
                        <Table.Cell>{item.nivel}</Table.Cell>
                        <Table.Cell>{item.descripcion}</Table.Cell>
                        <Table.Cell>{fetchItems2(item.fk_categoria)}</Table.Cell>
                        <Link to='/updatecategoria/${item.id_categoria}'><Table.Cell><Button>Editar</Button></Table.Cell></Link>
                        <Table.Cell><Button onClick={() => setData(item)}>Eliminar</Button></Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
        </Table>
    </div>);

}

export default EditarListaCategorias;