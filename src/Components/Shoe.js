const Shoe = () => {
  return (
    <main className="container">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST SHOES.</h1>
        <p className="ParaOne">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="contentButton">
            <button className="ShopButton">Shop Now</button>
            <button className="categoryButton">Category</button>
        </div>
        <div className="ShopSite">
<p> Also available on</p>
<div className="icons">
<img className="imgIcons" src="..\images\flipkart-image.png " alt="Flipkart" />
<img className="imgIcons" src="..\images\amazon.jpg " alt="amazon" />
</div>
        </div>
      </div>

      <div className="shoeImage">
        <img src="..\images\shoe_image.png" />
      </div>
    </main>
  );
};

export default Shoe;
