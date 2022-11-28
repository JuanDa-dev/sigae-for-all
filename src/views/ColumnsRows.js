import '../css/style_columns_rows.css'
import { useEffect, useState } from 'react'

export default function ColumnsRows({ title, dataPage }) {
    const [data, setData] = useState(dataPage)
    const [header, setHeader] = useState(data.length > 0 ? Object.keys(data[0]) : [])

    useEffect(() => {
        setData(dataPage)
        setHeader(dataPage.length > 0 ? Object.keys(dataPage[0]) : [])
    }, [dataPage])

    return (
        <div>
            <h2>{title}</h2>
            <div id="table-div"> 
                <table className="content-table">
                    <thead>
                        <tr>{header.slice(1, header.length).map((key, index) => <th key={index}>{key}</th>)}</tr>
                    </thead>
                    <tbody id="Row-Columns">
                        {data.map((dato, index1) => {
                            const columns = Object.keys(dato)
                            return <tr key={index1}>
                                {columns.slice(1, columns.length).map((key, index2) => {
                                    return <td key={index2}>{dato[key]}</td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}