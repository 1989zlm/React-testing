//BİR ÜST BİLEŞENDEN GÖNDERİLEN VERİLERE ERİŞMEK İSTİYORSAK
//BİLEŞENİN FONKSİYONUN PARAMETRE KISMINDAN VERİLERE ERİŞEBİLRİİZ
const Card = (props) => {
  console.log(props);
  return (
    <div className="Card">
      <img src={props.image} />
      <p></p>

      <div className="body">
        <h4 className="automotıv">{props.category} </h4>

        <h3>{props.title} </h3>
      </div>
    </div>
  );
};

export default Card;
