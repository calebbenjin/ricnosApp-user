import styled from 'styled-components'

export default function GlobalFilters({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows && preGlobalFilteredRows.length

  return (
    <div className="container">
      <SearchHeader>
        <input
          value={globalFilter || ''}
          onChange={(e) => {
            setGlobalFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
          }}
          placeholder='Search Orders'
          style={{
            outline: 'none',
          }}
        />

        {/* <Input type="text" placeholder="search Orders" /> */}
      </SearchHeader>
    </div>
  )
}

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  input {
    padding: 15px;
    background: #fff;
    border-radius: 6px;
    width: 50%;
    border: solid 1px #333;
  }
`
