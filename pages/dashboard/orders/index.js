import Table from '../../../components/atoms/Table'
import Layout from '../../../components/template/DashboardLayout'

const data = [
  {
    id: 1,
    trackNo: 'QH46',
    date: 'july 2020',
    item: 'Bags',
    from: 'Lagos Leki',
    to: 'Port harcourt',
    status: 'Active',
    price: 2000,
  },
  {
    id: 2,
    trackNo: 'QH45',
    date: 'march 2020',
    item: 'Bags',
    from: 'Lagos Leki',
    to: 'Port harcourt',
    status: 'Completed',
    price: 2000,
  },
  {
    id: 3,
    trackNo: 'QH44',
    date: 'july 2020',
    item: 'Bags',
    from: 'Lagos Leki',
    to: 'Port harcourt',
    status: 'Completed',
    price: 2000,
  },
  {
    id: 4,
    trackNo: 'QH43',
    date: 'july 2020',
    item: 'Bags',
    from: 'Lagos Leki',
    to: 'Port harcourt',
    status: 'Cancelled',
    price: 2000,
  },
  {
    id: 5,
    trackNo: 'QH42',
    date: 'july 2020',
    item: 'Bags',
    from: 'Warri',
    to: 'Lagos',
    status: 'Active',
    price: 2000,
  },
  {
    id: 6,
    trackNo: 'QH42',
    date: 'july 2020',
    item: 'Bags',
    from: 'Warri',
    to: 'Lagos',
    status: 'Active',
    price: 2000,
  },
  {
    id: 7,
    trackNo: 'QH42',
    date: 'july 2020',
    item: 'Bags',
    from: 'Warri',
    to: 'Lagos',
    status: 'Active',
    price: 2000,
  },
  {
    id: 8,
    trackNo: 'QH42',
    date: 'july 2020',
    item: 'Bags',
    from: 'Kanu',
    to: 'Calabar',
    status: 'Active',
    price: 2000,
  },
  {
    id: 9,
    trackNo: 'QH42',
    date: 'july 2020',
    item: 'Bags',
    from: 'Owerri',
    to: 'Lagos',
    status: 'Active',
    price: 2000,
  },
  {
    id: 10,
    trackNo: 'QH42',
    date: 'july 2020',
    item: 'Bags',
    from: 'Jos',
    to: 'Kastina',
    status: 'Active',
    price: 2000,
  },
]

const columns = [
  {
    Header: '.',
    columns: [
      {
        Header: 'Track No',
        accessor: 'trackNo',
        sortType: 'basic',
        filter: 'text',
        style: {
          fontWeight: 'bolder',
        },
        // getProps: (state, rowInfo) => ({
        //   style: {
        //     backgroundColor: rowInfo.row.trackNo === 'green',
        //   },
        // }),
      },
      {
        Header: 'Date',
        accessor: 'date',
        sortType: 'basic',
        filter: 'text',
      },
      {
        Header: 'Item',
        accessor: 'item',
        sortType: 'basic',
        filter: 'text',
      },
      {
        Header: 'From',
        accessor: 'from',
        sortType: 'basic',
        filter: 'text',
      },
      {
        Header: 'To',
        accessor: 'to',
        sortType: 'basic',
        filter: 'text',
      },
      {
        Header: 'Status',
        accessor: 'status',
        sortType: 'basic',
        filter: 'text',
      },
      {
        Header: 'Price',
        accessor: 'price',
        sortType: 'basic',
        filter: 'text',
      },
      {
        Header: 'View',
        // Cell: ({ cell }) => (
        //   <button value={cell.id} onClick={() => handleRoute()}>
        //     view {cell.id}
        //   </button>
        // )
      },
    ],
  },
]

export default function OrdersPage() {
  return (
    <Layout title='Shipments orders'>
      <div className='container'>
        <h1>Orders Page</h1>
      </div>
      <Table columns={columns} data={data} />
    </Layout>
  )
}
