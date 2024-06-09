import React from 'react';
import Button from './Button';
import Input from './Input';
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseMake, chooseModel, chooseYear, choosePrice } from '../redux/slices/RootSlices';

interface CarFormProps {
  id?: string[];
}

const CarForm = (props: CarFormProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      setTimeout(() => { window.location.reload(); }, 500);
      event.target.reset();
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(choosePrice(data.price));
      server_calls.create(store.getState());
      setTimeout(() => { window.location.reload(); }, 500);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="make">Car Make</label>
      <Input {...register('make')} name='make' placeholder="Car Make" />

      <label htmlFor="model">Model</label>
      <Input {...register('model')} name='model' placeholder="Model" />

      <label htmlFor="year">Year</label>
      <Input {...register('year')} name='year' placeholder="Year" />

      <label htmlFor="price">Price</label>
      <Input {...register('price')} name='price' placeholder="Price" />

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default CarForm;
