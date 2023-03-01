import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios'
import { Link } from "react-router-dom";
const Create = () => {
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

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4"><Link to="/categories">Category</Link></h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Create</li>
            </ol>
            <div className="row">

            </div>
        </div>
    );
}

export default Create;
