import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    axios.get('https://tasty-crow-rugby-shirt.cyclic.app/final_project')
      .then(res => {
        console.log(res.data)
        setCustomers(res.data)
      })
  }, [])

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <h1>Dashboard</h1>
      <h2>ตารางวัดค่าน้ำ</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>TIME</TableCell>
              <TableCell>TDS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {final_project.map((final_project) => (
              <TableRow key={final_project.id}>
                <TableCell component="th" scope="row">
                  {final_project.id}
                </TableCell>
                <TableCell>{final_project.date}</TableCell>
                <TableCell>{final_project.time}</TableCell>
                <TableCell>{final_project.tds}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
