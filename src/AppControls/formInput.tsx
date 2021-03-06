// @flow

import * as React from 'react'
import {
  FormGroup,
  ControlLabel,
} from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'

type Props = {
  controlId: string,
  placeholder?: string,
  label?: string,
  validationState: string,
  options: Array<string>,
  autoFocus?: boolean,
}

const FormInput = ({ controlId, placeholder, label, validationState, options, autoFocus }: Props) =>
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <Typeahead
     
      placeholder={placeholder}
      options={options}
      minLength={1}
      maxResults={5}
      paginate={false}
      bodyContainer
      autoFocus={autoFocus}
    />
  </FormGroup>

export default FormInput
