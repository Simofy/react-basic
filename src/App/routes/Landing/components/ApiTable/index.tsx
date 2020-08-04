import React, { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { Collapse, List, ListItem, ListItemText, LinearProgress } from '@material-ui/core';
import { demo } from './test';

async function handleApi(row: Number, col: Number) {
    const result = await (await fetch(`http://localhost:3001/random.php?column_count=${col}&row_count=${row}`)).json()
    return result;
}

export default function ApiTable({
    col,
}: {
    col: Array<string>,
}) {
    const id = useMemo(() => demo.index++,[]);
    console.log(id);

    const [expand, setExpand] = useState(0);
    const [loading, setLoading] = useState(false);
    const [table, setTable] = useState<Array<Array<string>>>([]);
    const parsedTable = useMemo(() => table.map((col) => (
        <ApiTable key={col[0]} col={col} />
     )), [table]);
    useEffect(() => {
        if(expand === 1) {
            setLoading(true)
            handleApi(20,1).then(data => {
                setLoading(false)
                setTable(data)})
        }
    }, [expand]);
    const handleClick = useCallback(() => {
        setExpand((oldOpen) => {
            if(oldOpen === 0) {
                return 1;
            }
            if(oldOpen === 1) {
                return 2;
            }
            if(oldOpen === 2) {
                return 3;
            }
            if(oldOpen === 3) {
                return 2;
            }
            return 0;
        });
      }, []);
    return <div style={{
        paddingLeft: "20px",
    }}>
              <ListItem button onClick={handleClick}>
                {col[0]}
      </ListItem>
        {loading && <LinearProgress />}
        <Collapse in={(expand === 1) || (expand === 3)} timeout="auto">
            {parsedTable}

      </Collapse>
    </div>
}

export class ApiTableWrapper extends React.Component<{
    col: Array<string>,
}> {
    shouldComponentUpdate(nextProps: any) {
        const {col: oldCol} = nextProps;
        const {col} = this.props;
        if(col.length !== oldCol.length) {
            return true;
        }
        return false;
    }
    
    render() {
        const {col} = this.props;
      return (<ApiTable col={col} />)
    }
}