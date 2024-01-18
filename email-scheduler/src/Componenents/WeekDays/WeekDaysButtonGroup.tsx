import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';


export default function WeekDaysButtonGroup() {
  return (
    <Box sx={{ resize: 'horizontal',  gap: 2, px: 2 ,display:'flex' }}>
    
      <FormLabel
        id="week-day-attribute"
        sx={{
          mb: 2,
         
         
        }}
      >
        Repeat
      </FormLabel>
      <RadioGroup
        aria-labelledby="week-day-attribute"
        defaultValue="Monday"
        sx={{ gap: 2, mb: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {[{display:'S',value:'Sunday'}, {display:'M',value:'Monday'}, {display:'T',value:'Tuesday'},{display:'W',value:'Wednesday'}, {display:'T',value:'Thursday'} , {display:'F',value:'Friday'} ,{display:'S',value:'Saturday'}].map((day) => (
          <Sheet
            key={day.value}
            sx={{
              position: 'relative',
              width: 40,
              height: 40,
              flexShrink: 0,
              borderRadius: '10%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '--joy-focus-outlineOffset': '4px',
              '--joy-palette-focusVisible': (theme) =>
                theme.vars.palette.neutral.outlinedBorder,
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.label}`]: {
                  fontWeight: 'lg',
                },
                [`& .${radioClasses.action}`]: {
                  '--variant-borderWidth': '2px',
                  borderColor: 'text.secondary',
                },
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
            }}
          >
            <Radio color="neutral" overlay disableIcon value={day.value} label={day.display} />
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
  );
}