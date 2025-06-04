import { Checkbox, Flex, Group, NumberFormatter, ScrollArea, Text } from '@mantine/core';
import classes from './ServiceSelect.module.css';
import { Dispatch, SetStateAction } from 'react';

export function ServiceSelect({
  checked, 
  setChecked, 
  data
} : {
  checked: number,
  setChecked: Dispatch<SetStateAction<number>>,
  data: {
    title: string;
    description: string;
    price: number;
  }[]
}) {

  return (
    <ScrollArea h={400}>
      
      <Flex direction="column" px={0}>
        {data.map((item, index) => (
          <Checkbox.Card
            key={index}
            className={classes.root}
            radius="md"
            mt={10}
            checked={checked === index}
            onClick={() => checked === index ? setChecked(-1) : setChecked(index)}
          >
            <Group justify="space-between" mt="md" mb="xs">
              <Text className={classes.label}>{item.title}</Text>
              <NumberFormatter className={classes.label} prefix="$ " value={item.price} />
            </Group>
              <Text className={classes.description}>{item.description}</Text>
          </Checkbox.Card>
        ))}
      </Flex>
    </ScrollArea>
  );
}