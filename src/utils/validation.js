import { useEffect, useState } from "react";

function useValidation(value, validations) {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      // eslint-disable-next-line default-case
      switch (validation) {
        case "minLength":
          value && value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "maxLength":
          value && value.length < validations[validation]
            ? setMaxLengthError(false)
            : setMaxLengthError(true);

          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLocaleLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid,
  };
}

export default function useInput(InitialValue, validations) {
  const [value, setValue] = useState(InitialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  //срабатывает при взаимодействии с инпутом
  const onChange = (e) => {
    setValue(e.target.value);
  };

  //срабатывает когда пользователь покинул инпут
  const onBlur = (e) => {
    setDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
}
