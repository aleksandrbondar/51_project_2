import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import PersonIcon from '@mui/icons-material/Person';
import { UsersDataInterface } from '../../../storage/slices/usersSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const UserList = ({ data }: { data: UsersDataInterface[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID {<FormatListNumberedRtlIcon fontSize='small' />}</StyledTableCell>
            <StyledTableCell>Name {<PersonIcon fontSize='small' />}</StyledTableCell>
            <StyledTableCell align="right">Email {<MailOutlineIcon fontSize='small' />}</StyledTableCell>
            <StyledTableCell align="right">Phone {<PhoneIcon fontSize='small' />}</StyledTableCell>
            <StyledTableCell align="right">Website {<LanguageIcon fontSize='small' />}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell align="left">{item.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.email}</StyledTableCell>
              <StyledTableCell align="right">{item.phone}</StyledTableCell>
              <StyledTableCell align="right">{item.website}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserList