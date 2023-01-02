import React from 'react'
import Tableone from './Tableone'
import TableTwo from './TableTwo'
import TableThree from './TableThree'
import TableFour from './TableFive'
import TableFive from './TableFour'

export default function TableChoose(props) {
  switch(props.tablenumber)
  {
    case 1: return <Tableone/>
    case 2: return <TableTwo/>
    case 3: return <TableThree/>
    case 4: return <TableFour/>
    case 5: return <TableFive/>
  }
}
