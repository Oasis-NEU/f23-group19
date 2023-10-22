const Searchbar = () => {
    return (
      <>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className="mt-4">
          <input
            placeholder="Book your next adventure now!"
            className="form-control rounded-pill ps-3"
            style={{ width: "50%", backgroundColor: "#FFFFFF", color: "#000000" }}
          />
        </div>
      </>
    );
  };
  export default Searchbar;