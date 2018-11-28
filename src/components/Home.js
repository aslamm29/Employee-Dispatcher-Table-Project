import React, { Component } from 'react'
import DispatcherTable from './DispatcherTable'
import Available from './Available'
import Unavailable from './Unavailable'

class Home extends Component{
    render(){
        return(
            <div>
                //Comment Line
                <DispatcherTable />
                <div style={styles.row}>
                <Available />
                </div>
                <div style={styles.column}>
                <Unavailable />
                </div>
            </div>
        )
    }
}

const styles = {
    row: {
        float: 'left',
        width: '49.7%',
        marginTop: 10,
        marginRight: 10
    },
    column: {
        float: 'left',
        width: '49.7%',
        marginTop: 10
    }
}

export default Home