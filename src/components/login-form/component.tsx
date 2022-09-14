import React from 'react';
import TextInputField from '../inputs/text-input';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';

import { Button, StyleSheet, Text, View } from 'react-native';

type FormValues = {
  email: string;
  password: string;
};

const LogInForm = () => {
  const { ...methods } = useForm({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log({ data });

  const [formError, setError] = React.useState<boolean>(false);

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    return console.log({ errors });
  };
  return (
    <View style={styles.container}>
      {formError ? (
        <View>
          <Text style={{ color: 'red' }}>
            There was a problem with loading the form. Please try again later.
          </Text>
        </View>
      ) : (
        <>
          <FormProvider {...methods}>
            <TextInputField
              name="email"
              label="Email"
              placeholder="jon.doe@email.com"
              keyboardType="email-address"
              rules={{
                required: 'Email is required!',
                pattern: {
                  value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                  message: 'Must be formatted: john.doe@email.com',
                },
              }}
              setFormError={setError}
            />
            <TextInputField
              name="password"
              label="Password"
              secureTextEntry
              placeholder="**********"
              rules={{ required: 'Password is required!' }}
              setFormError={setError}
            />
          </FormProvider>
        </>
      )}
      <View style={styles.button}>
        <Button
          title="Login"
          color="#ec5990"
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '5px',
    padding: 8,
    backgroundColor: '#0e101c',
  },
});

export default LogInForm;
