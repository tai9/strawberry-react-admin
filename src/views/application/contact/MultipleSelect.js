import React from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const jobsData = [
    { title: 'Work', value: 1 },
    { title: 'Personal', value: 2 }
];

const MultipleSelect = ({ defaultValue }) => {
    return (
        <Autocomplete
            multiple
            ChipProps={{ color: 'secondary', variant: 'outlined' }}
            id="tags-outlined"
            options={jobsData}
            defaultValue={[jobsData[defaultValue]]}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
    );
};

export default MultipleSelect;
