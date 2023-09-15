import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

type ButtonIconProps = {
  icon: IconDefinition
}

export const ButtonIcon = ({ icon }: ButtonIconProps) => {
  return <FontAwesomeIcon icon={icon} />
}
