import React, { useState } from 'react';
import {
  Heading,
  HStack,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  FormControl,
  FormLabel,
  Stack,
} from '@chakra-ui/react';

function GuestList({
  adultGuest,
  setAdultGuest,
  childrenGuest,
  setChildrenGuest,
  infantGuest,
  setInfantGuest,
  totalGuest,
}) {
  const setAdult = (value) => {
    value === 'decrement'
      ? setAdultGuest(adultGuest - 1)
      : setAdultGuest(adultGuest + 1);
  };
  const setChildren = (value) => {
    value === 'decrement'
      ? setChildrenGuest(childrenGuest - 1)
      : setChildrenGuest(childrenGuest + 1);
  };
  const setInfant = (value) => {
    value === 'decrement'
      ? setInfantGuest(infantGuest - 1)
      : setInfantGuest(infantGuest + 1);
  };
  return (
    <div>
      <HStack justifyContent={'space-between'}>
        <Heading size={'md'}>Guests</Heading>
        <Popover>
          <PopoverTrigger>
            <Button>Edit</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader bg={'teal.50'} paddingLeft='42%' fontWeight={'bold'}>
              Guests
            </PopoverHeader>
            <PopoverBody>
              <FormControl>
                <Stack>
                  <HStack className='adults' justifyContent={'space-between'}>
                    <FormLabel>Adults</FormLabel>
                    <HStack>
                      <Button
                        onClick={() => setAdult('decrement')}
                        isDisabled={adultGuest <= 1}
                      >
                        -
                      </Button>
                      <Text>{adultGuest}</Text>
                      <Button onClick={() => setAdult('increment')}>+</Button>
                    </HStack>
                  </HStack>
                  <HStack className='children' justifyContent={'space-between'}>
                    <FormLabel>Children</FormLabel>
                    <HStack>
                      <Button
                        onClick={() => setChildren('decrement')}
                        isDisabled={childrenGuest < 1}
                      >
                        -
                      </Button>
                      <Text>{childrenGuest}</Text>
                      <Button onClick={() => setChildren('increment')}>
                        +
                      </Button>
                    </HStack>
                  </HStack>
                  <HStack className='infant' justifyContent={'space-between'}>
                    <FormLabel>Infant</FormLabel>
                    <HStack>
                      <Button
                        onClick={() => setInfant('decrement')}
                        isDisabled={infantGuest < 1}
                      >
                        -
                      </Button>
                      <Text>{infantGuest}</Text>
                      <Button onClick={() => setInfant('increment')}>+</Button>
                    </HStack>
                  </HStack>
                </Stack>
              </FormControl>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      {totalGuest() > 1 ? (
        <Text>{totalGuest()} guests</Text>
      ) : (
        <Text>{totalGuest()} guest</Text>
      )}
    </div>
  );
}

export default GuestList;