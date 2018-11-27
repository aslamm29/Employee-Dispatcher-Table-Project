import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Unavailable extends Component{
    render(){
        const MyLink =  <Link to='/unavailable/new'>Add</Link>
        const rows = this.props.unavailables.map((unavailable) => {
          return(
            <TableRow key={unavailable.id}>
            <TableCell>{unavailable.employeename}</TableCell>
            <TableCell>{unavailable.classun}</TableCell>
            <TableCell>{unavailable.projectdescun}</TableCell>
            <TableCell>{unavailable.dateun}</TableCell>
          </TableRow>
          )
        })
        return(
            <div>
                <AppBar position="static" color="default">
                <Toolbar>
                <Typography variant="h6" color="inherit">
                Unavailable
                <div style={styles.button}><Button variant="contained">{MyLink}</Button></div>
                </Typography>
                </Toolbar>
                </AppBar>
                <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Project Description</TableCell>
            <TableCell>Available Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows }
        </TableBody>
      </Table>
    </Paper>
            </div>
        )
    }
}

const styles = {
  button: {
    float: 'right',
    marginLeft: 625
  }
}

function mapStateToProps(state){
  return{
    unavailables: state.unavailables
  }
}

export default connect(mapStateToProps)(Unavailable)