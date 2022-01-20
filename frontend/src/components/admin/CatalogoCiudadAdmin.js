import React, { useEffect, useState } from 'react';
import '../Sections.css';

function CatalogoCiudadAdmin(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;
    const id_region = 0;

    const fetchItems = async () => {
        const data = await fetch(`/getcatalogo/${id}`);
        const items = await data.json();
        setItems(items);
    }

    const fetchRegion = async () => {
        const data = await fetch(`/getregioncatalogo/${id_region}`);
        const itemsR = await data.json();
        setItems(itemsR);
        return itemsR.nombre;
    };

    

    return(<section>
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Fecha Inicial</Table.HeaderCell>
                        <Table.HeaderCell>Fecha Final</Table.HeaderCell>
                        <Table.HeaderCell>Pais</Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            
                <Table.Body>
                {items.map(item => (
                    <Table.Row>
                        <Table.Cell>{item.fecha_inicial}</Table.Cell>
                        <Table.Cell>{item.fecha_final}</Table.Cell>
                        <Table.Cell>{fetchRegion(item.Region_id_region)}</Table.Cell>
                        <Link to='/updatecategoria'><Table.Cell><Button onClick={() => setData(item)}>Editar</Button></Table.Cell></Link>
                        <Table.Cell><Button onClick={() => setData(item)}>Eliminar</Button></Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
        </Table>
    </div>
    </section>);

}

export default CatalogoCiudadAdmin;