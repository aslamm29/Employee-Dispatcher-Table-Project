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



class DispatcherTable extends Component{

    render(){
      const MyLink =  <Link to='/dispatch/new'>Create a New Entry</Link>
      const rows = this.props.dispatchers.map((dispatcher) => {
          return(
            <TableRow key={dispatcher.id}>
            <TableCell>{dispatcher.date}</TableCell>
            <TableCell>{dispatcher.project}</TableCell>
            <TableCell>{dispatcher.total}</TableCell>
            <TableCell>{dispatcher.close}</TableCell>
            <TableCell>{dispatcher.super}</TableCell>
          </TableRow>
          )
        })
        
        return(
            <div>
                <AppBar position="static" color="default">
                <Toolbar>
                <Typography variant="h6" color="inherit">
                Employee Dispatcher
                <div style={styles.button}><Button variant="contained">{MyLink}</Button></div>
                </Typography>
                </Toolbar>
                </AppBar>
                <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Close</TableCell>
            <TableCell>Super</TableCell>
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
    marginLeft: 1250
  }
}

function mapStateToProps(state){
  return({
    dispatchers: state.dispatchers
  })
}

export default connect(mapStateToProps)(DispatcherTable)
