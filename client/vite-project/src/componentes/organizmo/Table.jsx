import React from 'react';
import MaterialTable from 'material-table';

const Table = ({ data , name}) => {
  
const columns = [
    { title: 'Nombre', field: 'name' },
    { title:'Apellido' , File:'lastname'},
    { title: 'Hora', field: 'hours' },
    { title: 'Fecha', field: 'city' },
    { title: 'Telefono', field: 'phone' },
  ];



  const actions = [
    {
      icon: 'edit', // Icono del botón (puedes personalizarlo)
      tooltip: 'Editar',
      onClick: (event, rowData) => {
        // Agrega aquí la lógica que deseas para la acción de editar
        console.log('Editar', rowData);
      },
    },
    {
      icon: 'delete', // Icono del botón (puedes personalizarlo)
      tooltip: 'Eliminar',
      onClick: (event, rowData) => {
        // Agrega aquí la lógica que deseas para la acción de eliminar
        console.log('Eliminar', rowData);
      },
    },
  ];

  return (
    
    <MaterialTable
     actions={actions}
      title={name}
      columns={columns}
      data={data}
      options={{
        actionsColumnIndex: -1, 
      }}
      style={{width:'100%', maxHeight:'500px'}}
    />
  );
}

export default Table;
