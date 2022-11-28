
// import AuthContext  from '../components/authProvider'
import '../css/style_columns_rows.css'

export default function ColumnsRows() {

    document.getElementById('btn').click()

    document.getElementById("btn").addEventListener('click', function() {
        //Solo hay que modificar el numero 3, para cambiar el numero de columnas
        var tb = createTable(3);

        document.getElementById('Row-Columns').appendChild(tb);

    });



    function createTable(c) {

        var row = document.createElement('tr');

        for (var j = 0; j < c; j++) {
            var column = document.createElement('td');
            column.appendChild(document.createTextNode( " column:" + j));
            row.appendChild(column);
        }
            
        
        
        return row;
    }
    
    return (
        <div>
            <h2> rows and colomns </h2>
            <button type="submit" id="btn">make table</button>
            <div id="table-div"> 
                <table className="content-table">
                    <thead>
                        <tr>
                        <th>Some Stuff</th>
                        <th>Some Stuff</th>
                        <th>Some Stuff</th>
                
                        </tr>
                    </thead>
                    <tbody id="Row-Columns">

                    </tbody>
                </table>
            </div>

        </div>
    )
}