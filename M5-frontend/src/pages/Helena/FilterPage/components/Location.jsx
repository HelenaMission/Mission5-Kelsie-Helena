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
      const receivedSuburb = response.data.map((property) => property.address.suburb);
      const removeDuplicate = [...new Set(receivedSuburb)];
      setSuburb(removeDuplicate);
    });
  }, []);

  const onInputChange = (value) => {
    setLocation(value);
    onLocationChange(value);
  };
  return (
    <div>
      <div className="left-[189px] top-[308px] absolute text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
        Location
      </div>
        <div className='left-[189px] top-[358px] absolute text-black'>
          <Stack spacing={2} sx={{ width: 250 }}>
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
                      'h-9 px-2.5 py-3 bg-white rounded-[5px] border border-stone-500 justify-start items-center gap-2.5 inline-flex',
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
