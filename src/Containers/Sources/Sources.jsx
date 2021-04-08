import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SourceList from '../../Components/SourceList/SourceList';

function Sources(props) {
    let [sources, setSources] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/sources',
        params: {lang: 'en'},
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
        }
      };

      useEffect(() => {
        let mounted = true;
        // setSources(['test1', 'test2', 'source3', 'lorem ipsum']);
        axios.request(options).then(function (response) {
          if(mounted) {
            setSources(response.data);
            console.log(response.data);
          }
        }).catch(function (error) {
            console.error(error);
        });
        return () => {
          mounted = false;
        }
      }, []);

    return (
        <div>
            {(sources && sources.length > 0) ? 
            <SourceList sources={sources}></SourceList>
          : <div>Loading...</div>}
        </div>
    );
}

export default Sources;