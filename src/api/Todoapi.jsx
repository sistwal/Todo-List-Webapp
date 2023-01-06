import React, { useState } from 'react'
import Card from '../components/Card';
import Form from '../components/Form';

const Todoapi = () => {
    let [userdata , setUserdata] = useState([
        {
            id: Math.floor(Math.random()*10000000000),
            title: "How to become a good programmer",
            data: "Solve 1 Problem Daily",
        },
    ]);

    let [data , setData] = useState("");
    let [title , setTitle] = useState("");

    let handleData = value =>{
        setData(value);
    };

    let handleTitle = value =>{
        setTitle(value);
    };

    let handleSubmit= e =>{
        e.preventDefault();

        if(data && title){
            setUserdata([
                ...userdata,{
                    id: Math.floor(Math.random()*10000000000),
                    data: data,
                    title : title,
                },
            ]);

            document.forms[0].elements.title.value = "";
            document.forms[0].elements.descriptions.value = "";

        }

        setData("");
        setTitle("");
    }

    let handleEdit = id =>{
        setUserdata(
            userdata.filter(value =>{
                if(value.id==id){
                    document.forms[0].elements.title.value = value.title;
                    setData(value.data);
                    setTitle(value.title);
                    document.forms[0].elements.descriptions.value = value.data;
                }
                return value.id != id;
            })
        )
    }

    let handleUserdata = id =>{
        if(confirm("do you want to delete this task")){
            setUserdata(
                userdata.filter(value =>{
                    return value.id != id;
                })
            )
        };
    } 
  return (
    <section>
        <article>
            <Form  handleData={handleData} handleSubmit = {handleSubmit} handleTitle = {handleTitle}>
                
            </Form>
                <br /><br /><br /><br />

            <Card  userdata={userdata} handleUserdata={handleUserdata}  handleEdit={handleEdit}>
                    
            </Card>
            
        </article>
    </section>
  )
}

export default Todoapi