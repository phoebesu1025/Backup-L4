function ShowList({ itemList }) {
    return (
        <>
            {itemList.map((item) => (
                <h1>{item}</h1>
            ))}
        </>

    )
}

export default ShowList;
