const Card = ({userdata, handleUserdata, handleEdit}) => {
  return (
    <section className='card-block'>
      {userdata.map(value => {
        return (
          <article className="box">
            <h2 className="heading">{value.title}</h2>
            <p className="details">{value.data}</p>
            <div>
              <button className="btn1" onClick={() => { handleEdit(value.id) }}>Edit</button>
              <button className="btn2" onClick={() => { handleUserdata(value.id) }}>Delete</button>
            </div>
          </article>
        );
      })}
    </section>
  )
}

export default Card
