import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { list } from 'postcss';

export default function Location({ onLocationChange }) {
  const [suburb, setSuburb] = useState([]);
  const [location, setLocation] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/properties').then((response) => {
      const receivedSuburb = response.data.property.map((property) => property.address.suburb);
      const removeDuplicate = [...new Set(receivedSuburb)];
      setSuburb(removeDuplicate);
    });
  }, [suburb]);

  const onInputChange = (value) => {
    setLocation(value);
    onLocationChange(value);
  };
  return (
    <div>
      <div className="absolute left-[199px] top-[108px] text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">
        Location
      </div>
      <div className='left-[199px] top-[168px] absolute text-black'>
        <Stack spacing={2} sx={{ width: 400 }}>
          <Autocomplete
            freeSolo
            id='free-solo-2-demo'
            disableClearable
            options={suburb.map((option) => option)}
            inputValue={inputValue}
            onInputChange={(event, value) => {
              setInputValue(value);
            }}
            onChange={(event, value) => {
              onLocationChange(value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Enter Suburb or city...'
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  className:
                    'h-11 px-2.5 py-3 bg-white rounded-[10px] border border-stone-400 justify-start items-center gap-2.5 inline-flex',
                }}
                sx={{ '.MuiInputLabel-root': { top: '-8px' } }}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
}
