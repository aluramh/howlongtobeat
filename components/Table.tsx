import React from 'react'
import { useTable } from 'react-table'
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'
import { Game } from './types'

type ColumnItem = {
  Header: string
  accessor: keyof Game
}

type Props = { data: Game[] }

const Table: React.FC<Props> = props => {
  const { data } = props

  const columns: ColumnItem[] = React.useMemo(
    () => [
      {
        Header: 'Game',
        accessor: 'name'
      },
      {
        Header: 'Main story',
        accessor: 'gameplayMain' // accessor is the "key" in the data
      },
      {
        Header: 'Description',
        accessor: 'description'
      }
    ],
    []
  )

  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance

  return (
    <ChakraTable {...getTableProps()} variant='simple' colorScheme='teal'>
      <TableCaption>List of games to beat</TableCaption>

      <Thead>
        {// Loop over the header rows
        headerGroups.map(headerGroup => (
          // Apply the header row props
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {// Loop over the headers in each row
            headerGroup.headers.map(column => (
              // Apply the header cell props
              <Th {...column.getHeaderProps()}>
                {// Render the header
                column.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      {/* Apply the table body props */}
      <Tbody {...getTableBodyProps()}>
        {// Loop over the table rows
        rows.map(row => {
          // Prepare the row for display
          prepareRow(row)
          return (
            // Apply the row props
            <Tr {...row.getRowProps()}>
              {// Loop over the rows cells
              row.cells.map(cell => {
                // Apply the cell props
                return (
                  <Td {...cell.getCellProps()}>
                    {// Render the cell contents
                    cell.render('Cell')}
                  </Td>
                )
              })}
            </Tr>
          )
        })}
      </Tbody>
    </ChakraTable>
  )
}

export default Table
