
// import AuthContext  from '../components/authProvider'
import '../css/style_columns_rows.css'

export default function ColumnsRows() {

    var r =0 ;
    
    document.getElementById('btn').click()

    document.getElementById("btn").addEventListener('click', function() {
        r = 1;
        var tb = createTable(r, 3);

        document.getElementById('table-div').appendChild(tb);

    });



    function createTable(r) {

        var tb = document.createElement('table');

        for (var i = 0; i < r; i++) {
            var row = document.createElement('tr');
            // cambiar j para varias las filas
            for (var j = 0; j < 3; j++) {
                var column = document.createElement('td');
                column.appendChild(document.createTextNode(" row:" + i + " column:" + j));
                row.appendChild(column);
            }
            tb.appendChild(row);
        }

        return tb;
    }
    
    return (
        <div>
            <h2> rows and colomns </h2>
            <button type="submit" id="btn">make table</button>
            <div id="table-div"> </div>

        </div>
    )
}