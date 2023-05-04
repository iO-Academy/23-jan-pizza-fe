const LeaderBoardComponent = ({allToppings}) => {

    const toppingRows = allToppings
        .filter((topping) => topping.votes !== null)
        .map((topping) => (
            <tr key={topping.id}>
                <td>{topping.name}</td>
                <td>{topping.category}</td>
                <td>{topping.votes}</td>
            </tr>
        ))



    return (
        <>
            <table className="table-fixed">
                <thead>
                <tr>
                    <th>Topping</th>
                    <th>Category</th>
                    <th>Votes</th>
                </tr>
                </thead>
                    <tbody>{toppingRows}</tbody>
            </table>
        </>
    )
}

export default LeaderBoardComponent