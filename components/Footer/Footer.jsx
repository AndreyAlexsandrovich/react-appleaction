import './Footer.css'
import  DataFooter  from "./DataFooter";

export default  function Footer() {
  return ( 
    <>
      <div className="footer-social">
          {DataFooter.map((item) => ( 
            <img src={item.img} alt={item.alt} className="img-social" key={item.id}/>
          ))}
      </div>
      <p className="footer-text">Templates #18. More on Figma.info</p>
    </>
  );
}
