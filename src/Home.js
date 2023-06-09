const Home = () => {
    const handleClick = () => {
        console.log("Hello champ !")
    }

    const handleClickAgain = (name) => {
        console.log("Hello " + name)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                handleClickAgain("Nemuel")
            }}>Click me again</button>
        </div>
    );
}
 
export default Home;