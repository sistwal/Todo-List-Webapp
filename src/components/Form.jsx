import React from 'react'

const Form = ({handleTitle, handleData, handleSubmit}) => {
  return (
    <section>
        <article>
            <form className="form" onSubmit={handleSubmit}>
                <input className="title" type="text" name='title' placeholder='Title' onChange={e => handleTitle(e.target.value)} />
                <input className="description" type="text" name='descriptions' placeholder='Descriptions...' onChange={e => handleData(e.target.value)} />
                <button className="sub">Submit</button>
            </form>
        </article>
    </section>
  )
}

export default Form
