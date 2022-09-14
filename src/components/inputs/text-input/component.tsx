import React from 'react';
import {
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  StyleSheet,
} from 'react-native';

import {
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';

interface ControlledInputProps extends RNTextInputProps, UseControllerProps {
  label?: string;
  placeholder?: string;
  name: string;
  defaultValue?: string;
  setFormError: () => void;
}

const ControlledInput = (props: ControlledInputProps) => {
  const formContext = useFormContext();
  const { formState } = formContext;
  const { name, label, rules, placeholder, defaultValue, ...inputProps } =
    props;
  const { field } = useController({ name, rules, defaultValue });
  const hasError = Boolean(formState?.errors[name]);

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        autoCapitalize="none"
        textAlign="left"
        onBlur={field.onBlur}
        value={field.value}
        placeholder={placeholder}
        onChangeText={field.onChange}
        {...inputProps}
      />
      ;
      <View style={styles.errorContainer}>
        {hasError && (
          <Text style={styles.error}>{formState.errors[name].message}</Text>
        )}
      </View>
    </View>
  );
};

export const TextInputField = (props: ControlledInputProps) => {
  const { name, setFormError } = props;

  const formContext = useFormContext();

  // Placeholder until input name is initialized
  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined';
    console.error(msg);
    setFormError(true);
    return null;
  }

  return <ControlledInput {...props} />;
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  container: {
    flex: -1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
    borderColor: 'white',
    borderWidth: 1,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  errorContainer: {
    flex: -1,
    height: 25,
  },
  error: {
    color: 'red',
  },
});

export default TextInputField;
