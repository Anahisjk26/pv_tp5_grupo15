import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TableHead,
  Paper,
} from '@mui/material';
import { ActionsTable } from './ActionsTable';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MaintContext } from '../../layouts/MainLayout';
import { CustomModal } from '../ui/modal/CustomModal';
//  Componente principal de tabla
export const TableComponent = ({
  columns,
  data,
  rowsPerPageOptions = [5, 10, 25],
}) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[1]);
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [user, setUser] = useState({});
  const visibleRows = rowsPerPage > 0
    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : data;


  // FUNCIONES AL ELIMINAR, EDITAR O VER 
  // data traida del contexto , el setAlumnos se usa en el onDelete junto con los services: 
  const { alumnos, setAlumnos } = useContext(MaintContext);
  // recibe el lu que es un campo unico de cada estudiante
  const onView = (lu) => {
    navigate(`/list-students/detail-student/${lu}`)
  }
  const onEdit = (lu) => {
    //  logica para editar se aplica en componente EditStudent
    navigate(`/list-students/edit-student/${lu}`)
  }

  //  logica para eliminar, aqui si se usan services y el setAlumnos
  const onDelete = (alumno) => {
    setOpenModal(true);
    setUser(alumno)

  };
  const deleteUser = (user) => {

    const nuevosAlumnos = alumnos.filter(alumno => user.Lu !== alumno.Lu);
    setOpenModal(false);
    setAlumnos(nuevosAlumnos);

  }
  return (
    <TableContainer sx={{ mb: 5 }} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell sx={{ fontWeight: 600 }} key={col.label} align={col.align || 'left'}>
                {col.label.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {visibleRows.map((row, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell sx={{ fontWeight: 400, fontSize: 16 }} key={col.label} align={col.align || 'left'}>

                  {col.label == "Acciones" ? <ActionsTable onDelete={() => onDelete(row)} onEdit={() => onEdit(row.Lu)} onView={() => onView(row.Lu)}></ActionsTable> : col.label == "Lu" ? `# ${row[col.label]}` : row[col.label]}
                </TableCell>
              ))}
            </TableRow>
          ))}

          {visibleRows.length == 0 && (
            <TableRow >
              <TableCell sx={{ textAlign: "center", fontSize: 16, fontWeight: 600 }} colSpan={columns.length}  >
                No se encontraron estudiantes.
              </TableCell>
            </TableRow>
          )}
        </TableBody>


      </Table>
      {visibleRows.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página"
          labelDisplayedRows={() => ""}
        />)}
      <CustomModal button={true} textButton="Eliminar" variantButton="contained" colorButton={"error"} user={user} onClickButon={() => deleteUser(user)} open={openModal} setOpen={setOpenModal} title={"Eliminar alumno"} description={`Seguro que deseas eliminar al alumno ${user.nombre + " " + user.apellido} ?`} ></CustomModal>
    </TableContainer>
  );
};

