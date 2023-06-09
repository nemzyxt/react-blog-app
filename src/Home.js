const Home = () => {
    const handleClick = () => {
        console.log("Hello champ !")
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name)
        console.log(e.target)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickAgain("Nemuel", e)
            }}>Click me again</button>
        </div>
    );
}
 
export default Home;