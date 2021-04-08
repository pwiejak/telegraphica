import React from 'react';
import { useState } from 'react';
import styles from './SourceList.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import SourceFilter from '../SourceFilter/SourceFilter';

const SourceList = ({sources}) => {
    const [filter, setFilter] = useState('');
    const [filteredSources, setFilteredSources] = useState(sources);

    let handleFilterChange = (val) => {
        if(val !== filter) {
            setFilter(val);
            filterSources(val);
        }
    }

    let filterSources = (val) => {
        var filtered = filter.length === 0 
        ? sources
        : sources.filter(s => s.includes(val));
        setFilteredSources(filtered);
    }

    return (
        <>
        <Container>
            <Row>
                <SourceFilter value={filter} onChange={handleFilterChange}/>
            </Row>
            <ul className={styles.list}>
                {filteredSources.map(item => <li key={item}>{item}</li>)}
            </ul>
        </Container>
        </>
    );
};

export default SourceList;