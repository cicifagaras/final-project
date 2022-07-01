import React from "react"
import { Table } from "semantic-ui-react"
import { useEffect, useState  } from "react"
import axios from "axios"
import _ from 'lodash'
import "../css/Table.css"


const TableAdmin = () => {
    const url = "https://winter-sports-ac114-default-rtdb.europe-west1.firebasedatabase.app/"
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(url + ".json")
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const products = Object.values(APIData);
    console.log(APIData);
    const prodKeys = Object.keys(APIData)
    console.log(prodKeys);
    
  
    const setData = (i) => {
        localStorage.setItem("ProdKey", prodKeys[i]);
        window.location.reload(true);
    }

    const deleteTask = async (i) => {
        if ( 
            window.confirm(`Are you sure you want o delete this product?`)
        ) {
            const prodURL = url + prodKeys[i] + "/.json";
            const res = await fetch(prodURL, {
              method: 'DELETE',
            })
        }
        window.location.reload(true);
    }

    return (
        <div>
            <Table>
                <Table.Header className="tableHead">
                    <Table.Row >
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell >Category</Table.HeaderCell>
                        <Table.HeaderCell >Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body className="tableBody">
                    {products.map((data, i) => {
                        return (
                    <Table.Row key={data.id} className="column">
                        <Table.Cell>{data.name}</Table.Cell>
                        <Table.Cell>{data.id}</Table.Cell>
                        <Table.Cell>{data.category}</Table.Cell>
                        <Table.Cell>{data.quantity}</Table.Cell>
                        <Table.Cell>{data.price}</Table.Cell>
                        <Table.Cell> 
                            <button onClick={() => setData(i)}>Edit</button>
                        </Table.Cell>
                        <Table.Cell> 
                            <button onClick={() => deleteTask(i)}>Delete</button>
                        </Table.Cell>
                    </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default TableAdmin
