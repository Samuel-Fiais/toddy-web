import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Spinner = () => {
  return <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
}
