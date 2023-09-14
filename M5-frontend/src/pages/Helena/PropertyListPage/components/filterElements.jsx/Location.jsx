import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

export default function Location() {
  const [suburb, setSuburb] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/properties').then((response) => {
      console.log(response.data);
      const receivedSuburb = response.data.map((property) => property.address.suburb);
      const removeDuplicate = [...new Set(receivedSuburb)];
      console.log(removeDuplicate);
      setSuburb(removeDuplicate);
    });
  }, []);

  return (
    <div>
      <div className="left-[189px] top-[308px] absolute text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
        Location
      </div>
      <div className="left-[189px] top-[408px] absolute text-black">
        <Stack spacing={2} sx={{ width: 250}}>
          <Autocomplete
            freeSolo
            id='free-solo-2-demo'
            disableClearable
            options={suburb.map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Enter Suburb or city...'
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
}

// w-[292px] h-9 px-2.5 py-3 bg-white rounded-[5px] border border-stone-500 justify-start items-center gap-2.5 inline-flex