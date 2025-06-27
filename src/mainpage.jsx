import "./mainpage.css"

const MainPage = () => {
    return (
      <>
        <main className="main d-flex">
          <div>
            <h1 className="print">Quality Prints</h1>
            <p className="ship">Shipped to your doorstep</p>
            <p className="what">What would you like to print today?</p>

            <div className="position-relative">
              <input
                className="input "
                type="text"
                placeholder="Search for Business cards, T-shirts, Mugs, etc"
              />
              <i
                className="fa-solid fa-magnifying-glass position-absolute"
                style={{
                  top: "50%",
                  right: "0px",
                  transform: "translateY(-50%)",
                }}
              ></i>
            </div>
          </div>
          <div>
            <img className="img" width={400}
              src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1623764552/printivo/Card3_n9kqin.png"
              alt=""
            />
          </div>
        </main>
      </>
    );
}

export default MainPage