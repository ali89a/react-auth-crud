import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios'
import { Link } from "react-router-dom";
const List = () => {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v2/all");
            setCategories(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCategories();
    }, []);
    console.log(categories);
    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Native Name",
            selector: (row) => row.nativeName
        },
        {
            name: "Action",
            cell: (row) => <button className="btn btn-primary btn-sm" onClick={()=>alert(row.alpha2Code)}>Edit</button>
        }
    ];
    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Category</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">List</li>
            </ol>
            <div className="row">
                <div className="col-xl-12 col-md-12">
                    <DataTable
                        title="Category List"
                        columns={columns}
                        data={categories}
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                        actions={
                           <Link to="/categories/create"> <button className="btn btn-primary">Add New</button></Link>
                        }
                        subHeader
                        subHeaderComponent={
                            <input type="text" className="form-control w-25" placeholder="Search.........."/>
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default List;
