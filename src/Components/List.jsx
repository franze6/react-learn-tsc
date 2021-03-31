function List({ arr }) {
    return <ul>{arr.map(curr => <li key={curr}>{curr}</li>)}</ul>
} 

export default List;