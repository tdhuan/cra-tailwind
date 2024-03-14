import DataGrid, {Column, SelectColumn} from 'react-data-grid'
import 'react-data-grid/lib/styles.css';

type Row = {
  id?: number;
  name: string;
  status: string
}

const columns: Column<Row>[] = [
  SelectColumn,
  {
    key: 'name',
    name: 'Name',
    width: '50%',
  },
  {
    key: 'status',
    name: 'Status',
  },
];

const DataTable = () => {
  const rows: Row[] = [
    {
      id: 1,
      name: 'Document 1111',
      status: 'Draft'
    },
    {
      id: 2,
      name: 'Document 2222',
      status: 'Sent'
    }
  ]
  return <div><DataGrid columns={columns} rows={rows}/></div>
}
export default DataTable
