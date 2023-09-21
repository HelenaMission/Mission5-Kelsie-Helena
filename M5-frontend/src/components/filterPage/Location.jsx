import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

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
    <div className="absolute left-[199px] top-[65px] font-['Plus Jakarta Sans'] ">
      <div className='text-2xl font-bold leading-loose'>Location</div>
      <div className='relative top-[10px]'>
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
                    'h-12 bg-white rounded-[10px] border border-stone-500 justify-start items-center inline-flex',
                }}
                sx={{ '.MuiInputLabel-root': { top: '-4px' } }}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
}
